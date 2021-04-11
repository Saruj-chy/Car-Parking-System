import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Appbar = ({name}) => {
    return (
        <View  style={styles.view_color} >
            <Text style={styles.text_color}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view_color:{ 
        backgroundColor: 'green',  
        padding: 5, 
        justifyContent:'center', 
    },
    text_color:{
        fontSize: 20,
        fontWeight: "bold", 
        textAlign: 'center', 
        color:'white'
    },


}
) 

export default Appbar;