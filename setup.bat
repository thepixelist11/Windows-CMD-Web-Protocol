@echo off
rem Install Node.js and NPM
msiexec /i "%~dp0node-v18.16.0-x64.msi" /qn
curl -sL https://npmjs.org/install.sh | sh
rem Create the directory to store the script and download the script from the repository
mkdir %ProgramFiles%\CMDWebProtocol
cd %ProgramFiles%\CMDWebProtocol
git clone --depth 1 --filter=blob:none https://github.com/thepixelist11/Windows-CMD-Web-Protocol
move .\Windows-CMD-Web-Protocol\main.js .\main.js
del -r -force .\Windows-CMD-Web-Protocol
rem Edit registry
reg add "HKEY_CLASSES_ROOT\cmd" /f
reg add "HKEY_CLASSES_ROOT\cmd\shell" /f
reg add "HKEY_CLASSES_ROOT\cmd\shell\open" /f
reg add "HKEY_CLASSES_ROOT\cmd\shell\open\command" /ve /t REG_SZ /d "cmd.exe /k node %ProgramFiles%\CMDWebProtocol\main.js %1" /f
