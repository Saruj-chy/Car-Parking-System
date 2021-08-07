/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper/lib/typescript/components/RadioButton/RadioButton';

import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
  } from 'react-native-popup-dialog';

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


const SelectCarDialog = (state) => {

    console.log('----------------------------------------------------');
    console.log(state);

    const [carSelect, setCarSelect] = useState(true);

    return (
        <Dialog
        onDismiss={() => {
            setCarSelect(false);
        }}
        width={0.9}
        visible={carSelect}
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
                setCarSelect(false);
              }}
            // style={{backgroundColor: 'lightgray'}}
            />
            <DialogButton
              text="Submit"
              onPress={() => {
                setCarSelect(false);
              }}
            // style={{backgroundColor: 'lightgray'}}
            />
          </DialogFooter>
        }>
        <DialogContent
          style={{
            backgroundColor: '#F7F7F8',
          }}>

        </DialogContent>
      </Dialog>
    );
};

export default SelectCarDialog;