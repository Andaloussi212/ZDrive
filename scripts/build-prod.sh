#!/bin/bash

set -e

echo "📦 Build du frontend..."
cd frontend
npm run build

echo "✅ Frontend buildé"

cd ..

echo "☕ Build du backend..."
cd backend
./mvnw clean package

echo "✅ Backend buildé"

cd ..

echo "🎉 Build production terminé"
echo "Frontend : frontend/dist"
echo "Backend  : backend/target/*.jar"
