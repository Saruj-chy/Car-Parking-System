// https://fontawesome.com/v4.7.0/icons/

import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {RadioButton} from 'react-native-paper';

import blue_car from '../ImageFolder/blue_car_top.png';
import white_car from '../ImageFolder/white_car_top.png';
import red_car from '../ImageFolder/red_car_top1.png';
import Icon from 'react-native-vector-icons/Ionicons';

import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';

import { BackHandler } from 'react-native';


const arrowLeftIcon = parseIconFromClassName('fa fa-arrow-left');
const sendIcon = parseIconFromClassName('fa fa-paper-plane');

const EntranceScreen = ({navigation, route}) => {
  const [locationDetails, setLocationDetails] = useState({});

  const ArrayFirst = [
    {id: 1, slot_name: 'img_1', slot_color: 'blue'},
    {id: 2, slot_name: 'img_2', slot_color: 'blue'},
    {id: 3, slot_name: 'img_3', slot_color: 'blue'},
    {id: 4, slot_name: 'img_4', slot_color: 'blue'},
    {id: 5, slot_name: 'img_5', slot_color: 'blue'},
    {id: 6, slot_name: 'img_6', slot_color: 'blue'},
    {id: 7, slot_name: 'img_7', slot_color: 'blue'},
    {id: 8, slot_name: 'img_8', slot_color: 'blue'},
    {id: 9, slot_name: 'img_9', slot_color: 'blue'},
    {id: 10, slot_name: 'img_10', slot_color: 'blue'},
    {id: 11, slot_name: 'img_11', slot_color: 'blue'},
    {id: 12, slot_name: 'img_12', slot_color: 'blue'},
  ];
  const ArraySecond = [
    {id: 1, slot_name: 'img_1', slot_color: 'white'},
    {id: 2, slot_name: 'img_2', slot_color: 'red'},
    {id: 3, slot_name: 'img_3', slot_color: 'white'},
    {id: 4, slot_name: 'img_4', slot_color: 'white'},
    {id: 5, slot_name: 'img_5', slot_color: 'white'},
    {id: 6, slot_name: 'img_6', slot_color: 'white'},
    {id: 7, slot_name: 'img_7', slot_color: 'red'},
    {id: 8, slot_name: 'img_8', slot_color: 'white'},
    {id: 9, slot_name: 'img_9', slot_color: 'white'},
    {id: 10, slot_name: 'img_10', slot_color: 'red'},
    {id: 11, slot_name: 'img_11', slot_color: 'white'},
    {id: 12, slot_name: 'img_12', slot_color: 'white'},
  ];
  const ArrayThird = [
    {id: 1, slot_name: 'img_1', slot_color: 'white'},
    {id: 2, slot_name: 'img_2', slot_color: 'white'},
    {id: 3, slot_name: 'img_3', slot_color: 'red'},
    {id: 4, slot_name: 'img_4', slot_color: 'white'},
    {id: 5, slot_name: 'img_5', slot_color: 'red'},
    {id: 6, slot_name: 'img_6', slot_color: 'white'},
    {id: 7, slot_name: 'img_7', slot_color: 'white'},
    {id: 8, slot_name: 'img_8', slot_color: 'white'},
    {id: 9, slot_name: 'img_9', slot_color: 'white'},
    {id: 10, slot_name: 'img_10', slot_color: 'white'},
    {id: 11, slot_name: 'img_11', slot_color: 'white'},
    {id: 12, slot_name: 'img_12', slot_color: 'white'},
  ];
  const ArrayFourth = [
    {id: 1, slot_name: 'img_1', slot_color: 'white'},
    {id: 2, slot_name: 'img_2', slot_color: 'red'},
    {id: 3, slot_name: 'img_3', slot_color: 'white'},
    {id: 4, slot_name: 'img_4', slot_color: 'white'},
    {id: 5, slot_name: 'img_5', slot_color: 'white'},
    {id: 6, slot_name: 'img_6', slot_color: 'white'},
    {id: 7, slot_name: 'img_7', slot_color: 'red'},
    {id: 8, slot_name: 'img_8', slot_color: 'white'},
    {id: 9, slot_name: 'img_9', slot_color: 'white'},
    {id: 10, slot_name: 'img_10', slot_color: 'red'},
    {id: 11, slot_name: 'img_11', slot_color: 'white'},
    {id: 12, slot_name: 'img_12', slot_color: 'white'},
  ];

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
        // 'http://192.168.1.8/android/Bulbul_Sir_PHP/checkpoint_details.php',
        'https://snakes123.000webhostapp.com/bulbul_sir/checkpoint_details_bulbulsir.php',
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
            // console.log(responseJson.total);
            // console.log(responseJson.free);
            // console.log(responseJson.booked);
            // console.log(responseJson.error);
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

  const onClick = () => {
    // navigation.goBack();
    console.log('navigate back pressed');
  };

  //=======================================================================================   default dialog
  const [parkingSlot, setParkingSlot] = useState(false);
  const [reportDialog, setReportDialog] = useState(false);
  const [report, setReport] = React.useState('first');
  const [cancelBooking, setCancelbooking] = useState(false);

  const checkboxes = [
    {id: 1, checked: false, title: 'checked 1'},
    {id: 2, checked: false, title: 'checked 2'},
    {id: 3, checked: false, title: 'checked 3'},
  ];
  const checBoxesView = checkboxes.map((cb, index) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>{cb.title}</Text>
      </View>
    );
  });



function handleBackButtonClick() {
  console.log("backpressed");
  setCancelbooking(true);
  
    return true;
  }

  const onBackOkPressed = () =>{
    navigation.goBack() ;
  }

  BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);


  //=======================================================================================   default dialog

  return (
    <View style={styles.container}>
      <View style={styles.view_top}>
        <FontAwesome
          style={{fontSize: 32, color: 'white'}}
          icon={arrowLeftIcon}
          onPress={onClick}
        />
        <Text style={{color: 'white', fontSize: 20}}>
          Choose Available Slot
        </Text>
        <FontAwesome
          style={{fontSize: 25, color: 'white', justifyContent: 'flex-end'}}
          icon={sendIcon}
          onPress={() => setParkingSlot(true)}
        />
      </View>

      <View style={styles.top}>
        <ScrollView>
          <View style={styles.top}>
            <View style={[styles.body_left_item]}>
              {ArrayFirst.map(item => (
                <View style={styles.item_fixed_border}>
                  <Image source={blue_car} style={styles.tinyLogo} />
                </View>
              ))}
            </View>
            <View style={styles.body_middle_item}>
              <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                {ArraySecond.map(item => (
                  <View style={styles.item_fixed_border}>
                    {item.slot_color === 'red' ? (
                      <Image source={red_car} style={styles.tinyLogo} />
                    ) : (
                      <Image source={white_car} style={styles.tinyLogo} />
                    )}
                  </View>
                ))}
              </View>
              <View style={{flex: 0.5, alignItems: 'flex-start'}}>
                {ArrayThird.map(item => (
                  <View style={styles.item_fixed_border}>
                    {item.slot_color === 'red' ? (
                      <Image source={red_car} style={styles.tinyLogo} />
                    ) : (
                      <Image source={white_car} style={styles.tinyLogo} />
                    )}
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.body_right_item}>
              {ArrayFourth.map(item => (
                <View style={styles.item_fixed_border}>
                  {item.slot_color === 'red' ? (
                    <Image source={red_car} style={styles.tinyLogo} />
                  ) : (
                    <Image source={white_car} style={styles.tinyLogo} />
                  )}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.view_below}>
        <Text style={{color: 'white'}}>Total: {locationDetails.total} </Text>
        <Text style={{color: 'white'}}>Empty: {locationDetails.free} </Text>
        <Text style={{color: 'white'}}>
          Reserved: {locationDetails.booked}{' '}
        </Text>
      </View>

      {/*-------------------                       Parking slot dialog view            ---------------------------*/}
      {/* -----------------                      for  dialog view, it active when send btn click                ---------------------*/}

      <Dialog
        onDismiss={() => {
          setParkingSlot(false);
        }}
        width={0.9}
        visible={parkingSlot}
        rounded
        actionsBordered
        dialogTitle={
          <DialogTitle
            title="Parking Slot Reserved"
            style={{
              backgroundColor: '#F7F7F8',
            }}
            hasTitleBar={false}
            align="left"
          />
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="Cancel"
              onPress={() => {
                setParkingSlot(false);
              }}
              style={{backgroundColor: 'lightgray'}}
            />
            <DialogButton
              text="Ok"
              onPress={() => {
                setParkingSlot(false);
              }}
              style={{backgroundColor: 'lightgray'}}
            />
          </DialogFooter>
        }>
        <DialogContent
          style={{
            backgroundColor: '#F7F7F8',
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'Cochin',
                color: 'black',
              }}>
              Your Reservation is only for 15 minutes after that reservation is
              canceled
            </Text>
          </View>
        </DialogContent>
      </Dialog>

      {/*-------------------                       Parking slot dialog view            ---------------------------*/}
      {/* -----------------                      for  dialog view, it active when send btn click                ---------------------*/}

      {/*=================================         for dialog view, it active when send btn click                =========================== */}
      {/*  ===========================                            Report a Problem                      ===============================      */}

      <Dialog
        onDismiss={() => {
          setReportDialog(false);
        }}
        width={0.9}
        visible={reportDialog}
        rounded
        actionsBordered
        dialogTitle={
          <DialogTitle
            title="Sorry for inconvenience, Report a problem"
            style={{
              backgroundColor: '#F7F7F8',
            }}
            hasTitleBar={false}
            align="left"
          />
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="Cancel"
              onPress={() => {
                setReportDialog(false);
              }}
              // style={{backgroundColor: 'lightgray'}}
            />
            <DialogButton
              text="Submit"
              onPress={() => {
                setReportDialog(false);
              }}
              // style={{backgroundColor: 'lightgray'}}
            />
          </DialogFooter>
        }>
        <DialogContent
          style={{
            backgroundColor: '#F7F7F8',
          }}>
          <RadioButton.Group
            onValueChange={newValue => setReport(newValue)}
            value={report}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="1" />
                <Text> Another car is parked </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="2" />
                <Text> Place is too small to park </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="3" />
                <Text> Place is not clean </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="4" />
                <Text> Others </Text>
              </View>
            </View>
          </RadioButton.Group>
        </DialogContent>
      </Dialog>

      {/*=================================         for dialog view, it active when send btn click                =========================== */}
      {/*  ===========================                            Report a Problem                      ===============================      */}






{/*-------------------                       Cancel booking dialog view            ---------------------------*/}
      {/* -----------------                      for  dialog view, it active when send btn click                ---------------------*/}

      <Dialog
        onDismiss={() => {
          setCancelbooking(false);
        }}
        visible={cancelBooking}
        dialogTitle={
          <DialogTitle
            title="Cancel"
            style={{
              backgroundColor: '#F7F7F8',
            }}
            hasTitleBar={true}
            align="left"
          />
        }
       >
        <DialogContent
          style={{
            backgroundColor: '#F7F7F8',
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Cochin',
                color: 'black',
              }}>
              Do you want to cancel this booking ?
            </Text>
            <View style={{ alignItems:'flex-end' }}>
            <Text style={{color:'red', fontSize:20, paddingRight:20, paddingTop:20}}   onPress={() => {
                setCancelbooking(false);
                onBackOkPressed() ;
              }} >Ok</Text>
            </View>
          </View>
        </DialogContent>
      </Dialog>

      {/*-------------------                        Cancel booking dialog view        ---------------------------*/}
      {/* -----------------                      for  dialog view, it active when send btn click                ---------------------*/}

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
    justifyContent: 'space-around',
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
    // borderWidth: 1,
    flexDirection: 'row',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  body_left_item: {
    flex: 0.25,
    // backgroundColor: 'red',
    // borderWidth: 1,
    alignItems: 'flex-end',
  },
  body_right_item: {
    flex: 0.25,
    // backgroundColor: 'red',
    // borderWidth: 1,
    alignItems: 'flex-start',
  },
  body_middle_item: {
    flex: 0.5,
    // backgroundColor: 'red',
    // borderWidth: 1,
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 60,
    height: 30,
    margin: 2,
    padding: 5,
  },
  tinyLogo1: {
    width: 70,
    height: 50,
    margin: 2,
  },

  item_fixed_border: {
    // borderWidth:2,
    // borderColor:'red',
    marginTop: 2,
    width: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EntranceScreen;
