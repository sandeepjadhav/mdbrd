// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Layout from './src/common/Layout';
import Login from './src/modules/authentication/Login';

import SignUp from './src/modules/authentication/SignUp';
import BasicInfo from './src/modules/authentication/BasicInfo';
import Education from './src/modules/authentication/Education';
import Contact from './src/modules/authentication/Contact';
import VerifyContact from './src/modules/authentication/VerifyContact';
import UploadPhoto from './src/modules/authentication/UploadPhoto';
import Interests from './src/modules/authentication/Interests';
import BirthDate from './src/modules/authentication/BirthDate';
import SubscriptionPackage from './src/modules/authentication/SubscriptionPackage';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Layout" component={Layout} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="BasicInfo" component={BasicInfo} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="VerifyContact" component={VerifyContact} />
        <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
        <Stack.Screen name="Interests" component={Interests} />
        <Stack.Screen name="BirthDate" component={BirthDate} />
        <Stack.Screen
          name="SubscriptionPackage"
          component={SubscriptionPackage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
