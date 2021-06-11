import React from 'react';
import { Button, Text, View } from 'react-native';

import { BackHandler } from 'react-native';

const SignOutScreen = () => {

    return (
        <View>
            <Button title="Sign Out" onPress={() => BackHandler.exitApp()} />

        </View>
    );
};

export default SignOutScreen;