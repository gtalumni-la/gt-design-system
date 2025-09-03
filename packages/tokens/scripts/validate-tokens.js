#!/usr/bin/env node

/**
 * Token Reference Validation Script
 * Validates that all token references {reference.path.to.token} resolve correctly
 *
 * Usage: node scripts/validate-tokens.js
 */

import { readFileSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TOKENS_DIR = join(__dirname, '../tokens');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(colors[color] + message + colors.reset);
}

function deepMerge(target, source) {
  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

function loadTokensRecursively(dir) {
  let tokens = {};

  try {
    const entries = readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively load tokens from subdirectories
        const subTokens = loadTokensRecursively(fullPath);
        deepMerge(tokens, subTokens);
      } else if (entry.name.endsWith('.json')) {
        try {
          const content = readFileSync(fullPath, 'utf8');
          const parsed = JSON.parse(content);
          deepMerge(tokens, parsed);
        } catch (error) {
          log(`❌ Error reading ${fullPath}: ${error.message}`, 'red');
        }
      }
    }
  } catch (error) {
    log(`❌ Error reading directory ${dir}: ${error.message}`, 'red');
  }

  return tokens;
}

function findTokenReferences(obj, path = '') {
  const references = [];

  if (typeof obj === 'object' && obj !== null) {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;

      if (typeof value === 'object' && value !== null) {
        if (
          value.value &&
          typeof value.value === 'string' &&
          value.value.startsWith('{') &&
          value.value.endsWith('}')
        ) {
          // Found a token reference
          const reference = value.value.slice(1, -1); // Remove { }
          references.push({
            path: currentPath,
            reference: reference,
            fullToken: value,
          });
        } else {
          // Recurse into nested objects
          references.push(...findTokenReferences(value, currentPath));
        }
      }
    }
  }

  return references;
}

function getValueAtPath(obj, path) {
  const parts = path.split('.');
  let current = obj;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }

  return current?.value || current;
}

function validateTokenReferences() {
  log('🔍 Loading tokens...', 'blue');
  const allTokens = loadTokensRecursively(TOKENS_DIR);

  log('📋 Finding token references...', 'blue');
  const references = findTokenReferences(allTokens);

  log(`Found ${references.length} token references to validate\\n`, 'yellow');

  let validCount = 0;
  let invalidCount = 0;
  const issues = [];

  for (const ref of references) {
    const referencedValue = getValueAtPath(allTokens, ref.reference);

    if (referencedValue !== undefined) {
      validCount++;
      log(`✅ ${ref.path} → {${ref.reference}} = ${referencedValue}`, 'green');
    } else {
      invalidCount++;
      const issue = `❌ ${ref.path} → {${ref.reference}} (NOT FOUND)`;
      log(issue, 'red');
      issues.push(issue);
    }
  }

  log(`\\n${colors.bold}Validation Results:${colors.reset}`);
  log(`✅ Valid references: ${validCount}`, validCount > 0 ? 'green' : 'reset');
  log(
    `❌ Invalid references: ${invalidCount}`,
    invalidCount > 0 ? 'red' : 'reset',
  );

  if (invalidCount > 0) {
    log(`\\n${colors.bold}Issues found:${colors.reset}`, 'red');
    issues.forEach((issue) => console.log(issue));
    process.exit(1);
  } else {
    log(`\\n🎉 All token references are valid!`, 'green');
  }
}

// Run validation
validateTokenReferences();
