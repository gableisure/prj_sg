@echo off
 
TITLE ETL_GS
SET currentdir=%~dp0
SET kitchen=D:\Portables\Pdi53\Kitchen.bat
SET logfile="%currentdir%log.txt"
 
echo. >> %logfile%
echo. >> %logfile%
# level: Error Minimal Basic Detailed Debug Rowlevel
"%kitchen%" /file:"%currentdir%carga_gs.kjb" /level:Basic >> %logfile%