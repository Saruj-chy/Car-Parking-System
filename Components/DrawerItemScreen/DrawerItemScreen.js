/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import FirstPage from '../FirstPage/FirstPage';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const  firstScreenStack = ({ navigation })  => {
    return (
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen
            name="FirstPage"
            component={FirstPage}
            options={{
              title: 'First Page', //Set Header Title
              headerLeft: ()=>
                <NavigationDrawerStructure
                  navigationProps={navigation}
                />,
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

const DrawerItemScreen = ({naviName}) => {
    return (
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page Option' }}
          component={FirstPage} />
    );
};

export default DrawerItemScreen;