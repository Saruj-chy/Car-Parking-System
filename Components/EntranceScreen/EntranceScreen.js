/* eslint-disable no-trailing-spaces */
// https://fontawesome.com/v4.7.0/icons/

import React, { useEffect, useState } from 'react';
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

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

const EntranceScreen = ({ navigation, route }) => {
  const [locationDetails, setLocationDetails] = useState({});
  const [totalParking, setTotalParking] = useState([]);
  const [arrayFirst, setArrayFirst] = useState([]);
  const [arraySecond, setArraySecond] = useState([]);
  const [arrayThird, setArrayThird] = useState([]);
  const [arrayFourth, setArrayFourth] = useState([]);


  useEffect(() => {
    if (route.params) {
      console.log(' route id: ' + route.params.id);
      var dataToSend = { location_id: route.params.id };
      console.log(dataToSend);
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
      fetch(
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

      //==============================     parking total slot
      getTotalParkingSlot(formBody);
      // getBookingParkingSlot(formBody);



    }
  }, []);

  const getTotalParkingSlot = (formBody) => {
    console.log('data load from network');
    fetch(
      'https://snakes123.000webhostapp.com/bulbul_sir/get_total_parking_slot.php',
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
          // const checkPointDetails = {
          //   error: responseJson.error,
          //   data: responseJson.data,

          // };
          console.log(responseJson.error);
          console.log(responseJson.data);
          setTotalParking(responseJson.data);

          getBookingParkingSlot(formBody, responseJson.data);




        } else {
          console.log(responseJson.error);
        }
      })
      .catch(error => {
        // alert(JSON.stringify(error));
        console.error(error);
      });

  };
  const getBookingParkingSlot = (formBody, totalParkingJson) => {
    fetch(
      'https://snakes123.000webhostapp.com/bulbul_sir/get_booked_slot_details.php',
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

          console.log(responseJson.data);
          // setTotalParking(responseJson.data);

          distributeData(totalParkingJson, responseJson.data);


        } else {
          console.log(responseJson.error);
        }
      })
      .catch(error => {
        // alert(JSON.stringify(error));
        console.error(error);
      });

  };


  const distributeData = (totalParkingJson, parkBokingJson) => {


    totalParkingJson.map(item => {

      var list1 = [];
      var list2 = [];
      var list3 = [];
      var list4 = [];


      for (var i = 1; i <= parseInt(item.total_slot); i++) {

        var status = "unbooked";
        parkBokingJson.filter(fi => fi.slot_numb == i).map(i => {
          console.log(i.status);
          status = "booked";
        });

        var obj = {
          "slot_numb": i,
          "status": status
        };


        if (i % 4 == 1) {
          list1.push(obj);
        } else if (i % 4 == 2) {
          list2.push(obj);
        } else if (i % 4 == 3) {
          list3.push(obj);
        } else if (i % 4 == 0) {
          list4.push(obj);
        }
      }

      setArrayFirst(list1);
      setArraySecond(list2);
      setArrayThird(list3);
      setArrayFourth(list4);
    });

  };





  const onParkMyCarClick = () => {
    console.log('park my car click');
    // navigation.navigate('Park my Car', { params: {number: '123456' } }   );
    navigation.jumpTo('Root', {
      screen: 'LogScreen',
      params: { number: '123456' },
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
    { id: 1, checked: false, title: 'checked 1' },
    { id: 2, checked: false, title: 'checked 2' },
    { id: 3, checked: false, title: 'checked 3' },
  ];
  const checBoxesView = checkboxes.map((cb, index) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text>{cb.title}</Text>
      </View>
    );
  });



  function handleBackButtonClick() {
    console.log("backpressed");
    setCancelbooking(true);

    return true;
  }

  const onBackOkPressed = () => {
    navigation.goBack();
  }

  BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);


  //=======================================================================================   default dialog

  return (
    <View style={styles.container}>
      <View style={styles.view_top}>
        <FontAwesome
          style={{ fontSize: 32, color: 'white' }}
          icon={arrowLeftIcon}
          onPress={onClick}
        />
        <Text style={{ color: 'white', fontSize: 20 }}>
          Choose Available Slot
        </Text>
        <FontAwesome
          style={{ fontSize: 25, color: 'white', justifyContent: 'flex-end' }}
          icon={sendIcon}
          onPress={() => setParkingSlot(true)}
        />
      </View>

      <View style={styles.top}>
        <ScrollView>
          <View style={styles.top}>
            <View style={[styles.body_left_item]}>
              {arrayFirst.map(item => (
                <Pressable
                  onPress={() => console.log('press id:' + item)}
                  style={styles.item_fixed_border}>
                  {
                    item.status === "unbooked" ? <Image source={blue_car} style={styles.tinyLogo} /> : <Image source={red_car} style={styles.tinyLogo} />
                  }
                </Pressable>
              ))}


            </View>
            <View style={styles.body_middle_item}>
              <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                {
                  console.log(arraySecond)
                }

                {arraySecond.map(item => (
                  <Pressable
                    onPress={() => console.log('press id:' + item)}
                    style={styles.item_fixed_border}>
                    {
                      item.status === "unbooked" ? <Image source={white_car} style={styles.tinyLogo} /> : <Image source={red_car} style={styles.tinyLogo} />
                    }
                  </Pressable>
                ))}



              </View>
              <View style={{ flex: 0.5, alignItems: 'flex-start' }}>


                {arrayThird.map(item => (
                  <Pressable
                    onPress={() => console.log('press id:' + item)}
                    style={styles.item_fixed_border}>
                    {
                      item.status === "unbooked" ? <Image source={white_car} style={styles.tinyLogo} /> : <Image source={red_car} style={styles.tinyLogo} />
                    }
                  </Pressable>
                ))}

              </View>
            </View>
            <View style={styles.body_right_item}>


              {arrayFourth.map(item => (
                <Pressable
                  onPress={() => console.log('press id:' + item)}
                  style={styles.item_fixed_border}>
                  {
                    item.status === "unbooked" ? <Image source={white_car} style={styles.tinyLogo} /> : <Image source={red_car} style={styles.tinyLogo} />
                  }
                </Pressable>
              ))}

            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.view_below}>
        <Text style={{ color: 'white' }}>Total: {locationDetails.total} </Text>
        <Text style={{ color: 'white' }}>Empty: {locationDetails.free} </Text>
        <Text style={{ color: 'white' }}>
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
              style={{ backgroundColor: 'lightgray' }}
            />
            <DialogButton
              text="Ok"
              onPress={() => {
                setParkingSlot(false);
              }}
              style={{ backgroundColor: 'lightgray' }}
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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton value="1" />
                <Text> Another car is parked </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton value="2" />
                <Text> Place is too small to park </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton value="3" />
                <Text> Place is not clean </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'red', fontSize: 20, paddingRight: 20, paddingTop: 20 }} onPress={() => {
                setCancelbooking(false);
                onBackOkPressed();
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
