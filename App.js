import 'react-native-gesture-handler';

import React from 'react';
import MainNavigationScreen from './Components/MainNavigationScreen/MainNavigationScreen';
import {NativeRouter, Route} from 'react-router-native';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import RegistrationScreen from './Components/RegistrationScreen/RegistrationScreen';

function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={LoginScreen} />
      <Route exact path="/registration" component={RegistrationScreen} />
      <Route exact path="/main" component={MainNavigationScreen} />

    </NativeRouter>
  );
}

export default App;

//#0000FF   blue color
