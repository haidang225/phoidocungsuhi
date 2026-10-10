#!/usr/bin/env node
/**
 * Quick Commit & Fast Push to GitHub Helper
 * - Configures Git HTTP buffers to prevent HTTP 413 / RPC upload errors
 * - Adds all tracked and valid project files (excluding node_modules & dist)
 * - Creates a clean, structured commit
 * - Pushes to remote origin if configured
 */

import { execSync } from 'node:child_process';

function run(cmd, capture = false) {
  try {
    return execSync(cmd, { stdio: capture ? 'pipe' : 'inherit', encoding: 'utf8' });
  } catch (err) {
    if (capture) return '';
    throw err;
  }
}

console.log('\n🚀 [Fast GitHub Commit & Push Helper]');

// 1. Configure git buffers for ultra-fast, robust pushing to GitHub
try {
  run('git config http.postBuffer 524288000');
  run('git config core.compression 9');
  
  const currentEmail = run('git config user.email', true).trim();
  if (!currentEmail) {
    run('git config user.name "Viet Phuc Developer"');
    run('git config user.email "developer@vietphuc.vn"');
  }
  console.log('✅ Git optimized: 500MB upload buffer & maximum compression active.');
} catch (e) {
  // non-fatal
}

// 2. Stage files
console.log('📦 Staging files for commit...');
run('git add -A');

// 3. Check status
const statusOutput = run('git status --porcelain', true).trim();
if (!statusOutput) {
  console.log('✨ Không có thay đổi nào cần commit. Toàn bộ code đã được lưu trữ.');
} else {
  // Commit
  const commitMsg = process.argv.slice(2).join(' ') || `Update: Tối ưu dữ liệu & kiến trúc trang phục [${new Date().toISOString().replace('T', ' ').substring(0, 19)}]`;
  console.log(`💾 Đang tạo commit: "${commitMsg}"...`);
  run(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);
  console.log('✅ Commit thành công!');
}

// 4. Check if remote origin exists
const remotes = run('git remote', true).trim();
if (remotes.includes('origin')) {
  console.log('📤 Đang gửi (push) dữ liệu lên GitHub...');
  try {
    const branch = run('git branch --show-current', true).trim() || 'main';
    run(`git push -u origin ${branch}`);
    console.log(`🎉 PUSH THÀNH CÔNG lên GitHub nhánh [${branch}]!`);
  } catch (err) {
    console.log('\n⚠️ Lưu ý khi push: Nếu GitHub yêu cầu xác thực hoặc nhánh khác, bạn có thể chạy:');
    console.log('   git push -u origin main --force-with-lease');
  }
} else {
  console.log('\n📌 Chưa cấu hình remote GitHub. Để gửi lên GitHub, bạn chỉ cần gõ 2 lệnh sau:');
  console.log('   1. git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git');
  console.log('   2. git push -u origin main\n');
}
