import React, {useEffect, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import CurrentLocation from '../CurrentLocation/CurrentLocation';


const Home = ({history}) => {
  const [refreshing, setRefreshing] = useState(true);

  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');


 


  useEffect(() => {
//     setInterval(() => {
//       if(currentLatitude>0){
// console.log("currentLatitude 0: "+ currentLatitude);
//       }else{
//         console.log("currentLatitude: "+ currentLatitude);
// {/* <CurrentLocation
//         currentLatitude={currentLatitude}
//         currentLongitude={currentLongitude}
//         setCurrentLatitude={setCurrentLatitude}
//         setCurrentLongitude={setCurrentLongitude}
//       /> */}
//       }
//     }, 1000);


    // setTimeout(currentLatitude, 1000);
    if (currentLatitude > 0) {
      console.log('yes useEffect');
    } else {
      console.log('no useEffect');
      // setRefreshing(false);
    }
  }, []);

  
  const onRefresh = () => {
    console.log('how much');
    // if (refreshing) {
      
    // } else {
    //   console.log('no current location');
    // }
  };

  return (
    <View>
      <ScrollView>
        <CurrentLocation
        currentLatitude={currentLatitude}
        currentLongitude={currentLongitude}
        setCurrentLatitude={setCurrentLatitude}
        setCurrentLongitude={setCurrentLongitude}
      />
        { currentLatitude>0 ? 
          history.push("/refresh")
        : 
          console.log("No: "+ currentLatitude)
        } 

      </ScrollView>
    </View>
  );
};

export default Home;
