import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Button,StatusBar,TextInput,TouchableRipple,TouchableOpacity,LinearGradient} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const DetailsScreen=({navigation})=>{
    return(
      // <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      //   <Text>Details Screen</Text>
      //   <Button 
      //   title="Go to Details Screen...again"
      //   onPress={()=> navigation.push("Details")}
      //   />
      //   <Button 
      //   title="Go to Home"
      //   onPress={()=> navigation.navigate("Home")}
      //   />
      //   <Button 
      //   title="Go back"
      //   onPress={()=> navigation.goBack()}
      //   />
      //   <Button 
      //   title="Go to the FirstScreen"
      //   onPress={()=> navigation.popToTop()}
      //   />
      // </View>

      <View style={styles.container}>
      <View style={styles.menuWrapper}>
         
            <TouchableOpacity onPress={()=>navigation.navigate("Contact")}>

            <View style={styles.menuItem}>
            <AntDesign name="circledowno" size={24} color="black" />
            <Text style={styles.menuItemText}>Contact Us</Text>

            </View> 

            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Aboutus")}>

            <View style={styles.menuItem}>
            <AntDesign name="circledowno" size={24} color="black" />
            <Text style={styles.menuItemText}>About Us</Text>

            </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate()}>

            <View style={styles.menuItem}>
            <AntDesign name="circledowno" size={24} color="black" />
            <Text style={styles.menuItemText}>Support</Text>

            </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Creerse")}>

            <View style={styles.menuItem}>
            <AntDesign name="circledowno" size={24} color="black" />
            <Text style={styles.menuItemText}>Careers</Text>

            </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Termsandpolicy")}>

              <View style={styles.menuItem}>
              <AntDesign name="circledowno" size={24} color="black" />
              <Text style={styles.menuItemText}>Terms and Privacy</Text>

              </View>

            </TouchableOpacity>



            <TouchableOpacity onPress={()=>navigation.navigate("Invite")}>

              <View style={styles.menuItem}>
              <AntDesign name="circledowno" size={24} color="black" />
              <Text style={styles.menuItemText}>Advertise</Text>

              </View>

            </TouchableOpacity>
          
        </View>
        </View>
      

    );
  };

  export default DetailsScreen;

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