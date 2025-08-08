#!/usr/bin/env node

/**
 * Preview Documentation Script
 * 
 * This script helps manage documentation previews
 * 
 * Usage:
 *   node scripts/preview-docs.js --list
 *   node scripts/preview-docs.js --cleanup pr-123
 *   node scripts/preview-docs.js --cleanup-old
 */

const { execSync } = require('child_process');
const https = require('https');

const args = process.argv.slice(2);
const listArg = args.indexOf('--list');
const cleanupArg = args.indexOf('--cleanup');
const cleanupOldArg = args.indexOf('--cleanup-old');

if (listArg !== -1) {
  listPreviews();
  process.exit(0);
}

if (cleanupArg !== -1 && args[cleanupArg + 1]) {
  const previewPath = args[cleanupArg + 1];
  cleanupPreview(previewPath);
  process.exit(0);
}

if (cleanupOldArg !== -1) {
  cleanupOldPreviews();
  process.exit(0);
}

console.log('Usage: node scripts/preview-docs.js [--list | --cleanup <path> | --cleanup-old]');
process.exit(1);

async function fetchPreviews() {
  return new Promise((resolve, reject) => {
    const url = 'https://gtalumni-la.github.io/gt-design-system/previews.json';
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const previews = JSON.parse(data);
          resolve(previews);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

async function listPreviews() {
  console.log('📖 Active Documentation Previews:');
  console.log('');
  
  try {
    const data = await fetchPreviews();
    
    if (data.previews.length === 0) {
      console.log('No active previews found.');
      return;
    }
    
    console.log('┌─────────────────┬──────────────────────┬─────────────────┐');
    console.log('│ Preview         │ Branch/PR            │ Created         │');
    console.log('├─────────────────┼──────────────────────┼─────────────────┤');
    
    data.previews.forEach(preview => {
      const path = preview.path.padEnd(15);
      const branch = (preview.pr ? `PR #${preview.pr}` : preview.branch).padEnd(20);
      const created = new Date(preview.created).toLocaleDateString().padEnd(15);
      console.log(`│ ${path} │ ${branch} │ ${created} │`);
    });
    
    console.log('└─────────────────┴──────────────────────┴─────────────────┘');
    console.log('');
    console.log('📝 Preview URLs:');
    data.previews.forEach(preview => {
      console.log(`  ${preview.path}: ${preview.url}`);
    });
    
    console.log('');
    console.log('🧹 Cleanup commands:');
    console.log('  pnpm preview:cleanup <path>    # Remove specific preview');
    console.log('  pnpm preview:cleanup-old       # Remove previews older than 7 days');
    
  } catch (error) {
    console.error('❌ Error fetching previews:', error.message);
    console.log('💡 This might be normal if no previews have been created yet.');
  }
}

function cleanupPreview(previewPath) {
  console.log(`🧹 Cleaning up preview: ${previewPath}...`);
  
  try {
    // This would typically be done via GitHub API or workflow dispatch
    console.log('💡 Preview cleanup should be done via GitHub Actions.');
    console.log('   The cleanup will happen automatically when:');
    console.log('   - A PR is closed');
    console.log('   - A branch is deleted');
    console.log('');
    console.log('🔧 Manual cleanup:');
    console.log(`   1. Go to: https://github.com/gtalumni-la/gt-design-system/actions`);
    console.log(`   2. Run the "Cleanup Preview" workflow`);
    console.log(`   3. Or delete the branch/close the PR associated with: ${previewPath}`);
    
  } catch (error) {
    console.error('❌ Error during cleanup:', error.message);
  }
}

async function cleanupOldPreviews() {
  console.log('🧹 Checking for old previews to cleanup...');
  
  try {
    const data = await fetchPreviews();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const oldPreviews = data.previews.filter(preview => 
      new Date(preview.created) < sevenDaysAgo
    );
    
    if (oldPreviews.length === 0) {
      console.log('✅ No old previews found (older than 7 days).');
      return;
    }
    
    console.log(`📋 Found ${oldPreviews.length} old preview(s):`);
    oldPreviews.forEach(preview => {
      console.log(`  - ${preview.path} (${preview.branch}, ${new Date(preview.created).toLocaleDateString()})`);
    });
    
    console.log('');
    console.log('💡 These previews can be cleaned up manually by:');
    console.log('   1. Deleting their associated branches (if still exist)');
    console.log('   2. Running the cleanup workflow manually');
    console.log('   3. Or they will be cleaned up automatically when space is needed');
    
  } catch (error) {
    console.error('❌ Error checking for old previews:', error.message);
  }
}