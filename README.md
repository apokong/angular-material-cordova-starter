# Angular5 x Cordova Starter Kit

## angular-material-cordova-starter

###### ID: angular-material-cordova-starter
###### Author: Apo Kong


### Summary

An Angular-Cordova Starter kit featuring Angular5, angular material, Typescript, Cordova


##### Technology Stack
###### [NodeJS] version v8.9.4 (Latest LTS: Carbon) (https://nodejs.org/en/download/)
###### [Cordova] version 8.0.0 or above (https://cordova.apache.org/)
###### [Angular5] (https://angular.io/)
###### [Angular materials] 4 or above (https://material.angular.io/)


##### Installations
###### Gulp + Cordova + Angular5 + typescript
- npm install -g gulp cordova @angular/cli typescript
###### NPM install
- npm install


##### Platform: iOS
###### build www/ files with Anugluar
- ng build
###### build iOS files with Cordova
- cordova platform add ios
- cordova build


##### Run
###### Emulate in Chrome

    $ ng serve

###### Emulate in iOS simulator

    $ gulp


##### Release
###### Build in iOS

    $ gulp build


## Debug Issue

1. UnhandledPromiseRejectionWarning when 'cordova platform add ios' -> downgrade node version to v6.13.0 (Latest LTS: Boron)


### License
- Apo Kong <apokong@gmail.com>
- ©2018 (ISC).