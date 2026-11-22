# Backup local SQLite database
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$source = Join-Path $PSScriptRoot "..\frontend\prisma\dev.db"
$destDir = Join-Path $PSScriptRoot "..\backups"

if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

$destFile = Join-Path $destDir "dev_backup_$timestamp.db"
if (Test-Path $source) {
    Copy-Item $source $destFile
    Write-Host "[OK] Database backed up to: $destFile" -ForegroundColor Green
} else {
    Write-Host "[WARN] No active dev.db found to backup." -ForegroundColor Yellow
}
