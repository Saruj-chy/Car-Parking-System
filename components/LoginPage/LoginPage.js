import React, { useState } from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Appbar from '../Appbar/Appbar';

//Login 0r Registration , this page is for that

const LoginPage = () => {

  const [userName, setUserName] = useState("") ;
  const [password, setPassword] = useState("") ;
  const [phnNum, setPhnNum] = useState("") ;


  const onSubmit = () => {
    console.log('object submit'+ userName+"  "+ password+"  "+ phnNum);
    

    var dataToSend = {username: userName, password: password, phone: phnNum };
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    console.log(formBody);
    //POST request
    fetch('http://192.168.1.2/android/StamaSoft_Technology/sms_gateway/registerSmsgateway.php', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 
          'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        alert("res json: "+JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
   

  
  };

  return (
    <SafeAreaView>
      <Appbar name="Registration Screen" />
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        placeholder="Enter your Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        // value="100"
        placeholder="Enter your Password"
        // keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPhnNum}
        // value="100"
        placeholder="Enter your phone number"
        // keyboardType="numeric"
      />

      <Button onPress={onSubmit} title="Submit" color="#841584" />
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
