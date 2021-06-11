import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import {RadioButton} from 'react-native-paper';


const ReportScreen = () => {
  const [reportDialog, setReportDialog] = useState(true);
  const [report, setReport] = React.useState('first');



    return (
        <View>
          <Button title="Report Dialog" onPress={() => setReportDialog(true)} />
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
    </View>
    );
};

export default ReportScreen;