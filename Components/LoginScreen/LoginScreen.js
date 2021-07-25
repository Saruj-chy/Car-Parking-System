/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import { NativeModules } from "react-native";
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';


import {
  Button,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  PermissionsAndroid,
  AlertIOS,
  View,
} from 'react-native';
import CurrentLatLong from '../CurrentLocationScreen/CurrentLatLong';
import Testing from '../Testing/Testing';
import CurrentLocationScreen from '../CurrentLocationScreen/CurrentLocationScreen';
import car_img from '../ImageFolder/smart_car_park.jpg';


import Geolocation from '@react-native-community/geolocation';
import { useEffect } from 'react/cjs/react.development';
import { USER_LOGIN } from '../Constants/Constants';
var SharedPreferences = require('react-native-shared-preferences');





const LoginScreen = ({navigation, route, history}) => {
  //========================current location
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [turnOnLocation, setTurnOnLocation] = useState(false);



  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   geoLocationPick() ;
  //   subscribeLocationLocation();
  // }, []);





  const onRegistrationScreen = () => {
    history.push('/registration')

  };



  const onLoginScreen = () => {
    // console.log('on login screen'+currentLatitude.length);

    if (
      userName.length <= 0 ||
      password.length <= 0
    ) {
      console.log('please proveide actual value');
      notifyMessage('please proveide actual value');
      return;
    }else if( currentLatitude.length <=0 ) {
      console.log('please turn on location');
      if(turnOnLocation){
        notifyMessage('please wait some seconds');
      }else{
        notifyMessage('please turn on location');
      }

      // NativeModules.DevSettings.reload();

      Geolocation.clearWatch(watchID);
      geoLocationPick(false) ;
      subscribeLocationLocation() ;

      // requestLocationPermission() ;


      return;
    }


    var dataToSend =
    {
      username: userName,
      password: password
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch(
      // 'http://192.168.1.8/android/Bulbul_Sir_PHP/user_login.php',
      USER_LOGIN,

      {
        method: 'POST',
        body: formBody,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.user_exist == true) {
         

          SharedPreferences.setItem("id", responseJson.data['id'] );
          SharedPreferences.setItem("name", responseJson.data['name'] );
          SharedPreferences.setItem("username", responseJson.data['username'] );
          SharedPreferences.setItem("password", responseJson.data['password'] );
          SharedPreferences.setItem("email", responseJson.data['email'] );
          SharedPreferences.setItem("a_number", responseJson.data['a_number'] );

          // navigation.navigate('Root', {screen: 'Home'});
          history.push('/main');
          notifyMessage('Login Successful');

          
        } else {
          notifyMessage('Please provide correct data');
          console.log(responseJson.user_exist);
         
        }
      })
      .catch(error => {
        // alert(JSON.stringify(error));
        console.error(error);
      });




  };

  const notifyMessage = msg => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };

  const enableLocation = () =>{
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then((data) => {
      //  console.log('----------------------'+data);
      setTurnOnLocation(true);

      })
      .catch((err) => {
      //  console.log('===================================================='+ err);
      setTurnOnLocation(false);
      });
  }
  const geoLocationPick =(boolState) =>{
    console.log('currentLatitude-------'+ currentLatitude);
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude =  JSON.stringify(position.coords.longitude);
        const currentLatitude =   JSON.stringify(position.coords.latitude);

        setCurrentLatitude(currentLatitude) ;
        setCurrentLongitude(currentLongitude) ;
        SharedPreferences.setItem("lat", currentLatitude );
        SharedPreferences.setItem("long", currentLongitude );

        console.log('currentLatitude-------'+ currentLatitude);

       }, (error) => {

        if(!boolState){
          enableLocation() ;
        }

       }, {
         enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
       }
    );
  }
  const subscribeLocationLocation = () => {
    console.log('currentLatitude-------'+ currentLatitude);
    watchID =  Geolocation.watchPosition(
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

  const requestLocationPermission = async () => {
    Geolocation.clearWatch(watchID);

    console.log('Platform.OS   '+ Platform.OS);
    if (Platform.OS === 'ios') {
      geoLocationPick() ;
      subscribeLocationLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('permission granted android');

          geoLocationPick() ;
          subscribeLocationLocation();
        } else {
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  // requestLocationPermission();
  // return () => {
  //   Geolocation.clearWatch(watchID);
  // };




  return (
    <SafeAreaView style={{flex: 1}}>
      <CurrentLatLong
        setCurrentLatitude={setCurrentLatitude}
        setCurrentLongitude={setCurrentLongitude}
      />
      <ImageBackground source={car_img} style={styles.image}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 24, color: 'yellow'}}>
            Smart Car Parking System
          </Text>
          <Text style={{fontSize: 24, color: '#99ff33'}}>(SCPS)</Text>
          <Text style={{fontSize: 25, color: '#ff0000'}}>Sign In</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setUserName}
            placeholder="Enter your Username"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Enter your Password"
          />
        </View>
        <View style={styles.view2}>
          <Text
            style={{backgroundColor: '#ffccff', color: 'black', padding: 10}}
            onPress={onRegistrationScreen}>
            Register
          </Text>

          <Text
            style={{backgroundColor: '#ffccff', color: 'black', padding: 10}}
            onPress={onLoginScreen}>
            Login
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    paddingLeft: 15,

    borderWidth: 1,
    backgroundColor: 'white',
    color: 'blue',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  view2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderWidth: 1,
    justifyContent: 'space-between',
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default LoginScreen;
