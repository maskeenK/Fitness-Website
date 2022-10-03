@echo off
REM cd /d "C:\Users\hp\Desktop\Project Files\ThryveV6"
start cmd /k "node app.js"
timeout /t 5 /nobreak
start http://localhost:3000/
