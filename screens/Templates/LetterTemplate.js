import * as React from 'react';
import { View, Button, StyleSheet,Image  } from 'react-native';
import Constants from 'expo-constants';
import * as Print from 'expo-print';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';



const LetterTemplate=({route})=> {

    

    let date,ReceiverAddress,Greetings,Subject,Body,CloseLetter

  return (
    <View style={styles.container}>
     
      <Button 
      title="Downlode Your Letter" onPress={() => {
        Print.printAsync({
      html: `

      <html>
      <head>
          <style type="text/css">
              .bodyBody {
                  margin: 10px;
                  font-size: 1.50em;
              }
              .divHeader {
                  text-align: right;
                  border: 1px solid;
              }
              .divReturnAddress {
                  text-align: left;
                  float: right;
              }
              .divSubject {
                  clear: both;
                  
                  padding-top: 80px;
              }
              .divAdios {
                  float: right;
                  padding-top: 50px;
              }
          </style>
      </head>
      <body class="bodyBody">
          <div class="divReturnAddress">
            ${route.params.formData.SenderName},<br/>
            ${route.params.formData.SenderAddress}.<br/>
            ${route.params.formData.date}
          </div>
  
          <div class="divSubject">
              ${route.params.formData.ReceiverName},<br/>
              ${route.params.formData.ReceiverAddress}
  
          </div>
  
          <div class="divContents">
              <p>
                 ${route.params.formData.Greetings}
              </p>
  
              <p>
                 ${route.params.formData.Subject}
              </p>
              <p>
                  ${route.params.formData.Body}
              </p>
          </div>
  
          <div class="divAdios">
              
              
             ${route.params.formData.CloseLetter}<br/>
              
          </div>
      </body>
  </html>`
    
    });
      }} />

      <Image
        style={styles.sliderImage}
        source={require('../../assets/easy.jpg')}
        resizeMode="stretch"/>
    </View>

    
  );
}



export default LetterTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sliderImage: {
    height: '50%',
    width: '100%',
   
   
  },
  
});