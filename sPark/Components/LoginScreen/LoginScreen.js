/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React, { useContext, useState } from 'react';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';


import {
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
  ScrollView,
} from 'react-native';
import CurrentLatLong from '../CurrentLocationScreen/CurrentLatLong';
import car_img from '../ImageFolder/smart_car_park.jpg';
import s_park_img from '../ImageFolder/s_park_img.jpg';


import Geolocation from '@react-native-community/geolocation';
import { black, c_white, ipark_1, login_app_name, login_short_name, login_t1, login_t2, login_t3, pri_1, pri_2, rpark_1, spark_1, USER_LOGIN, white } from '../Constants/Constants';
import { UserContext } from '../../App';
var SharedPreferences = require('react-native-shared-preferences');





const LoginScreen = ({ history }) => {
  //========================current location
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [turnOnLocation, setTurnOnLocation] = useState(false);
  const [loggedInUserID, setLoggedInUserID] = useContext(UserContext);



  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onRegistrationScreen = () => {
    history.push('/registration')

  };



  const onLoginScreen = () => {
    if (
      userName.length <= 0 ||
      password.length <= 0
    ) {
      console.log('please proveide actual value');
      notifyMessage('please proveide actual value');
      return;
    } else if (currentLatitude.length <= 0) {
      console.log('please turn on location');
      if (turnOnLocation) {
        notifyMessage('please wait some seconds');
      } else {
        notifyMessage('please turn on location');
      }
      Geolocation.clearWatch(watchID);
      geoLocationPick(false);
      subscribeLocationLocation();

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
          SharedPreferences.setItem("id", responseJson.data['id']);
          SharedPreferences.setItem("name", responseJson.data['name']);
          SharedPreferences.setItem("username", responseJson.data['username']);
          SharedPreferences.setItem("password", responseJson.data['password']);
          SharedPreferences.setItem("email", responseJson.data['email']);
          SharedPreferences.setItem("a_number", responseJson.data['a_number']);
          setLoggedInUserID(responseJson.data['id']);

          history.push('/main');
          notifyMessage('Login Successful');
        } else {
          notifyMessage('Please provide correct data');
        }
      })
      .catch(error => {
        // alert(JSON.stringify(error));
        // console.error(error);
      });

  };

  const notifyMessage = msg => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };

  const enableLocation = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then((data) => {
        setTurnOnLocation(true);

      })
      .catch((err) => {
        setTurnOnLocation(false);
      });
  }
  const geoLocationPick = (boolState) => {
    console.log('currentLatitude-------' + currentLatitude);
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);

        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
        SharedPreferences.setItem("lat", currentLatitude);
        SharedPreferences.setItem("long", currentLongitude);

        console.log('currentLatitude-------' + currentLatitude);

      }, (error) => {

        if (!boolState) {
          enableLocation();
        }

      }, {
      enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
    }
    );
  }
  const subscribeLocationLocation = () => {
    console.log('currentLatitude-------' + currentLatitude);
    watchID = Geolocation.watchPosition(
      (position) => {

        const currentLongitude =
          JSON.stringify(position.coords.longitude);
        const currentLatitude =
          JSON.stringify(position.coords.latitude);

        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);

        SharedPreferences.setItem("lat", currentLatitude);
        SharedPreferences.setItem("long", currentLongitude);
      },
      (error) => {

      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CurrentLatLong
        setCurrentLatitude={setCurrentLatitude}
        setCurrentLongitude={setCurrentLongitude}
      />
      <ImageBackground source={s_park_img} style={styles.image}>
        <ScrollView >
          <View >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                marginTop:200
              }}>
              <Text style={{ fontSize: 30, color: pri_1, justifyContent: 'center', marginHorizontal: 10 }}>
                {login_short_name}
              </Text>
              <Text style={{ fontSize: 16, color: pri_1, justifyContent: 'center', marginHorizontal: 10 }}>({login_app_name})</Text>
              <Text style={{ fontSize: 30, color: pri_2, marginTop: 20 }}>Sign In</Text>
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
                style={{ backgroundColor: pri_1, color: 'white', padding: 10 }}
                onPress={onRegistrationScreen}>
                Register
              </Text>

              <Text
                style={{ backgroundColor: pri_1, color: 'white', padding: 10 }}
                onPress={onLoginScreen}>
                Login
              </Text>
            </View>
          </View>
        </ScrollView>
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
    color: pri_2,
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
