import React, { useState } from 'react';
import { Button, View } from 'react-native';

const HistoryScreen = () => {
    const[latlong, setLatLong] = useState({'lat': '' , 'long': ''});

    const onCLick = () =>{
        var list =[] ;

        for (let i = 0; i < 3; i++) {
          const element = {'lat': i, 'long': i+5  } ;
          setLatLong(element);   
          // var obj = {};
          // obj['lat'] = i;
          // obj['long'] = i+5;
        //   console.log('------------'+ element);
          list.push(element);
        }
        console.log("list----:  "+list.length)
        console.log("list:  "+list)
        list.map(item =>console.log("item----:  "+item.long))
        
    }


    return (
        <View>
            <Button title="History" onPress={onCLick}> </Button>
        </View>
    );
};

export default HistoryScreen;