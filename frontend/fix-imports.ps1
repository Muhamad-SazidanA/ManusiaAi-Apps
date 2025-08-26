# Fix imports in UI components
$uiPath = "c:\My All Projek Start 9 Feb 2025\PKL\Manusia-Ai-Website Backup\frontend\src\ui"

Get-ChildItem "$uiPath\*.tsx" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Fix @radix-ui imports
    $content = $content -replace '@radix-ui/([^@"]+)@[0-9]+\.[0-9]+\.[0-9]+', '@radix-ui/$1'
    
    # Fix lucide-react imports
    $content = $content -replace 'lucide-react@[0-9]+\.[0-9]+\.[0-9]+', 'lucide-react'
    
    # Fix class-variance-authority imports
    $content = $content -replace 'class-variance-authority@[0-9]+\.[0-9]+\.[0-9]+', 'class-variance-authority'
    
    Set-Content $_.FullName $content -NoNewline
    Write-Host "Fixed imports in $($_.Name)"
}
