import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({navigation,route}) => {

    let formData={
      SenderName:"Yasitha",date:"2020/2/2",ReceiverAddress:"Tharaka",
      Greetings:"gfgfhhhgjhkhkj",Subject:"gfggfhhfh",Body:"gfhskksb",CloseLetter:"466576"
    }
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          onPress={() => navigation.navigate('LetterTemplate',{formData})}
        />
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});