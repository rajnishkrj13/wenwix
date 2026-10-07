# Automated Git Sync & Deployment Script for Wenwix.com
param(
    [string]$Message = ""
)

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor DarkCyan
Write-Host " Wenwix Automated Build, Git & Deploy   " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor DarkCyan

# 1. Git Status & Push
Write-Host "`n>>> [1/4] Checking Git repository status..." -ForegroundColor Cyan
$gitStatus = git status --porcelain

if ($gitStatus) {
    if (-not $Message) {
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        $Message = "deploy: automatic sync and update at $timestamp"
    }
    Write-Host "Staging and committing local changes: '$Message'..." -ForegroundColor Yellow
    git add .
    git commit -m $Message
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Git commit failed. Aborting." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "Working tree clean, no new uncommitted changes." -ForegroundColor Green
}

# Check if any commits need to be pushed to remote
Write-Host "Pushing latest commits to GitHub (origin main)..." -ForegroundColor Cyan
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Warning: Git push encountered an issue, proceeding with deployment..." -ForegroundColor Yellow
} else {
    Write-Host "GitHub origin main is fully up-to-date." -ForegroundColor Green
}

# 2. Build Production Bundle
Write-Host "`n>>> [2/4] Building production bundle (vite build)..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Aborting deployment." -ForegroundColor Red
    exit 1
}

# 3. Package Bundle
Write-Host "`n>>> [3/4] Compressing dist package..." -ForegroundColor Cyan
tar -czf dist.tar.gz -C dist .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Compression failed! Aborting deployment." -ForegroundColor Red
    exit 1
}

# 4. Upload & Extract via SSH to Hostinger
Write-Host "`n>>> [4/4] Uploading to Hostinger (domains/wenwix.com)..." -ForegroundColor Cyan
scp -P 65002 dist.tar.gz u697018640@62.72.28.71:domains/wenwix.com/
if ($LASTEXITCODE -ne 0) {
    Write-Host "SCP Upload failed! Aborting." -ForegroundColor Red
    Remove-Item -Path "dist.tar.gz" -Force -ErrorAction SilentlyContinue
    exit 1
}

Write-Host "Extracting files on remote server (public_html)..." -ForegroundColor Cyan
ssh -p 65002 u697018640@62.72.28.71 "tar -xzf domains/wenwix.com/dist.tar.gz -C domains/wenwix.com/public_html/ && rm -f domains/wenwix.com/dist.tar.gz"

Remove-Item -Path "dist.tar.gz" -Force -ErrorAction SilentlyContinue

Write-Host "`n=======================================================" -ForegroundColor Green
Write-Host " SUCCESS: Deployed to https://wenwix.com/ and synced!   " -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Green
