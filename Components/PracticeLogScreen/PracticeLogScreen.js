import React from 'react';
import { Text, View } from 'react-native';

const PracticeLogScreen = ({navigation, route}) => {

    console.log('route:   '+ route.params);

    return (
        <View>
            <Text>Hello log screen</Text>
        </View>
    );
};

export default PracticeLogScreen;