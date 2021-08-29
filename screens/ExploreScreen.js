import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import * as firebase from "firebase";
import jwt_decode from "jwt-decode";

const ExploreScreen = ({route}) => {

  let decode =jwt_decode(route.params.formData)

  const[data,setData]=React.useState([])

    function getData  ()  {

      firebase
       .database()
       .ref(`users/${decode.userId}`)
       .on("value", function (snapshot) {
         setData(snapshot.val());
       });
   
        
     };
     React.useEffect(() => {
      setTimeout(() => {
        getData();
      }, 1000);
    }, []);

    async function sendPushNotification(expoPushToken) {
      const message = {
        to: expoPushToken,
        sound: "default",
        title: "Add new template ",
        body: "category",
        data: { someData: "goes here" },
      };
  
      
  
      await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-encoding": "gzip, deflate",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    }
const[payment,setPayment]=React.useState(data.paymentD)
console.log(data.paymentD,payment)

    if(data.paymentD!==payment){
      sendPushNotification(data.pushToken);
      setPayment(data.paymentD)
      
    }
    return (
      <View style={styles.container}>
        <Text>ExploreeScreen</Text>
        <Button
          title="Click Here"
          onPress={() => sendPushNotification(data.pushToken)}
        />
      </View>
    );
};
export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });