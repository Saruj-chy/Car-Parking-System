/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import React, { useState } from 'react';
import MainNavigationScreen from './Components/MainNavigationScreen/MainNavigationScreen';
import {NativeRouter, Route} from 'react-router-native';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import RegistrationScreen from './Components/RegistrationScreen/RegistrationScreen';
import { createContext } from 'react';
import testMain from './Components/MainNavigationScreen/testMain';


export const UserContext = createContext();

function App() {
  const [loggedInUserID, setLoggedInUserID] = useState(0);

  return (
    <UserContext.Provider value={[loggedInUserID, setLoggedInUserID]} >
      <NativeRouter>
      <Route exact path="/" component={LoginScreen} />
      <Route exact path="/registration" component={RegistrationScreen} />
      <Route exact path="/main" component={MainNavigationScreen} />

    </NativeRouter>

    </UserContext.Provider>
    
  );
}

export default App;

//#0000FF   blue color
