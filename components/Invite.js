import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const Invite= () => {
    return (
        <View>
            <Text>Cv Screendds</Text>
            <Button
                title="click here"
                onPress={()=>alert('Button clicked!')}
            />
        </View>
    )
}

export default Invite;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width: '90%',
      alignSelf: 'center'
    },
  });
