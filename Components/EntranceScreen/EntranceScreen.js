import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const EntranceScreen = ({navigation, route}) => {
  const [locationDetails, setLocationDetails] = useState({});

  useEffect(() =>{
    if(route.params){
      console.log(' route id: '+ route.params.id);
        var dataToSend = {location_id: route.params.id };
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
  
      fetch('http://192.168.1.2/android/Bulbul_Sir_PHP/checkpoint_details.php', {
        method: 'POST',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.error == false) {
            const checkPointDetails = {error:responseJson.error, total: responseJson.total, free: responseJson.free, booked: responseJson.booked }
            
            console.log(responseJson.total);
            console.log(responseJson.free);
            console.log(responseJson.booked);
            console.log(responseJson.error);
            
            // setLatLong(responseJson.data) ;
            setLocationDetails(checkPointDetails) ;
            console.log(locationDetails.error);
          
          } else {
            console.log(responseJson.error);
          }
        })
        .catch(error => {
          // alert(JSON.stringify(error));
          console.error(error);
        });
  
  
     
  
    }


  }, [])





  const onParkMyCarClick = ()=>{
    console.log("park my car click");
    // navigation.navigate('Park my Car', { params: {number: '123456' } }   );
    navigation.jumpTo('Root', {
      screen:'LogScreen',
      params: {number: '123456' } } );
  }
    return (
        <View>
          <Text>Total: {locationDetails.total} </Text>
          <Text>Free: {locationDetails.free} </Text>
          <Text>Booked: {locationDetails.booked} </Text>
      
    </View>
    );
};

export default EntranceScreen;