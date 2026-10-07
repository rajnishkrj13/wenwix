# Automated Deployment Script for Wenwix.com
Write-Host ">>> Building production bundle..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Aborting deploy." -ForegroundColor Red
    exit 1
}

Write-Host ">>> Compressing dist folder..." -ForegroundColor Cyan
tar -czf dist.tar.gz -C dist .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Compression failed! Aborting deploy." -ForegroundColor Red
    exit 1
}

Write-Host ">>> Uploading to Hostinger (domains/wenwix.com)..." -ForegroundColor Cyan
scp -P 65002 dist.tar.gz u697018640@62.72.28.71:domains/wenwix.com/
if ($LASTEXITCODE -ne 0) {
    Write-Host "Upload failed! Aborting deploy." -ForegroundColor Red
    Remove-Item -Path "dist.tar.gz" -Force -ErrorAction SilentlyContinue
    exit 1
}

Write-Host ">>> Extracting on remote server (public_html)..." -ForegroundColor Cyan
ssh -p 65002 u697018640@62.72.28.71 "tar -xzf domains/wenwix.com/dist.tar.gz -C domains/wenwix.com/public_html/ && rm -f domains/wenwix.com/dist.tar.gz"

Remove-Item -Path "dist.tar.gz" -Force -ErrorAction SilentlyContinue

Write-Host ">>> Deployment to https://wenwix.com/ complete successfully!" -ForegroundColor Green
