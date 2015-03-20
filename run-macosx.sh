#!/bin/sh
sudo chown -R $USER
npm install
npm run build
cd dist
open -a 'Google Chrome' http://localhost:8000
python -m SimpleHTTPServer
