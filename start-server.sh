#!/bin/bash

# Script para iniciar servidor de desarrollo
# Luis Vicente Guzmán - Portfolio

echo "🚀 Iniciando servidor de desarrollo..."
echo "📁 Directorio: $(pwd)"
echo ""

# Verificar si Python está disponible
if command -v python3 &> /dev/null; then
    echo "🐍 Usando Python 3 HTTP Server"
    echo "🌐 Accede a: http://localhost:8000"
    echo "⏹️  Para detener: Ctrl + C"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "🐍 Usando Python 2 HTTP Server"
    echo "🌐 Accede a: http://localhost:8000"
    echo "⏹️  Para detener: Ctrl + C"
    echo ""
    python -m SimpleHTTPServer 8000
elif command -v node &> /dev/null; then
    echo "📦 Usando Node.js HTTP Server"
    echo "🌐 Accede a: http://localhost:8000"
    echo "⏹️  Para detener: Ctrl + C"
    echo ""
    npx http-server . -p 8000 --cors
else
    echo "❌ Error: No se encontró Python ni Node.js"
    echo "📥 Instala Python 3 o Node.js para ejecutar un servidor local"
    exit 1
fi