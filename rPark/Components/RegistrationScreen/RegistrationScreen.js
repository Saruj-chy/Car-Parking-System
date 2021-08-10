/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  ToastAndroid,
  AlertIOS,
  ScrollView,
} from 'react-native';
import { login_app_name, login_short_name, login_t1, login_t2, login_t3, pri_1, pri_2, USER_REGISTER } from '../Constants/Constants';
import CurrentLatLong from '../CurrentLocationScreen/CurrentLatLong';
import car_img from '../ImageFolder/smart_car_park.jpg';
import s_park_img from '../ImageFolder/s_park_img.jpg';
var SharedPreferences = require('react-native-shared-preferences');



const RegistrationScreen = ({ navigation, history }) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(0);
  const [hidePass, setHidePass] = useState(true);

  const onRegisterFunc = () => {
    if (
      name.length <= 0 ||
      userName.length <= 0 ||
      password.length <= 0 ||
      email.length <= 0 ||
      number.length <= 0
    ) {
      // console.log('please proveide actual value');
      notifyMessage('please proveide actual value');
      return;
    }

    var dataToSend = {
      name: name,
      username: userName,
      password: password,
      email: email,
      a_number: number,
    };

    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch(
      USER_REGISTER,
      {
        method: 'POST',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.state === 'Success') {
          // console.log(responseJson.state);
          SharedPreferences.setItem("id", responseJson.data['id']);
          SharedPreferences.setItem("name", responseJson.data['name']);
          SharedPreferences.setItem("username", responseJson.data['username']);
          SharedPreferences.setItem("password", responseJson.data['password']);
          SharedPreferences.setItem("email", responseJson.data['email']);
          SharedPreferences.setItem("a_number", responseJson.data['a_number']);

          history.push('/main');
          notifyMessage('Registration Successful');
        } else {
          notifyMessage('Registration  Unsuccessful');
        }
      })
      .catch(error => {
        // console.error(error);
      });
  };

  const onLoginFunc = () => {
    history.push('/');
  };

  const notifyMessage = msg => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };

  //========================current location
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CurrentLatLong
        setCurrentLatitude={setCurrentLatitude}
        setCurrentLongitude={setCurrentLongitude}
      />
      <ImageBackground source={s_park_img} style={styles.image}>
        <ScrollView>
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
              }}>
              <Text style={{ fontSize: 55, color: pri_1, fontWeight:'bold' }}>
                {login_short_name}
              </Text>
              <Text style={{ fontSize: 16, color: pri_2 }}>({login_app_name})</Text>
              <Text style={{ fontSize: 30, color: pri_1, marginTop: 30, fontWeight:'bold' }}>Sign Up</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                placeholder="Your First & Last Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={setUserName}
                placeholder="Enter your Username"
              />

              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                autoCompleteType="password"
                secureTextEntry={hidePass ? true : false}
                placeholder="Enter your Password"
              />

              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="Enter your Email"
              />

              <TextInput
                style={styles.input}
                onChangeText={setNumber}
                keyboardType="phone-pad"
                placeholder="Enter your phone Number"
              />
            </View>
            <View style={styles.view2}>
              <Text
                style={{ backgroundColor: pri_1, color: 'white', padding: 10 }}
                onPress={onLoginFunc}>
                Already Have Account?
              </Text>

              <Text
                style={{ backgroundColor: pri_1, color: 'white', padding: 10 }}
                onPress={onRegisterFunc}>
                Register
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

export default RegistrationScreen;
