import React, {useEffect, useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import blue_car from '../ImageFolder/blue_car_top.png';
import white_car from '../ImageFolder/white_car_top.png';
import red_car from '../ImageFolder/red_car_top.png';

const EntranceScreen = ({navigation, route}) => {
  const [locationDetails, setLocationDetails] = useState({});

  const ArrayFirst = [
    {id: 1, slot_name: 'img_1', slot_color: 'blue'}, {id: 2, slot_name: 'img_2', slot_color: 'blue'}, {id: 3, slot_name: 'img_3', slot_color: 'blue'}, {id: 4, slot_name: 'img_4', slot_color: 'blue'},
     {id: 5, slot_name: 'img_5', slot_color: 'blue'}, {id: 6, slot_name: 'img_6', slot_color: 'blue'}, {id: 7, slot_name: 'img_7', slot_color: 'blue'}, {id: 8, slot_name: 'img_8', slot_color: 'blue'},
    {id: 9, slot_name: 'img_9', slot_color: 'blue'}, {id: 10, slot_name: 'img_10', slot_color: 'blue'}, {id: 11, slot_name: 'img_11', slot_color: 'blue'}, {id: 12, slot_name: 'img_12', slot_color: 'blue'}];
  const ArraySecond = [
      {id: 1, slot_name: 'img_1', slot_color: 'white'}, {id: 2, slot_name: 'img_2', slot_color: 'red'}, {id: 3, slot_name: 'img_3', slot_color: 'white'}, {id: 4, slot_name: 'img_4', slot_color: 'white'},
       {id: 5, slot_name: 'img_5', slot_color: 'white'}, {id: 6, slot_name: 'img_6', slot_color: 'white'}, {id: 7, slot_name: 'img_7', slot_color: 'red'}, {id: 8, slot_name: 'img_8', slot_color: 'white'},
      {id: 9, slot_name: 'img_9', slot_color: 'white'}, {id: 10, slot_name: 'img_10', slot_color: 'red'}, {id: 11, slot_name: 'img_11', slot_color: 'white'}, {id: 12, slot_name: 'img_12', slot_color: 'white'}];
const ArrayThird = [
        {id: 1, slot_name: 'img_1', slot_color: 'white'}, {id: 2, slot_name: 'img_2', slot_color: 'white'}, {id: 3, slot_name: 'img_3', slot_color: 'red'}, {id: 4, slot_name: 'img_4', slot_color: 'white'},
         {id: 5, slot_name: 'img_5', slot_color: 'red'}, {id: 6, slot_name: 'img_6', slot_color: 'white'}, {id: 7, slot_name: 'img_7', slot_color: 'white'}, {id: 8, slot_name: 'img_8', slot_color: 'white'},
        {id: 9, slot_name: 'img_9', slot_color: 'white'}, {id: 10, slot_name: 'img_10', slot_color: 'white'}, {id: 11, slot_name: 'img_11', slot_color: 'white'}, {id: 12, slot_name: 'img_12', slot_color: 'white'}];
const ArrayFourth = [
          {id: 1, slot_name: 'img_1', slot_color: 'white'}, {id: 2, slot_name: 'img_2', slot_color: 'red'}, {id: 3, slot_name: 'img_3', slot_color: 'white'}, {id: 4, slot_name: 'img_4', slot_color: 'white'},
           {id: 5, slot_name: 'img_5', slot_color: 'white'}, {id: 6, slot_name: 'img_6', slot_color: 'white'}, {id: 7, slot_name: 'img_7', slot_color: 'red'}, {id: 8, slot_name: 'img_8', slot_color: 'white'},
          {id: 9, slot_name: 'img_9', slot_color: 'white'}, {id: 10, slot_name: 'img_10', slot_color: 'red'}, {id: 11, slot_name: 'img_11', slot_color: 'white'}, {id: 12, slot_name: 'img_12', slot_color: 'white'}];

  useEffect(() => {
    if (route.params) {
      console.log(' route id: ' + route.params.id);
      var dataToSend = {location_id: route.params.id};
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
      fetch(
        'http://192.168.1.2/android/Bulbul_Sir_PHP/checkpoint_details.php',
        {
          method: 'POST',
          body: formBody,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.error == false) {
            const checkPointDetails = {
              error: responseJson.error,
              total: responseJson.total,
              free: responseJson.free,
              booked: responseJson.booked,
            };
            console.log(responseJson.total);
            console.log(responseJson.free);
            console.log(responseJson.booked);
            console.log(responseJson.error);
            // setLatLong(responseJson.data) ;
            setLocationDetails(checkPointDetails);
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
  }, []);

  const onParkMyCarClick = () => {
    console.log('park my car click');
    // navigation.navigate('Park my Car', { params: {number: '123456' } }   );
    navigation.jumpTo('Root', {
      screen: 'LogScreen',
      params: {number: '123456'},
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.view_top}>
      <Image source={blue_car} style={styles.tinyLogo} />
      <Text>Choose Available slot</Text>

      </View>
      <View style={styles.top}>
        <ScrollView>
          <View style={styles.top}>
            <View style={styles.body_left_item}>
              {ArrayFirst.map(item => (
                <View>
                  <Image source={blue_car} style={styles.tinyLogo} />
                </View>
              ))}
            </View>
            <View style={styles.body_middle_item}>
              <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                {ArraySecond.map(item => (
                  <View>
                    {
                      item.slot_color==="red"? <Image source={red_car} style={styles.tinyLogo} /> :<Image source={white_car} style={styles.tinyLogo} /> 
                    }
                  </View>
                ))}
              </View>
              <View style={{flex: 0.5, alignItems: 'flex-start'}}>
                {ArrayThird.map(item => (
                  <View>
                    {
                      item.slot_color==="red"? <Image source={red_car} style={styles.tinyLogo} /> :<Image source={white_car} style={styles.tinyLogo} /> 
                    }
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.body_right_item}>
              {ArrayFourth.map(item => (
                <View>
                  {
                      item.slot_color==="red"? <Image source={red_car} style={styles.tinyLogo} /> :<Image source={white_car} style={styles.tinyLogo} /> 
                    }
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.view_below}>
        <Text>Total: {locationDetails.total} </Text>
        <Text>Empty: {locationDetails.free} </Text>
        <Text>Reserved: {locationDetails.booked} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // margin: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // display:'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  view_top: {
    //  alignItems: 'bottom',
    // justifyContent: 'bottom',
    // display:'flex',
    flex: 0.05,
    flexDirection: 'row',
    padding: 10,
    // justifyContent: 'space-around',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  view_below: {
    //  alignItems: 'bottom',
    // justifyContent: 'bottom',
    // display:'flex',
    flex: 0.05,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  top: {
    flex: 0.95,
    backgroundColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  body_left_item: {
    flex: 0.25,
    // backgroundColor: 'red',
    borderWidth: 1,
    alignItems: 'flex-end',
  },
  body_right_item: {
    flex: 0.25,
    // backgroundColor: 'red',
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  body_middle_item: {
    flex: 0.5,
    // backgroundColor: 'red',
    borderWidth: 1,
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 70,
    height: 50,
    margin: 2,
  },
  boldText: {
    fontSize: 22,
    color: 'green',
    marginVertical: 16,
    textAlign: 'center',
  },
});

export default EntranceScreen;
