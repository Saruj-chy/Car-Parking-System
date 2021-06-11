import React, { useEffect, useState } from 'react';
// import { View } from 'react-native';
// import Appbar from '../Appbar/Appbar';

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    PermissionsAndroid,
    Platform,
    Button,
    ActivityIndicator
  } from 'react-native';
  
  //import all the components we are going to use.
  import Geolocation from '@react-native-community/geolocation';
  var SharedPreferences = require('react-native-shared-preferences');


const CurrentLocationScreen = ({setCurrentLatitude, setCurrentLongitude}) => {

  console.log('CurrentLocationScreen   in here');
    // const [currentLongitude, setCurrentLongitude] = useState('...');
    //   const [currentLatitude, setCurrentLatitude] = useState('...');
      const [ locationStatus, setLocationStatus ] = useState('');
      const [ loading, setLoading ] = useState(true);
    
      useEffect(() => {
        console.log("object");
        const requestLocationPermission = async () => {
          if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
               
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                getOneTimeLocation();
                subscribeLocationLocation();
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        requestLocationPermission();
        return () => {
          Geolocation.clearWatch(watchID);
        };
      }, []);

      const requestLocationPermission = async () => {
          console.log("requestLocationPermission");
        if (Platform.OS === 'ios') {
          getOneTimeLocation();
          subscribeLocationLocation();
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: 'Location Access Required',
                message: 'This App needs to Access your location',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              //To Check, If Permission is granted
              getOneTimeLocation();
              subscribeLocationLocation();
            } else {
              setLocationStatus('Permission Denied');
            }
          } catch (err) {
            console.warn(err);
          }
        }
      };
    
      const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
          //Will give you the current location
          (position) => {
            setLocationStatus('Refresh your location');
            setLoading(false) ;
    
            //getting the Longitude from the location json
            const currentLongitude = 
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
            
            //Setting Longitude state
            setCurrentLatitude(currentLatitude);
            console.log(currentLatitude);
            SharedPreferences.setItem("lat", currentLatitude );
            SharedPreferences.setItem("long", currentLongitude );
          },
          (error) => {
            setLocationStatus(error.message+" Please Turn on your location");
            setLoading(false) ;
          },
          {
            enableHighAccuracy: false,
            timeout: 30000,
            maximumAge: 1000
          },
        );
      };
    
      const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
          (position) => {
            //Will give you the location on location change
            
            setLocationStatus('Refresh your location');
            setLoading(false) ;
            console.log(position);
    
            //getting the Longitude from the location json        
            const currentLongitude =
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
    
            //Setting Latitude state
            setCurrentLatitude(currentLatitude);
            console.log(currentLatitude);
            SharedPreferences.setItem("lat", currentLatitude );
            SharedPreferences.setItem("long", currentLongitude );
          },
          (error) => {
            setLocationStatus(error.message+" Please Turn on your location");
            setLoading(false) ;
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };

      const onRefresh = () =>{
        getOneTimeLocation();
        subscribeLocationLocation();
        setLoading(true);
      }


    return (
        <SafeAreaView >
        <View style={{  padding: 20, marginVertical: 50}}>
          
          {/* <View style={styles.container}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
              }}
              style={{width: 100, height: 100}}
            />
            <Text style={styles.boldText}>
              {locationStatus}
            </Text>
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
              }}>
              Longitude: {currentLongitude}
            </Text>
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
              }}>
              Latitude: {currentLatitude}
            </Text>
            <View style={{marginTop: 20}}>
              <Button
                title="Button"
                // onPress={getOneTimeLocation}
                onPress={requestLocationPermission}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              color: 'grey'
            }}>
            React Native Geolocation
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              color: 'grey'
            }}>
            www.aboutreact.com
          </Text> */}

          <Text style={styles.boldText}>
              {locationStatus}
            </Text>
         <View>
         {
            loading ? <ActivityIndicator color='green' size="large"  />: <Button title="Refresh" onPress={onRefresh} />
          }
         </View>
        </View>
      </SafeAreaView>
  
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    boldText: {
      fontSize: 22,
      color: 'green',
      marginVertical: 16,
      textAlign:'center'
    },
  });

export default CurrentLocationScreen;