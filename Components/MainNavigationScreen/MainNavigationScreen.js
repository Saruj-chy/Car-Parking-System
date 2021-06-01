import React, {useState} from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
var SharedPreferences = require('react-native-shared-preferences');

// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
// } from '@react-navigation/drawer';

import HistoryScreen from '../HistoryScreen/HistoryScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import MySpotsScreen from '../MySpotsScreen/MySpotsScreen';
import SignOutScreen from '../SignOutScreen/SignOutScreen';
import ParkMyCarScreen from '../ParkMyCarScreen/ParkMyCarScreen';
import ReportScreen from '../ReportScreen/ReportScreen';
import EntranceScreen from '../EntranceScreen/EntranceScreen';
import ExitScreen from '../ExitScreen/ExitScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import MainRouteNavigate from '../MainRouteNavigate/MainRouteNavigate';
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import GoogleMapScreen from '../GoogleMapScreen/GoogleMapScreen';
import PracticeLogScreen from '../PracticeLogScreen/PracticeLogScreen';

// import DrawerItemScreen from '../DrawerItemScreen/DrawerItemScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
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
          title: 'Smart Car Parking System', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#0000FF', //Set Header text color //
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
        options={{
          title: 'History', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#0000FF', //Set Header text color //
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
          headerTintColor: '#0000FF', //Set Header text color //
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
          headerTintColor: '#0000FF', //Set Header text color //
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
          headerTintColor: '#0000FF', //Set Header text color //
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
          headerTintColor: '#0000FF', //Set Header text color //
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
          headerTintColor: '#0000FF', //Set Header text color //
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
          headerTintColor: '#0000FF', //Set Header text color //
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
          title: 'Google Maps Screen', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#0000FF', //Set Header text color //
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

      {/* //saruj change apply */}
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreenStack}
        options={{headerShown: false}}
      />

      
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
        name="Registration"
        component={RegistrationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LogScreen"
        component={PracticeLogScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="GoogleMaps"
        component={GoogleMapScreen}
        options={{
          title: 'Google Maps Screen', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#0000FF', //Set Header text color //
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        // options={{headerShown: false}}
      />

      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
}

const MainNavigationScreen = ({navigation}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Root"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
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
            <DrawerContentScrollView {...filteredProps}>
              <DrawerItemList {...filteredProps} />
            </DrawerContentScrollView>
          );
        }}>
        
        <Drawer.Screen
          name="History"
          options={{drawerLabel: 'History'}}
          component={HistoryScreenStack}
        />
        <Drawer.Screen
          name="Profile"
          options={{drawerLabel: 'Profile'}}
          component={ProfileScreenStack}
        />
        <Drawer.Screen
          name="My Spots"
          options={{drawerLabel: 'My Spots'}}
          component={MySpotsScreenStack}
        />
        <Drawer.Screen
          name="Sign Out"
          options={{drawerLabel: 'Sign Out'}}
          component={SignOutScreenStack}
        />
        <Drawer.Screen
          name="Park my Car"
          options={{drawerLabel: 'Park my Car'}}
          component={ParkMyCarScreenStack}
        />
        <Drawer.Screen
          name="Report Issues"
          options={{drawerLabel: 'Report Issues'}}
          component={ReportScreenStack}
        />
        {/* <Drawer.Screen
          name="EntranceScreen"
          options={{drawerLabel: 'Entrance Screen'}}
          component={EntranceScreenStack}
        /> */}
        <Drawer.Screen
          name="Exit Screen"
          options={{drawerLabel: 'Exit Screen', headerShown: false}}
          component={LoginScreen}
        />
        <Drawer.Screen
          name="GoogleMaps"
          // options={{drawerLabel: 'History'}}
          component={GoogleMapScreenStack}
        />

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
  );
};

export default MainNavigationScreen;
