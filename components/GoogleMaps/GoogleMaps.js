import React, { useState } from 'react';
// AIzaSyAbCCIit-DfRCpTXRaCzfHi1AQUsqRjVK4

// Import required components
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

// Import Map and Marker
import MapView, {Marker} from 'react-native-maps';
import Appbar from '../Appbar/Appbar';
import CurrentLocation from '../CurrentLocation/CurrentLocation';

const GoogleMaps = ({location}) => {
 const lat = parseFloat(location.state.latitude);
 const long = parseFloat(location.state.longitude);

 console.log(lat);



  return (
    <SafeAreaView style={{height: '100%'}}>
     
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // customMapStyle={mapStyle}
          >
          <Marker
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
          />
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

export default GoogleMaps;
