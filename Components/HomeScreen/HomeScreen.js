/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable quotes */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import CurrentLocationScreen from '../CurrentLocationScreen/CurrentLocationScreen';
// import CurrentLocation from '../CurrentLocation/CurrentLocation';

import Geolocation from '@react-native-community/geolocation';
var SharedPreferences = require('react-native-shared-preferences');






const HomeScreen = ({ navigation }) => {
  // const [refreshing, setRefreshing] = useState(true);

  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');

  useEffect(() => {
    console.log('---------- HomeScreen   ------------------  ');

    location() ;


  }, []);

  const loadTouch = ()=>{
    console.log('load touch touch');
    location() ;
  }

  const location=()=>{
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);

        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
        SharedPreferences.setItem("lat", currentLatitude);
        SharedPreferences.setItem("long", currentLongitude);

        console.log("currentLatitude:" + currentLatitude + "    currentLongitude:" + currentLongitude);

      }, (error) => alert("Please turn on your location"), {
      enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
    }
    );
  }


  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
      style={{ flex: 1,  justifyContent:'center' }}
      onPress={
        () =>loadTouch()
      }
      >
      {
        console.log("\n HomeScreen currentLatitude in------------------------------:    " + currentLatitude)
      }
      {/* <CurrentLocationScreen
          // currentLatitude={currentLatitude}
          // currentLongitude={currentLongitude}
          setCurrentLatitude={setCurrentLatitude}
          setCurrentLongitude={setCurrentLongitude}
        /> */}
      {/* {currentLatitude > 0
          ? history.push('/googlemaps', {
              latitude: currentLatitude,
              longitude: currentLongitude,
            })
          : console.log('No: ' + currentLatitude)} */}

      {currentLatitude > 0 && navigation.navigate('Root', {
          screen: 'GoogleMaps',
          params: { latitude: currentLatitude, longitude: currentLongitude },
          key: 'gm-1'
        })

      }


      <ActivityIndicator size="large" color="#00ff00" />
      {/* <Text
        style={{
          textAlign: 'center',
          marginTop: 50,
          color: 'black',
          fontSize: 15,
        }}>
        Developed by {'\n'} Sarose Datta {'\n'}
        Mobile Application Developer {'\n'}
        CSE, CU, CTG
      </Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
