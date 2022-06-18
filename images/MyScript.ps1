# MyFunctions.ps1 contains one or more functions

Write-Host "Welcome to the Party"
function Test-Me($param1)
{
    $tmp = New-TemporaryFile

@"
This is a multiline test
I think it $($param1) work
"@ | Out-File $tmp

Write-Host "Temp file at: $($tmp)"
}


