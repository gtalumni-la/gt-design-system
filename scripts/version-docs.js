#!/usr/bin/env node

/**
 * Version Documentation Script
 * 
 * This script helps create version tags and trigger documentation deployments
 * 
 * Usage:
 *   node scripts/version-docs.js --version 1.0.0
 *   node scripts/version-docs.js --list
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const versionArg = args.indexOf('--version');
const listArg = args.indexOf('--list');

if (listArg !== -1) {
  listVersions();
  process.exit(0);
}

if (versionArg === -1 || !args[versionArg + 1]) {
  console.log('Usage: node scripts/version-docs.js --version <version>');
  console.log('       node scripts/version-docs.js --list');
  process.exit(1);
}

const version = args[versionArg + 1];

// Validate version format
if (!/^\d+\.\d+\.\d+$/.test(version)) {
  console.error('Version must be in format X.Y.Z (e.g., 1.0.0)');
  process.exit(1);
}

function listVersions() {
  console.log('📚 Available Documentation Versions:');
  console.log('');
  
  try {
    // List git tags
    const tags = execSync('git tag -l "v*" --sort=-version:refname', { encoding: 'utf-8' })
      .trim()
      .split('\n')
      .filter(Boolean);
    
    if (tags.length === 0) {
      console.log('No version tags found.');
      return;
    }
    
    tags.forEach(tag => {
      const date = execSync(`git log -1 --format=%ci ${tag}`, { encoding: 'utf-8' }).trim();
      console.log(`  ${tag} (${date.split(' ')[0]})`);
    });
    
    console.log('');
    console.log('💡 To create a new version: node scripts/version-docs.js --version X.Y.Z');
  } catch (error) {
    console.error('Error listing versions:', error.message);
  }
}

function createVersion(version) {
  const tagName = `v${version}`;
  
  console.log(`🚀 Creating documentation version ${tagName}...`);
  console.log('');
  
  try {
    // Check if tag already exists
    try {
      execSync(`git rev-parse ${tagName}`, { stdio: 'ignore' });
      console.error(`Tag ${tagName} already exists!`);
      process.exit(1);
    } catch {
      // Tag doesn't exist, continue
    }
    
    // Update package.json version
    console.log('📦 Updating package.json version...');
    const packagePath = path.join(__dirname, '../package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
    packageJson.version = version;
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
    
    // Commit version change
    console.log('📝 Committing version update...');
    execSync(`git add package.json`);
    execSync(`git commit -m "chore: bump version to ${version}"`);
    
    // Create and push tag
    console.log('🏷️  Creating and pushing tag...');
    execSync(`git tag ${tagName}`);
    execSync(`git push origin main`);
    execSync(`git push origin ${tagName}`);
    
    console.log('');
    console.log('✅ Version created successfully!');
    console.log('');
    console.log('📖 The documentation will be automatically deployed to:');
    console.log(`   https://gtalumni-la.github.io/gt-design-system/${tagName}/`);
    console.log('');
    console.log('⏱️  Deployment usually takes 2-3 minutes. Check the Actions tab on GitHub.');
    
  } catch (error) {
    console.error('❌ Error creating version:', error.message);
    process.exit(1);
  }
}

createVersion(version);