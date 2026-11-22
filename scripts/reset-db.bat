@echo off
echo Resetting local SQLite database...
cd frontend
if exist prisma\dev.db del /f /q prisma\dev.db
call npx prisma db push
call npx ts-node prisma/seed.ts
echo Database reset complete!
