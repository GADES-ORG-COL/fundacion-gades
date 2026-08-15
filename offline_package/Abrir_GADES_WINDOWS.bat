@echo off
cd /d %~dp0
set URL=http://localhost:8080

start "GADES Offline Server" /B python -m http.server 8080 >nul 2>&1
if %errorlevel% neq 0 (
  start "GADES Offline Server" /B py -m http.server 8080 >nul 2>&1
)

timeout /t 1 /nobreak >nul
start "" %URL%
echo.
echo Servidor iniciado en %URL%
echo Deja esta ventana abierta mientras revisan la pagina.
echo Para cerrar, presiona Ctrl + C y luego confirma con Y.
echo.
if exist nul pause
