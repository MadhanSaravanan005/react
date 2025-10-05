#!/bin/bash
echo "Building frontend for Vercel..."
cd frontend
npm install
npm run build
echo "Frontend build completed!"
ls -la build/