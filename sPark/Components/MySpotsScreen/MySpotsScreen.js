/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, View } from 'react-native';
import { pri_1 } from '../Constants/Constants';

const MySpotsScreen = () => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Button color= {pri_1} title="My Spots Screen">  </Button>
    </View>
    );
};

export default MySpotsScreen;