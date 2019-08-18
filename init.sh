#!/bin/bash

SCRIPTPATH=`realpath $0`
npx react-native-rename "$1" -b "$2" &&
yarn &&
cd ios &&
pod install &&
cd ../android/app &&
keytool -genkey -noprompt -v \
  -keystore debug.keystore \
  -storepass android \
  -alias androiddebugkey \
  -keypass android \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -dname "CN=$2, OU=android, O=android, L=android, S=android, C=AN" &&
rm -- $SCRIPTPATH
