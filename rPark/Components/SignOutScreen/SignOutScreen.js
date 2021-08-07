/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Text, View } from 'react-native';

import { BackHandler } from 'react-native';
import { pri_1 } from '../Constants/Constants';

const SignOutScreen = () => {

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Button color= {pri_1} title="Sign Out" onPress={() => BackHandler.exitApp()} />

        </View>
    );
};

export default SignOutScreen;