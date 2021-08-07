/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import HistoryScreen from '../HistoryScreen/HistoryScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import MySpotsScreen from '../MySpotsScreen/MySpotsScreen';
import SignOutScreen from '../SignOutScreen/SignOutScreen';
import ParkMyCarScreen from '../ParkMyCarScreen/ParkMyCarScreen';
import ReportScreen from '../ReportScreen/ReportScreen';
import EntranceScreen from '../EntranceScreen/EntranceScreen';
import ExitScreen from '../ExitScreen/ExitScreen';
import MainRouteNavigate from '../MainRouteNavigate/MainRouteNavigate';
import HomeScreen from '../HomeScreen/HomeScreen';
import GoogleMapScreen from '../GoogleMapScreen/GoogleMapScreen';
import PracticeLogScreen from '../PracticeLogScreen/PracticeLogScreen';
import {ScreenContainer} from 'react-native-screens';

import profile from '../ImageFolder/profile_png.png';
const home_icon = parseIconFromClassName('fa fa-home');
const sendIcon = parseIconFromClassName('fa fa-paper-plane');
const history_icon = parseIconFromClassName('fa fa-address-card');
const user_icon = parseIconFromClassName('fa fa-user');
const map_marker_icon = parseIconFromClassName('fa fa-map-marker-alt');
const sign_out_icon = parseIconFromClassName('fa fa-sign-out-alt');
const add_plus_icon = parseIconFromClassName('fa fa-plus');
const exclamination_icon = parseIconFromClassName('fa fa-exclamation-triangle');

import Geolocation from '@react-native-community/geolocation';
import {NativeRouter, Route} from 'react-router-native';
import { c_white, login_app_name, pri_1, pri_2 } from '../Constants/Constants';
var SharedPreferences = require('react-native-shared-preferences');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    console.log('--------------------------------------');
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{
            width: 25,
            height: 25,
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

function HomeScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={GoogleMapScreen}
        options={{
          title: login_app_name, //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: pri_1, //Set Header color
          },
          headerTintColor: 'white', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function HistoryScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="History">
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        onPress={() =>{
          console.log('***********                *************************               *******************');
        }}
        options={{
          title: 'History', //ekhaner header title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MySpotsScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="My Spots">
      <Stack.Screen
        name="My Spots"
        component={MySpotsScreen}
        options={{
          title: 'My Spots', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
function SignOutScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Sign Out">
      <Stack.Screen
        name="Sign Out"
        component={SignOutScreen}
        options={{
          title: 'Sign Out', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
function ParkMyCarScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Park My Car">
      <Stack.Screen
        name="Park My Car"
        component={HomeScreen}
        options={{
          title: 'Park My Car', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ReportScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Report Issues">
      <Stack.Screen
        name="Report Issues"
        component={ReportScreen}
        options={{
          title: 'Report Issues', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function EntranceScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Entrance Screen">
      <Stack.Screen
        name="EntranceScreen"
        component={EntranceScreen}
        options={{
          title: 'Entrance Screen', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function GoogleMapScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Entrance Screen">
      <Stack.Screen
        name="Google Maps Screen"
        component={GoogleMapScreen}
        options={{
          title: login_app_name, //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Root({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreenStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Entrance"
        options={{
          drawerLabel: 'Entrance Screen',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTitle: 'Entrance Screen',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="black"
            />
          ),
        }}
        component={EntranceScreen}
      />
    

      <Stack.Screen
        name="GoogleMaps"
        component={GoogleMapScreen}
        options={{
          title: login_app_name, //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const MainNavigationScreen = ({navigation}) => {
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [a_number, setNumber] = useState('');

  useEffect(() => {
    // console.log('==========================================================================================');
    SharedPreferences.getItems(
      ['id', 'name', 'username', 'password', 'email', 'a_number'],
      function (values) {
        // console.log(values[0] + "    " + values[1]+'      '+ values[2] + "    " + values[3]);
        setName(values[1]);
        setUserName(values[2]);
        setEmail(values[4]);
        setNumber(values[5]);
      },
    );

    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);

        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
        SharedPreferences.setItem('lat', currentLatitude);
        SharedPreferences.setItem('long', currentLongitude);
      },
      error => {
        // alert("Please turn on your location") ;
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Root"
          drawerContentOptions={{
            activeTintColor: 'white',
            activeBackgroundColor: pri_2,
            inactiveTintColor: 'white',
            itemStyle: {marginVertical: 5},
          }}
          drawerContent={props => {
            const filteredProps = {
              ...props,
              state: {
                ...props.state,
                routeNames: props.state.routeNames.filter(
                  // To hide single option
                  // (routeName) => routeName !== 'HiddenPage1',
                  // To hide multiple options you can add & condition
                  routeName => {
                    // routeName !== 'Root' && routeName !== 'HiddenPage2';
                    routeName !== 'Root' && routeName !== 'Home';
                  },
                ),
                routes: props.state.routes.filter(
                  route =>
                    // route.name !== 'HiddenPage1' && route.name !== 'HiddenPage2'
                    route.name !== 'Root' && route.name !== 'Home',
                ),
              },
            };
            return (
              <DrawerContentScrollView
                {...filteredProps}
                style={{backgroundColor: pri_1}}>
                <View>
                  <View
                    style={{
                      backgroundColor: pri_1,
                      // height: 140,
                      // alignItems: 'center',
                      // justifyContent: 'center',
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={profile}
                        style={{width: 100, height: 100}}
                      />
                      <Text
                        style={{
                          fontSize: 20,
                          paddingLeft: 10,
                          fontWeight: 'bold',
                          color: 'white',
                        }}>
                        {name}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'white',
                        }}>
                        +880{a_number}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'white',
                        }}>
                        {email}
                      </Text>
                    </View>
                  </View>
                </View>
                <DrawerItemList {...filteredProps} />
              </DrawerContentScrollView>
            );
          }}>
          <Drawer.Screen
            name="GoogleMaps"
            // options={{drawerLabel: 'History'}}
            options={{
              title: 'Home',
              drawerIcon: ({focused, size}) => (
                <FontAwesome
                  style={{
                    fontSize: 25,
                    color: 'white',
                    justifyContent: 'flex-end',
                  }}
                  icon={home_icon}
                  // onPress={() => setParkingSlot(true)}
                />
              ),
            }}
            component={GoogleMapScreenStack}
          />

          <Drawer.Screen
            name="History"
            options={{
              title: 'History',
              drawerIcon: ({focused, size}) => (
                <FontAwesome
                  style={{
                    fontSize: 25,
                    color: 'white',
                    justifyContent: 'flex-end',
                  }}
                  icon={history_icon}
                  // onPress={() => setParkingSlot(true)}
                />
              ),
            }}
            // options={{ drawerLabel: 'History', , style: { color: 'white', backgroundColor: 'red' } }}
            component={HistoryScreenStack}
          />
          <Drawer.Screen
            name="Profile"
            options={{
              title: 'Profile',
              drawerIcon: ({focused, size}) => (
                <FontAwesome
                  style={{
                    fontSize: 25,
                    color: 'white',
                    justifyContent: 'flex-end',
                  }}
                  icon={user_icon}
                  // onPress={() => setParkingSlot(true)}
                />
              ),
            }}
            component={ProfileScreenStack}
          />
           <Drawer.Screen
            name="Park my Car"
            options={{
              title: 'Park my Car',
              drawerIcon: ({focused, size}) => (
                <FontAwesome
                  style={{
                    fontSize: 25,
                    color: 'white',
                    justifyContent: 'flex-end',
                  }}
                  icon={map_marker_icon}
                  // onPress={() => setParkingSlot(true)}
                />
              ),
            }}
            component={ParkMyCarScreenStack}
          />
          <Drawer.Screen
            name="Sign Out"
            options={{
              title: 'Sign Out',
              drawerIcon: ({focused, size}) => (
                <FontAwesome
                  style={{
                    fontSize: 25,
                    color: 'white',
                    justifyContent: 'flex-end',
                  }}
                  icon={sign_out_icon}
                  // onPress={() => setParkingSlot(true)}
                />
              ),
            }}
            component={SignOutScreenStack}
          />
         
          <Drawer.Screen
            name="Report Issues"
            options={{
              title: 'Report Issues',
              drawerIcon: ({focused, size}) => (
                <FontAwesome
                  style={{
                    fontSize: 25,
                    color: 'white',
                    justifyContent: 'flex-end',
                  }}
                  icon={exclamination_icon}
                  // onPress={() => setParkingSlot(true)}
                />
              ),
            }}
            component={ReportScreenStack}
          />
          {/* <Drawer.Screen
          name="EntranceScreen"
          options={{drawerLabel: 'Entrance Screen'}}
          component={EntranceScreenStack}
        /> */}

          <Drawer.Screen
            name="Root"
            options={{drawerLabel: 'Root', headerShown: false}}
            component={Root}
          />
          <Drawer.Screen
            name="Home"
            // options={{drawerLabel: 'History'}}
            component={HomeScreenStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>

    
    </View>
  );
};

export default MainNavigationScreen;
