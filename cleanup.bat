@echo off
echo Starting MTD-SESSIONS cleanup...

REM Remove all target directories
echo Removing Maven target directories...
for /d /r . %%d in (target) do @if exist "%%d" rd /s /q "%%d"

REM Remove all node_modules directories
echo Removing node_modules directories...
for /d /r . %%d in (node_modules) do @if exist "%%d" rd /s /q "%%d"

REM Remove specific redundant projects
echo Removing redundant projects...
if exist "13-03-2026\demo" rd /s /q "13-03-2026\demo"
if exist "14-03-2026\demo 2" rd /s /q "14-03-2026\demo 2"

REM Remove nested duplicate folders
echo Removing nested duplicates...
if exist "11-03-2026\productdb\productdb" (
    xcopy "11-03-2026\productdb\productdb\*" "11-03-2026\productdb\" /s /e /y
    rd /s /q "11-03-2026\productdb\productdb"
)

if exist "12-03-2026\schoolmanagementsystem\schoolmanagementsystem" (
    xcopy "12-03-2026\schoolmanagementsystem\schoolmanagementsystem\*" "12-03-2026\schoolmanagementsystem\" /s /e /y
    rd /s /q "12-03-2026\schoolmanagementsystem\schoolmanagementsystem"
)

REM Remove empty static and templates folders
echo Removing empty resource folders...
for /d /r . %%d in (static) do @if exist "%%d" if not exist "%%d\*" rd "%%d"
for /d /r . %%d in (templates) do @if exist "%%d" if not exist "%%d\*" rd "%%d"

echo Cleanup completed!
pause