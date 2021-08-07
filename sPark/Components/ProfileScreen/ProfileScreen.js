/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { pri_1 } from '../Constants/Constants';
import profile from '../ImageFolder/profile_png.png';

var SharedPreferences = require('react-native-shared-preferences');


const ProfileScreen = () => {

    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [a_number, setNumber] = useState('');

    useEffect(()=>{

        SharedPreferences.getItems(
            ['id', 'name', 'username', 'password', 'email', 'a_number'],
            function (values) {
              // console.log(values[0] + "    " + values[1]+'      '+ values[2] + "    " + values[3]);
              setName(values[1]);
              setUserName(values[2]);
              setEmail(values[4]);
              setPassword(values[3]);
              setNumber(values[5]);
            },
          );

    }, []) ;



    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Image
                    style={styles.tinyLogo}
                    source={profile}
                />
            </View>
            <View style={{marginLeft:30, marginTop:50}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:15 }}>
                    <Text style={{ fontSize: 16, color: 'white', width:90,}} >Name </Text>
                    <Text style={{ fontSize: 25, color: 'white' }} >{name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:15 }}>
                    <Text style={{ fontSize: 16, color: 'white', width:90, }} >Username </Text>
                    <Text style={{ fontSize: 25, color: 'white' }} > {username} </Text>
                </View>
                
                <View style={{ flexDirection: 'row',  alignItems: 'center', marginTop:15 }}>
                    <Text style={{ fontSize: 16, color: 'white', width:90, }} >Phone </Text>
                    <Text style={{ fontSize: 22, color: 'white' }} > {a_number} </Text>
                </View>
                <View style={{ flexDirection: 'row',  alignItems: 'center', marginTop:15 }}>
                    <Text style={{ fontSize: 16, color: 'white', width:90, }} >Email </Text>
                    <Text style={{ fontSize: 22, color: 'white' }} > {email} </Text>
                </View>
                <View style={{ flexDirection: 'row',  alignItems: 'center', marginTop:15 }}>
                    <Text style={{ fontSize: 16, color: 'white', width:90, }} >Password </Text>
                    <Text style={{ fontSize: 22, color: 'white' }} > {password} </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: pri_1
    },

    tinyLogo: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
    },

});


export default ProfileScreen;