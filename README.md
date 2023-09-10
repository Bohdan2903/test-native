# test-native

node "^16.14.0 || >=18.0.0"
npm 6.14.13
nvm 0.39.4
ruby >= 2.6.10
cocoapods >= 1.12.0

npm i --legacy-peer-deps / yarn

npm run postinstall

npm run pods

npm start --reset-cache / npm run ios

if error rm -rf ~/Library/Developer/Xcode/DerivedData/ && 
npm run pods-update
in x-code : product/destination/Iphone 14 simulator
