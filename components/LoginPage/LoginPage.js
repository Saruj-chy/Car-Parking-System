import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import Appbar from '../Appbar/Appbar';

//Login 0r Registration , this page is for that

const LoginPage = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const onSubmit = () => {
    // console.log('object submit'+ email+"  "+ password);

    var dataToSend = {email: email, password: password};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    // console.log(formBody);
    //POST request
    fetch('http://192.168.1.7/android/Bulbul_Sir_PHP/userLogin.php', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        // setUser(responseJson.user_exist);
        // console.log(responseJson.user_exist);
        if (responseJson.user_exist == true) {
          history.push('/home');
        } else {
          console.log('no');
        }
      })
      //If response is not in json then in error
      .catch(error => {
        // alert(JSON.stringify(error));
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <Appbar name="Login" />

      <TextInput
        style={{...styles.input, marginTop: 150}}
        onChangeText={setEmail}
        placeholder="Enter your User Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        // value="100"
        placeholder="Enter your Password"
        // keyboardType="numeric"
      />
      {/* <TextInput
        style={styles.input}
        onChangeText={setPhnNum}
        // value="100"
        placeholder="Enter your phone number"
        // keyboardType="numeric"
      /> */}

      <Button onPress={onSubmit} title="Submit" color="#841584" />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 50,
          color: 'black',
          fontSize: 15,
        }}>
        Developed by {'\n'} Sarose Datta {'\n'}
        Mobile Application Developer {'\n'}
        CSE, CU, CTG
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default LoginPage;
