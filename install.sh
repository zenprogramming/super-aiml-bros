#!/bin/bash

command -v nvm >/dev/null 2>&1 || { echo >&2 "I require nvm but it's not installed.  Aborting."; exit 1; }

# Linux, Mac = https://github.com/creationix/nvm
# Windows = https://github.com/coreybutler/nvm-windows

# download the node version manager (nvm)
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

command -v npm >/dev/null 2>&1 || { echo >&2 "I require npm but it's not installed.  Aborting."; exit 1; }

npm install @tensorflow/tfjs
npm install @tensorflow/tfjs-node
npm install @tensorflow/tfjs-node-gpu

if [[ -e readme.txt ]] ; then

else

fi
