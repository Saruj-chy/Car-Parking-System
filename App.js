import React from 'react';
import { Text, View } from 'react-native';
import Appbar from './components/Appbar/Appbar';
import LoginPage from './components/LoginPage/LoginPage';

const App = () => {
    return (
        <View>
            {/* <Appbar /> */}
            <LoginPage />
        </View>
    );
};

export default App;