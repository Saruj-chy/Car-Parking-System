import React from 'react';
import {Button, View} from 'react-native';

const ParkMyCarScreen = ({navigation, route}) => {
  console.log("route:   "+route.params.number);
  return (
    <View>
      <Button title="My ParkMyCarScreenParkMyCarScreen Screen"> </Button>
    </View>
  );
};

export default ParkMyCarScreen;
