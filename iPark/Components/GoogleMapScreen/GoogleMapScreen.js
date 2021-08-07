/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, {useEffect, useState} from 'react';
// AIzaSyAbCCIit-DfRCpTXRaCzfHi1AQUsqRjVK4
import {ActivityIndicator, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import MapView, {Marker, LocalTile} from 'react-native-maps';
import { pri_1 } from '../Constants/Constants';
var SharedPreferences = require('react-native-shared-preferences');


const GoogleMapScreen = ({navigation, route}) => {
  let count = 0;
  const [latlong, setLatLong] = useState([]);

  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');

  useEffect(() => {

   

    // SharedPreferences.getItems(["lat", "long"], function (values) {
    //   setCurrentLatitude(values[0]);
    //   setCurrentLongitude(values[1]);
   
    //   //=================================================================================================================================
    //   // console.log('------------==================-----------------' + route.params);
    //   if (route.params) {
    //     console.log('google maps lat :'+ route.params.latitude ) ;
    //     console.log('google maps long :'+ route.params.longitude ) ;
    //     var dataToSend = { latitude: values[0], longitude: values[1] };
    //     var formBody = [];
    //     for (var key in dataToSend) {
    //       var encodedKey = encodeURIComponent(key);
    //       var encodedValue = encodeURIComponent(dataToSend[key]);
    //       formBody.push(encodedKey + '=' + encodedValue);
    //     }
    //     formBody = formBody.join('&');

    //     fetch(
    //       // 'http://192.168.1.8/android/Bulbul_Sir_PHP/location_chack.php',
    //       'https://snakes123.000webhostapp.com/bulbul_sir/location_check_bulbulsir.php',
    //       {
    //         method: 'POST',
    //         body: formBody,
    //         headers: {
    //           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //         },
    //       })
    //       .then(response => response.json())
    //       .then(responseJson => {
    //         if (responseJson.error == false) {
    //           console.log(responseJson.data);
    //           setLatLong(responseJson.data);

    //         } else {
    //           console.log("error:   " + responseJson.error);
    //         }
    //       })
    //       .catch(error => {
    //         // alert(JSON.stringify(error));
    //         console.error("error in:" + error);
    //       });
    //   }


    // });

    if (route.params) {
      console.log('google maps lat :'+ route.params.latitude ) ;
      console.log('google maps long :'+ route.params.longitude ) ;

      setCurrentLatitude(route.params.latitude);
      setCurrentLongitude(route.params.longitude) ;

      var dataToSend = { latitude: route.params.latitude, longitude: route.params.longitude };
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');

      fetch(
        // 'http://192.168.1.8/android/Bulbul_Sir_PHP/location_chack.php',
        'https://snakes123.000webhostapp.com/bulbul_sir/location_check_bulbulsir.php',
        {
          method: 'POST',
          body: formBody,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.error == false) {
            // console.log(responseJson.data);
            setLatLong(responseJson.data);

          } else {
            // console.log("error:   " + responseJson.error);
          }
        })
        .catch(error => {
          // alert(JSON.stringify(error));
          // console.error("error in:" + error);
        });
    }else{
      SharedPreferences.getItems(["lat", "long"], function (values) {
        setCurrentLatitude(values[0]);
        setCurrentLongitude(values[1]);
      });
    }


    // console.log("currentLongitude:  "+currentLongitude+"   currentLatitude:  "+currentLatitude);

  }, []) ;


  // console.log(" currentLatitude---------------------------------------------------:  " + currentLatitude);
  // console.log(" currentLongitude---------------------------------------------------:  " + currentLongitude);
  const lat = parseFloat(currentLatitude);
  const long = parseFloat(currentLongitude);



  const onLocationPickPress = (id) => {
    // console.log('location press in here' + count);
    count = count + 1;
    if (count == 2) {
      navigation.navigate('Root', {
        screen: 'Entrance', params: {
          id: id
        }
      });

      count = 0;
    }
  };


  return (
    <SafeAreaView style={{ height: '100%' }}>

      <View style={styles.container}>


        {
          // console.log('-------------    google map screen   ================' + currentLatitude),
          currentLatitude != 0 &&
          <MapView
            style={styles.mapStyle}
            // initialRegion={{
            //   latitude: lat,
            //   longitude: long,
            //   latitudeDelta: 0.0922,
            //   longitudeDelta: 0.0421,
            // }}
            region={{
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}





          // customMapStyle={mapStyle}
          >
            {
              latlong.map(item => <Marker
                draggable
                coordinate={{
                  latitude: parseFloat(item.latitude),
                  longitude: parseFloat(item.longitude),
                }}
                onDragEnd={
                  (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                }
                title={item.title}
                description={item.description}
                onPress={() => onLocationPickPress(item.location_id)}



              />)

            }

          </MapView>
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: pri_1
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default GoogleMapScreen;
