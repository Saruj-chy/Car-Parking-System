/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useState} from 'react';
import {Button, RefreshControl, Text, View} from 'react-native';
import {UserContext} from '../../App';
import {get_history_parking} from '../Constants/Constants';

var SharedPreferences = require('react-native-shared-preferences');

const HistoryScreen = () => {
  const [userID, setUserID] = useState(0);
  const [historyData, setHistoryData] = useState([]);
  const [loggedInUserID, setLoggedInUserID] = useContext(UserContext);
  const [refreshing, setRefreshing] = useState(true);


  useEffect(() => {
    SharedPreferences.getItem('id', value => setUserID(value));

    loadData();
  }, []);

  const loadData = () => {
    console.log('loggedInUserID: ' + loggedInUserID);
    var dataToSend = {
      id: loggedInUserID,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch(get_history_parking, {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.error == false) {
          console.log('responseJson.data: ' + responseJson.data);
          setHistoryData(responseJson.data);
          // setBookedParkingList(responseJson.data);
          // setCarSelect(false);
          // notifyMessage(textValue + " successfully");
          // distributeData(totalParking, responseJson.data);
        } else {
          // distributeData(totalParking, []);
          // setCarSelect(false);
          // notifyMessage(textValue + " successfully");
          console.log(responseJson.error);
        }
      })
      .catch(error => {
        // alert(JSON.stringify(error));
        // console.error(error);
      });
  };

  const [latlong, setLatLong] = useState({lat: '', long: ''});

  const onCLick = () => {
    console.log('=============== onClick');
    () => loadData;
    var list = [];

    for (let i = 0; i < 3; i++) {
      const element = {lat: i, long: i + 5};
      setLatLong(element);
      // var obj = {};
      // obj['lat'] = i;
      // obj['long'] = i+5;
      //   console.log('------------'+ element);
      list.push(element);
    }
    console.log('list----:  ' + list.length);
    console.log('list:  ' + list);
    list.map(item => console.log('item----:  ' + item.long));
  };

  const onRefresh = () => {
    console.log('onRefresh'+refreshing);
    setRefreshing(false);
  };

  return (
    <View>
    
      <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      >
      {historyData.map(item => (
        <View style={{flexDirection:'row', margin:10, borderRadius:10, backgroundColor:'beige', overflow:'hidden' }}>
          <View style={{  justifyContent:'center'}}>
            <Text style={{backgroundColor:'red', justifyContent:'center', padding:10, borderRadius:50, marginHorizontal:10}}> {item.slot_numb} </Text>
          </View>
          <View style={{flex:1, justifyContent:'center', paddingVertical:10}}>
          <Text style={{fontSize:20, fontWeight:'bold' }}> {item.title} </Text>
          <Text style={{fontSize:14, }}> {item.description} </Text>
          <Text style={{fontSize:12, textAlign:'right', marginRight:20}}> {item.booked_time} </Text>
          </View>
        </View>
      ))}
      </RefreshControl>
    </View>
  );
};

export default HistoryScreen;
