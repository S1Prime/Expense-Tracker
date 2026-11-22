param(
    [string]$Message = "Update $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

$repoDir = $PSScriptRoot
Set-Location $repoDir

git add -A
$status = git status --porcelain
if ($status) {
    git commit -m "$Message"
    git push origin main
    Write-Host "[OK] Changes pushed successfully to GitHub!" -ForegroundColor Green
} else {
    Write-Host "[INFO] No new changes to push." -ForegroundColor Yellow
}
