import React, {useState} from 'react';
import {
  Button,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  AlertIOS,
  View,
} from 'react-native';
import car_img from '../ImageFolder/smart_car_park.jpg';

const LoginScreen = ({navigation, route}) => {
  // const {state} = navigation;
  // console.log('PROPS' + route.params.user);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onRegistrationScreen = () => {
    navigation.navigate('Root', {screen: 'Registration'});
  };

  const onLoginScreen = () => {
    console.log(userName + '  ' + password);
    var dataToSend = {username: userName, password: password};
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://192.168.1.2/android/Bulbul_Sir_PHP/user_login.php', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.user_exist == true) {
          console.log(responseJson.user_exist);
          notifyMessage('Login Successful');
          // navigation.navigate('MainNavigation');
          navigation.navigate('Root', {screen: 'Home'});
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={car_img} style={styles.image}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 24, color: 'yellow'}}>
            Smart Car Parkingg System
          </Text>
          <Text style={{fontSize: 24, color: '#99ff33'}}>(SCPS)</Text>
          <Text style={{fontSize: 25, color: '#ff0000'}}>Sign In</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setUserName}
            placeholder="Username"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Password"
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
