import React from 'react';
import { View, Text, Button, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const InvoiceScreen= ({navigation}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>FILL YOUR CV DETAILS</Text>
           


        <TouchableOpacity onPress={()=>{navigation.navigate('PersonalDetails')}}>

            <View style={styles.menuItem}>
            <AntDesign name="adduser" size={24} color="black" />
            <Text style={styles.menuItemText}>Personal Details</Text>

            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('Skill')}}>

            <View style={styles.menuItem}>
            <Octicons name="project" size={24} color="black" />
            <Text style={styles.menuItemText}>Project</Text>

            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('TechnicalSkill')}}>

            <View style={styles.menuItem}>
            <Feather name="code" size={24} color="black" />
            <Text style={styles.menuItemText}>Technical Skills</Text>

            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('Experience')}}>

            <View style={styles.menuItem}>
            <FontAwesome name="group" size={24} color="black" />
            <Text style={styles.menuItemText}>Experience</Text>

            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('Education')}}>

            <View style={styles.menuItem}>
            <Entypo name="trophy" size={24} color="black" />
            <Text style={styles.menuItemText}>Education</Text>

            </View>
        </TouchableOpacity>





            
        </View>
    )
}

export default InvoiceScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width: '90%',
      alignSelf: 'center'
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 35,
        paddingHorizontal: 30,
        marginTop:20,
      },

      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 20,
        
      },
      text:{
        color: '#404040',
        marginLeft: 80,
        fontSize: 20,
        marginTop:20,
        fontWeight:'bold'

      }
  });
