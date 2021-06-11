import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import CurrentLocationScreen from '../CurrentLocationScreen/CurrentLocationScreen';
// import CurrentLocation from '../CurrentLocation/CurrentLocation';


const HomeScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(true);

  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');

  console.log("HomeScreen currentLatitude:    "+currentLatitude);
  
 

  return (
    <View style={{flex: 1}}>
      <ScrollView>{
        console.log("\n HomeScreen currentLatitude in------------------------------:    "+currentLatitude)
        }
        <CurrentLocationScreen
          // currentLatitude={currentLatitude}
          // currentLongitude={currentLongitude}
          setCurrentLatitude={setCurrentLatitude}
          setCurrentLongitude={setCurrentLongitude}
        />
        {/* {currentLatitude > 0
          ? history.push('/googlemaps', {
              latitude: currentLatitude,
              longitude: currentLongitude,
            })
          : console.log('No: ' + currentLatitude)} */}
          
        {currentLatitude > 0
          ? navigation.navigate('Root', {
              screen: 'GoogleMaps',
              params: {latitude: currentLatitude, longitude: currentLongitude},
            })
          : console.log('c long: ' + currentLongitude)}

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
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
