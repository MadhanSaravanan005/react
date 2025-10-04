#!/bin/bash
# Vercel build script for faster deployment

echo "Starting optimized build..."

# Install only production dependencies
cd frontend
npm ci --only=production --silent

# Build the frontend
npm run build

echo "Build completed successfully!"