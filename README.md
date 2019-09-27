# react-native-apple-sign-in

## Getting started

`$ npm install react-native-apple-sign-in --save`

### Mostly automatic installation

`$ react-native link react-native-apple-sign-in`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-apple-sign-in` and add `AppleSignIn.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libAppleSignIn.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.AppleSignInPackage;` to the imports at the top of the file
  - Add `new AppleSignInPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-apple-sign-in'
  	project(':react-native-apple-sign-in').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-apple-sign-in/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-apple-sign-in')
  	```


## Usage
```javascript
import AppleSignIn from 'react-native-apple-sign-in';

// TODO: What to do with the module?
AppleSignIn;
```
