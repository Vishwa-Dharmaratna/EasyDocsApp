import React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  
} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import jwt_decode from "jwt-decode";



const ProfileScreen = ({route,navigation}) => {

  let decode =jwt_decode(route.params.formData)

    console.log("profile screen",decode.email);
    return (
      
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image size={90} source={require('../assets/profileImage.png')} />
          <View style={{marginLeft:20}}>
            <Title style={[styles.title,{
              marginBottom:5,
              marginTop:15
            }]}>{decode.firstName+' '+decode.lastName}</Title>
            
          </View>
          </View>

        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
          <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          
          <Text style={{color:"#777777", marginLeft: 20}}>{decode.email}</Text>


          </View>

          <View style={styles.row}>
          <AntDesign name="phone" size={24} color="black" />
          <Text style={{color:"#777777", marginLeft: 20}}>+94-0000000000</Text>


          </View>

          <View style={styles.row}>
          <Ionicons name="ios-location-outline" size={24} color="black" />
          <Text style={{color:"#777777", marginLeft: 20}}>Colombo,Sri lanka</Text>


          </View>

          

        </View>

        <View style={styles.menuWrapper}>
         
            <TouchableRipple onPress={() => {navigation.navigate('SupportScreen')}}
>

            <View style={styles.menuItem}>
            <MaterialIcons name="payment" size={24} color="black" />
            <Text style={styles.menuItemText}>Payment</Text>

            </View>

            </TouchableRipple>

            <TouchableRipple onPress={()=>{}}>

            <View style={styles.menuItem}>
            <MaterialIcons name="favorite-border" size={24} color="black" />
            <Text style={styles.menuItemText}>My fevorites</Text>

            </View>

            </TouchableRipple>

            <TouchableRipple onPress={()=>{}}>

            <View style={styles.menuItem}>
            <MaterialIcons name="contact-support" size={24} color="black" />
            <Text style={styles.menuItemText}>Support</Text>

            </View>

            </TouchableRipple>

            <TouchableRipple onPress={()=>{}}>

            <View style={styles.menuItem}>
            <Ionicons name="settings" size={24} color="black" />
            <Text style={styles.menuItemText}>Settings</Text>

            </View>

            </TouchableRipple>
          
        </View>

      </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
  },
});