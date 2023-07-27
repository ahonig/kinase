import React from 'react';
import Constants from 'expo-constants';
import * as firebase from 'firebase/app';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

const firebaseConfig = {
  apiKey: "AIzaSyAJn9Y772ckgxN1qSgH5PQrFhGpIniksqU",
  authDomain: "kinase-mvp.firebaseapp.com",
  projectId: "kinase-mvp",
  storageBucket: "kinase-mvp.appspot.com",
  messagingSenderId: "1065466409021",
  appId: "1:1065466409021:web:a701afb101caa2feb13a54",
  measurementId: "G-Q2EBG9W27T"
};

const Stack = createStackNavigator();

if (firebase.getApps().length < 1 ){
  firebase.initializeApp(firebaseConfig);
}



export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>      
      </NavigationContainer>
    </View>
  );
}

