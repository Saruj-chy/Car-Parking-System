/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  ToastAndroid,
  AlertIOS,
} from 'react-native';
import { USER_REGISTER } from '../Constants/Constants';
import CurrentLatLong from '../CurrentLocationScreen/CurrentLatLong';
import car_img from '../ImageFolder/smart_car_park.jpg';
var SharedPreferences = require('react-native-shared-preferences');



const RegistrationScreen = ({navigation, history}) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(0);

  const onRegisterFunc = () => {
    if (
      name.length <= 0 ||
      userName.length <= 0 ||
      password.length <= 0 ||
      email.length <= 0 ||
      number.length <= 0
    ) {
      console.log('please proveide actual value');
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
      // 'http://192.168.1.8/android/Bulbul_Sir_PHP/user_register.php',
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
          console.log(responseJson.state);
          SharedPreferences.setItem("id", responseJson.data['id'] );
          SharedPreferences.setItem("name", responseJson.data['name'] );
          SharedPreferences.setItem("username", responseJson.data['username'] );
          SharedPreferences.setItem("password", responseJson.data['password'] );
          SharedPreferences.setItem("email", responseJson.data['email'] );
          SharedPreferences.setItem("a_number", responseJson.data['a_number'] );
          // navigation.navigate('Root', {screen: 'Home'});
          history.push('/main');
          notifyMessage('Registration Successful');
        } else {
          notifyMessage('Registration  Unsuccessful');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const onLoginFunc = () => {
    // navigation.navigate('Root', {screen: 'Login'});
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
    <SafeAreaView style={{flex: 1}}>
       <CurrentLatLong
        setCurrentLatitude={setCurrentLatitude}
        setCurrentLongitude={setCurrentLongitude}
      />
      <ImageBackground source={car_img} style={styles.image}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 24, color: 'yellow'}}>
            Smart Car Parking System
          </Text>
          <Text style={{fontSize: 24, color: '#99ff33'}}>(SCPS)</Text>
          <Text style={{fontSize: 25, color: '#ff0000'}}>Sign Up</Text>
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
            style={{backgroundColor: '#ffccff', color: 'black', padding: 10}}
            onPress={onLoginFunc}>
            Already Have Account?
          </Text>

          <Text
            style={{backgroundColor: '#ffccff', color: 'black', padding: 10}}
            onPress={onRegisterFunc}>
            Register
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

export default RegistrationScreen;
