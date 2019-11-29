import React from 'react';
import { NativeModules ,requireNativeComponent ,Platform } from 'react-native';

const { AppleSignIn } = NativeModules;

export const RNSignInWithAppleButton = requireNativeComponent('RNCSignInWithAppleButton');

export const SignInWithAppleButton = (buttonStyle, callBack) => {
  if(Platform.OS === 'ios'){
    return <RNSignInWithAppleButton style={buttonStyle} onPress={async () => {
        await AppleSignIn.requestAsync({
          scopes: [AppleSignIn.Scope.FULL_NAME, AppleSignIn.Scope.EMAIL],
        }).then((response) => {
          callBack(response) //Display response
          }, (error) => {
            callBack(error) //Display error
           
        });

  }} />
  }else{
  return null

  }
   
}


export default AppleSignIn;
