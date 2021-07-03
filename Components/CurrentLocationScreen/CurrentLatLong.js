/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import { View } from 'react-native';
// import Appbar from '../Appbar/Appbar';

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    PermissionsAndroid,
    Platform,
    Button,
    ActivityIndicator
  } from 'react-native';

  //import all the components we are going to use.
  import Geolocation from '@react-native-community/geolocation';
  var SharedPreferences = require('react-native-shared-preferences');

const CurrentLatLong = ({setCurrentLatitude, setCurrentLongitude}) => {

    // const [currentLongitude, setCurrentLongitude] = useState('...');
    //   const [currentLatitude, setCurrentLatitude] = useState('...');
      const [ locationStatus, setLocationStatus ] = useState('');
      const [ loading, setLoading ] = useState(true);

      useEffect(() => {
        console.log("object");
        const requestLocationPermission = async () => {
          console.log('Platform.OS   '+ Platform.OS);
          if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            console.log('permission granted');
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('permission granted android');

                getOneTimeLocation();
                subscribeLocationLocation();
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        requestLocationPermission();
        return () => {
          Geolocation.clearWatch(watchID);
        };
      }, []);

      // const requestLocationPermission = async () => {
      //     console.log("requestLocationPermission");
      //   if (Platform.OS === 'ios') {
      //     getOneTimeLocation();
      //     subscribeLocationLocation();
      //   } else {
      //     try {
      //       const granted = await PermissionsAndroid.request(
      //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      //         {
      //           title: 'Location Access Required',
      //           message: 'This App needs to Access your location',
      //         },
      //       );
      //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //         //To Check, If Permission is granted
      //         getOneTimeLocation();
      //         subscribeLocationLocation();
      //       } else {
      //         setLocationStatus('Permission Denied');
      //       }
      //     } catch (err) {
      //       console.warn(err);
      //     }
      //   }
      // };

      const getOneTimeLocation = () => {
        console.log('Getting Location ...');

        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
          //Will give you the current location
          (position) => {
            setLocationStatus('Refresh your location');
            setLoading(false) ;

            //getting the Longitude from the location json
            const currentLongitude =
              JSON.stringify(position.coords.longitude);

            //getting the Latitude from the location json
            const currentLatitude =
              JSON.stringify(position.coords.latitude);

            setCurrentLatitude(currentLatitude);
            setCurrentLongitude(currentLongitude);
            console.log('Getting Location ...');

            console.log(currentLatitude);
            SharedPreferences.setItem("lat", currentLatitude );
            SharedPreferences.setItem("long", currentLongitude );
          },
          (error) => {
            setLocationStatus(error.message+" Please Turn on your location");
            setLoading(false) ;
          },
          {
            enableHighAccuracy: false,
            timeout: 30,
            maximumAge: 1000
          },
        );
      };

      const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
          (position) => {
            //Will give you the location on location change

            setLocationStatus('Refresh your location');
            setLoading(false) ;
            console.log(position);

            //getting the Longitude from the location json
            const currentLongitude =
              JSON.stringify(position.coords.longitude);

            //getting the Latitude from the location json
            const currentLatitude =
              JSON.stringify(position.coords.latitude);

            //Setting Longitude state
            setCurrentLongitude(currentLongitude);

            //Setting Latitude state
            setCurrentLatitude(currentLatitude);
            console.log(currentLatitude);
            SharedPreferences.setItem("lat", currentLatitude );
            SharedPreferences.setItem("long", currentLongitude );
          },
          (error) => {
            setLocationStatus(error.message+" Please Turn on your location");
            setLoading(false) ;
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };





     const abc = () => {
        alert('Hello World');
      }

    return (
        <View>

        </View>
    );
};

export default CurrentLatLong;