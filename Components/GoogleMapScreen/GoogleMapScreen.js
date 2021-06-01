import React, { useEffect, useState } from 'react';
// AIzaSyAbCCIit-DfRCpTXRaCzfHi1AQUsqRjVK4
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import MapView, {Marker, LocalTile} from 'react-native-maps';
var SharedPreferences = require('react-native-shared-preferences');


const GoogleMapScreen = ({navigation, route}) => {

  let count = 0;
  const[latlong, setLatLong] = useState([]);
   
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');

  useEffect(()=>{
    
    SharedPreferences.getItems(["lat","long"], function(values){
  
     
      console.log(values[0]+"    "+ values[1]);
      setCurrentLatitude(values[0]);
      setCurrentLongitude(values[1]);
      // 22.3557585,91.8419251
      //22.357878, 91.842455  // brother's jwellaers
      // 22.351446, 91.838292 //guljar begum

      //=================================================================================================================================
      if(route.params){
        var dataToSend = {latitude: values[0], longitude: values[1]};
        var formBody = [];
        for (var key in dataToSend) {
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
    
        fetch('http://192.168.1.8/android/Bulbul_Sir_PHP/location_chack.php', {
          method: 'POST',
          body: formBody,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.error == false) {
              console.log(responseJson.data);
              setLatLong(responseJson.data) ;
            
            } else {
              console.log("error:   "+ responseJson.error);
            }
          })
          .catch(error => {
            // alert(JSON.stringify(error));
            console.error("error in:"+ error);
          });
      }
    










    });



    // console.log("currentLongitude:  "+currentLongitude+"   currentLatitude:  "+currentLatitude);





    
















   

  }, [])

  // console.log("currentLongitude:  "+currentLongitude+"   currentLatitude:  "+currentLatitude);

  console.log(" currentLatitude:  "+  currentLatitude);
 const lat = parseFloat(currentLatitude);
 const long = parseFloat(currentLongitude);





//  const lats = parseFloat(route.params.latitude);
//  const long = parseFloat(route.params.longitude);
// console.log("lats: "+lats);

const onLocationPickPress = (id) =>{
  console.log('location press in here'+ count);
  count = count+1;
  if(count==2){
    navigation.navigate('Root', {screen:'Entrance', params:{
      id: id
    }   });

    count =0 ;
  }
}


  return (
    <SafeAreaView style={{height: '100%'}}>
     
      <View style={styles.container}>
       
        
        {
          currentLatitude!=0 && <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // customMapStyle={mapStyle}
          >
            {
              latlong.map( item => <Marker
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
                


              />  )
              
            }







          {/* <Marker
            draggable
            coordinate={{
              latitude: lat-0.05,
              longitude: long-0.05,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={' Current Location 2'}
            description={'This is a description of the marker'}
            onPress={() => alert('hello')}
          />
          <Marker
            draggable
            coordinate={{
              latitude: lat,
              longitude: long,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Current Location'}
            description={'This is a description of the marker'}
          /> */}
          {/* <Marker
            draggable
            coordinate={{
              latitude: 22.3738,
              longitude: 91.7734,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Citygate'}
            description={'This is a description of the marker'}
          /> */}
        </MapView>
        }
      </View>
    </SafeAreaView>
  );
};

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'yellow'
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
