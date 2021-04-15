import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import CurrentLocation from './components/CurrentLocation/CurrentLocation';
import CurrentLocation from './components/CurrentLocation/CurrentLocation';
import GoogleMaps from './components/GoogleMaps/GoogleMaps';
import LoginPage from './components/LoginPage/LoginPage';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Home from './components/Home/Home';
import RefreshScreen from './components/RefreshScreen/RefreshScreen';

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {/* <Route exact path="/login" component={LoginPage} /> */}
          <Route exact path="/googlemaps" component={GoogleMaps} />
          <Route exact path="/location" component={CurrentLocation} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/refresh" component={RefreshScreen} />
        </Switch>
      </View>
    </NativeRouter>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b4b4b4',
    },
  
  });

export default App;
