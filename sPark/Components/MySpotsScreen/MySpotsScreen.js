/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import {UserContext} from '../../App';
import {c_white, get_history_parking, get_my_spot, pri_1, pri_2} from '../Constants/Constants';

const MySpotsScreen = () => {

    const [historyData, setHistoryData] = useState([]);
    const [loggedInUserID, setLoggedInUserID] = useContext(UserContext);
    const [refreshing, setRefreshing] = useState(true);
  
  
    useEffect(() => {
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
      fetch(get_my_spot, {
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
            setRefreshing(false);
         
          } else {
           
            console.log(responseJson.error);
          }
        })
        .catch(error => {
          
        });
    };
  
    const ItemView = ({item}) => {
      return (
        // Flat List Item
        <View style={{flexDirection:'row', margin:10, borderRadius:10, backgroundColor: pri_2, overflow:'hidden' }}>
            {/* <View style={{  justifyContent:'center'}}>
              <Text style={{backgroundColor: 'white', justifyContent:'center', padding:10, borderRadius:20, marginHorizontal:10}}> {item.slot_numb} </Text>
            </View> */}
            <View style={{flex:1, justifyContent:'center', paddingVertical:10}}>
            <Text style={{fontSize:24, fontWeight:'bold', color:'white' }}> {item.title} </Text>
            <Text style={{fontSize:12, paddingLeft: 20 }}> {item.description} </Text>
            {/* <Text style={{fontSize:12, textAlign:'right', marginRight:20}}> {item.booked_time} </Text> */}
            </View>
          </View>
      );
    };
  
  
    const onRefresh = () => {
      setHistoryData([]);
      loadData();
    };

    
    return (
        <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {refreshing ? <ActivityIndicator /> : null}
        {
          historyData.length==0? <View style={{flex:1, textAlign:'center', justifyContent:'center'}}>
            <View style={{backgroundColor:'grey', marginHorizontal:50, padding:50, borderRadius:20}} >
            <Text style={{ textAlign:'center', fontSize:20, color:'white'}} onPress={()=> onRefresh() }>onRefresh</Text>
              </View>
            </View>:<FlatList
          data={historyData}
          keyExtractor={(item, index) => index.toString()}
          enableEmptySections={true}
          renderItem={ItemView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
        }
        
      </View>
    </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      marginTop: 10,
    },
    itemStyle: {
      fontSize: 20,
      padding: 10,
    },
  });

export default MySpotsScreen;