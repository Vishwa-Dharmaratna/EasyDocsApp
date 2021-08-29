import React from 'react';
import {View,StyleSheet, TextInput,Text,ScrollView,Button,TouchableOpacity} from "react-native";
//import DateTimePicker from '@react-native-community/datetimepicker';
//import React, { useState } from 'react'



const LetterScreen= ({navigation,route}) => {


  const[SenderName,setSenderName]=React.useState("");
  const[SenderAddress,setSenderAddress]=React.useState("");
  const[ReceiverName,setReceiverName]=React.useState("");
  const[ReceiverAddress,setReceiverAddress]=React.useState("");
  const[CloseLetter,setCloseLetter]=React.useState("");
  const[Date,setDate]=React.useState("");
  const[Greetings,setGreetings]=React.useState("");
  const[Subject,setSubject]=React.useState("");
  const[Body,setBody]=React.useState("");
  
  let formData={
    SenderName:SenderName,SenderAddress:SenderAddress,date:Date,ReceiverAddress:ReceiverAddress,ReceiverName:ReceiverName,
    Greetings:Greetings,Subject:Subject,Body:Body,CloseLetter:CloseLetter
  }


  

  //console.log("Sri lanka",formData)
    return (
        <View style={styles.container}>
          <ScrollView>
          <View style={{margin:20}}>
          
          <Text style={styles.letter}>Formal Letter Format</Text>

          <TextInput

            placeholder="Sender Name"
            dataDetector="address"
            multiline={true}
            onChangeText={(val)=>setSenderName(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          
    
          <TextInput

            placeholder="sender Address"
            dataDetector="address"
            multiline={true}
            onChangeText={(val)=>setSenderAddress(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

         






    
          <TextInput
            
            onChangeText={(val)=>setDate(val)}
            placeholder="Date"
            dataDetector="calendarEvent"
            //keyboardType='number-pad'
            textBreakStrategy="simple"
            style={styles.date}
          ></TextInput>

    
          <TextInput

            placeholder="Receiver Name"
            onChangeText={(val)=>setReceiverName(val)}
            dataDetector="address"
            multiline={true}
            numberOfLines={3}
            require={true}
            style={styles.placeholder}>

          </TextInput>

          <TextInput

            placeholder="Receiver Address"
            onChangeText={(val)=>setReceiverAddress(val)}
            dataDetector="address"
            multiline={true}
            numberOfLines={3}
            require={true}
            style={styles.placeholder}>

          </TextInput>

          <TextInput 
          
            placeholder="Greetings"
            onChangeText={(val)=>setGreetings(val)}
            multiline={true}
            numberOfLines={3}
            require={true} 
            style={styles.greetings}>

          </TextInput>

          <TextInput 
          
            placeholder="Topic"
            onChangeText={(val)=>setSubject(val)}
            multiline={true}
            numberOfLines={3}
            require={true}
            style={styles.subject}>
              
          </TextInput>

          <TextInput 
          
            placeholder="Body"
            onChangeText={(val)=>setBody(val)}
            multiline={true}
            numberOfLines={3}
            require={true} 
            style={styles.body}>


          </TextInput>

          <TextInput

            placeholder="closing of the Letter"
            onChangeText={(val)=>setCloseLetter(val)}
            style={styles.placeholder2}>

          </TextInput>

          <TextInput

            placeholder="Signature" 
            style={styles.signature}>

          </TextInput>

          <TouchableOpacity style={styles.commandButton}  onPress={() => navigation.navigate('LetterTemplate',{formData})}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
    
          
    
          {/*<Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />*/}

        </View>
        </ScrollView>
          
        </View>
        
      );
    }
export default LetterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    letter: {
      
      color: "#121212",
      fontSize: 23,
      marginTop: 5,
      marginLeft: 66
    },
    senderAddress: {
     
      color: "#121212",
      height: 70,
      width: 320,
      textAlign: "left",
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft:20
    },
    date: {
      
      color: "#121212",
      height: 45,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    placeholder: {
      
      color: "#121212",
      height: 70,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    greetings: {
      
      color: "#121212",
      height: 80,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    subject: {
      
      color: "#121212",
      height:80,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    body: {
      
      color: "#121212",
      height: 80,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    placeholder2: {
      
      color: "#121212",
      height: 48,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    signature: {
      
      color: "#121212",
      height: 48,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    cupertinoButtonInfo: {
      height: 44,
      width: 100,
      marginTop: 25,
      marginLeft: 134
    }
  });
  
  