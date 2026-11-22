# Auto-Push Watcher: Automatically commits and pushes whenever files change
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  Expense-Tracker Automatic Push Watcher    " -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "Monitoring folder for changes..." -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop.`n" -ForegroundColor DarkGray

$folder = $PSScriptRoot
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $folder
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

$script:lastPush = [DateTime]::MinValue

$action = {
    $itemPath = $Event.SourceEventArgs.FullPath
    if ($itemPath -like "*\.git*") { return }

    # Debounce events within 3 seconds
    $now = Get-Date
    if (($now - $script:lastPush).TotalSeconds -lt 3) { return }
    $script:lastPush = $now

    Start-Sleep -Seconds 2
    git -C $folder add -A
    $status = git -C $folder status --porcelain
    if ($status) {
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        git -C $folder commit -m "Auto-commit: $timestamp"
        git -C $folder push origin main
        Write-Host "[$timestamp] [✓] Automatically committed and pushed changes." -ForegroundColor Green
    }
}

Register-ObjectEvent $watcher "Changed" -Action $action | Out-Null
Register-ObjectEvent $watcher "Created" -Action $action | Out-Null
Register-ObjectEvent $watcher "Deleted" -Action $action | Out-Null
Register-ObjectEvent $watcher "Renamed" -Action $action | Out-Null

while ($true) {
    Start-Sleep -Seconds 1
}
