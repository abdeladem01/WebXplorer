#!/bin/sh
pwd
LOG_TW= nodemonLogs.log
LOG_AN= angularLogs.log
echo "Welcome to our WebXploRer Launcher"
echo "Launching Node Server"
nodemon ./src/server.js &
echo "Please wait..."
sleep 5
echo "Node Server for back-end communication launched"
sleep 1
echo "Launching the Front-End WebXploRer app"
ng serve -o &
echo "WebXploRer will be launched automatically in browser, Enjoy the game"
echo "WebXploRer Team."
echo ""
sleep 1
echo "All next errors will be in log files in ./serverDebug"

wait
