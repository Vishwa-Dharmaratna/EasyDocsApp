import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Button,Image, TouchableOpacity} from 'react-native';

import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';




const HomeScreen=({navigation})=>{
    return(
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
       <Text style={styles.text_header}>EasyDocs!!</Text>
        {/*<Button 
        title="Go to Details Screen"
        onPress={()=> navigation.navigate("Details")}
        />*/}


        <View style={styles.sliderContainer}>
        <Swiper autoplay height={200}  >
        
          <View style={styles.slide}>
            <TouchableOpacity>
            <Image
             source={require('../assets/banners/banner9.jpg')}
             resizeMode="cover"
             style={styles.sliderImage}
            /> 
            </TouchableOpacity>
            </View>
            
            <View style={styles.slide}>
            <TouchableOpacity  onPress={()=>{navigation.navigate('Letter')}}>
            <Image
             source={require('../assets/banners/banner5.jpg')}
             resizeMode="cover"
             style={styles.sliderImage}
            />
            </TouchableOpacity>
            </View>

            <View style={styles.slide}>
              <TouchableOpacity>
            <Image
             source={require('../assets/banners/banner10.jpg')}
             resizeMode="cover"
             style={styles.sliderImage}
            />
            </TouchableOpacity>
            </View>


            <View style={styles.slide}>
              <TouchableOpacity onPress={()=>{navigation.navigate('InvoiceScreen')}}>
            <Image
             source={require('../assets/banners/banner6.jpg')}
             resizeMode="cover"
             style={styles.sliderImage}
            />
            </TouchableOpacity>
            </View>
        </Swiper>
        </View>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn} onPress={()=> navigation.navigate("CvScreen")}>

          <View style={styles.categoryIcon}>
            
          <Ionicons name="file-tray-full" size={35} color="green" />
          </View>
          <Text style={styles.categoryBtnTxt}>CV 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate("LetterScreen")}>
          

          <View style={styles.categoryIcon}>
          

          <Ionicons name="file-tray-full" size={35} color="green" />
          
          </View>
          <Text style={styles.categoryBtnTxt}>CV 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate("InvoiceScreen")}>

          <View style={styles.categoryIcon}>
            
          <Ionicons name="file-tray-full" size={35} color="green" />
          </View>
          <Text style={styles.categoryBtnTxt}>CV 3</Text>
        </TouchableOpacity>
         
          
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate("Letter")}>

          <View style={styles.categoryIcon}>
            
          <Ionicons name="file-tray-full" size={35} color="green" />
          </View>
          <Text style={styles.categoryBtnTxt}>Letter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>

          <View style={styles.categoryIcon}>
          <Ionicons name="file-tray-full" size={35} color="green" />
          </View>
          <Text style={styles.categoryBtnTxt}>Letter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>

          <View style={styles.categoryIcon}>
          <Ionicons name="file-tray-full" size={35} color="green" />
          </View>
          <Text style={styles.categoryBtnTxt}>Letter</Text>
        </TouchableOpacity>
         
          
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>

          <View style={styles.categoryIcon}>
          <Ionicons name="file-tray-full" size={35} color="green" />
          </View>
          <Text style={styles.categoryBtnTxt}>Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>

          <View style={styles.categoryIcon}>
          <Ionicons name="file-tray-full" size={35} color="green" />
          </View>
          <Text style={styles.categoryBtnTxt}>Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>

          <View style={styles.categoryIcon}>
          <Ionicons name="file-tray-full" size={35} color="green" />
          </View>
          <Text style={styles.categoryBtnTxt}>Invoice</Text>
        </TouchableOpacity>
         
          
        </View>
        
      </View>
    );
  };
  
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#fdeae7' /* '#FF6347' */,
      borderRadius: 50,
      
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 5,
      color: '#de4f35',
    },
    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 100,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
    },
    text_header: {
      color: '#444',
     // fontWeight: 'bold',
      fontSize: 30
  },
  });