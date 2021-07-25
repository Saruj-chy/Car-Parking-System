/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable quotes */
import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
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
  const [req, setReq] = useState(false);

  useEffect(() => {
    console.log('---------- HomeScreen   ------------------  ');

   getSharedData();


  }, []);

  const getSharedData = () =>{
    SharedPreferences.getItems(["lat", "long"], function (values) {


      console.log(values[0] + "    " + values[1]);
      setCurrentLatitude(values[0]);
      setCurrentLongitude(values[1]);


    });
  }

  const sendRequest = useCallback(async () => {
    await getSharedData() ;
  }, [])

  const loadTouch = () => {
    console.log('load touch touch');
    // Geolocation.clearWatch(watchID);
    // location();
    // getSharedData() ;
    // sendRequest() ;


    onRefresh() ;
  }

  const location = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);

        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
        SharedPreferences.setItem("lat", currentLatitude);
        SharedPreferences.setItem("long", currentLongitude);


      }, (error) => {
        enableLocation() ;

      }, {
      enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
    }
    );
  };
  const enableLocation = () =>{
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then((data) => {
      //  console.log('----------------------'+data);
      })
      .catch((err) => {
      //  console.log('===================================================='+ err);
      });
  }



  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        const currentLongitude =
          JSON.stringify(position.coords.longitude);
        const currentLatitude =
          JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);

        SharedPreferences.setItem("lat", currentLatitude );
        SharedPreferences.setItem("long", currentLongitude );
      },
      (error) => {
        enableLocation() ;
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        const currentLatitude =
          JSON.stringify(position.coords.latitude);

        setCurrentLongitude(currentLongitude);

        setCurrentLatitude(currentLatitude);

        SharedPreferences.setItem("lat", currentLatitude );
        SharedPreferences.setItem("long", currentLongitude );
      },
      (error) => {

      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  const onRefresh = () =>{
    getOneTimeLocation();
    subscribeLocationLocation();
  }




  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center' }}
        onPress={
          () => onRefresh()
        }
      >

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
          {
            console.log('No: ' + currentLatitude)
          }

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
