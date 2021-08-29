import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const Aboutus= () => {
    return (
        <View>
            <Text>Invoice Screen</Text>
            <Button
                title="click here"
                onPress={()=>alert('Button clicked!')}
            />
        </View>
    )
}

export default Aboutus;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width: '90%',
      alignSelf: 'center'
    },
  });