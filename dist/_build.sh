#!/bin/bash
# Gabriel AI Portal Build Script
echo "🔧 Building Gabriel AI Portal..."

# Create dist directory
mkdir -p dist

# Copy all files to dist
cp -r * dist/ 2>/dev/null || true

# Ensure admin dashboard is accessible
mkdir -p dist/admin/dashboard
cp admin/dashboard/index.html dist/admin/dashboard/ 2>/dev/null || true

echo "✅ Gabriel AI Portal build complete!"
