import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Button,Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import jwt_decode from "jwt-decode";





import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfilesScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import CvScreen from './CvScreen';
import LetterScreen from './LetterScreen';
import InvoiceScreen from './InvoiceScreen';
import Invite from '../components/Invite';
import Aboutus from '../components/Aboutus';
import Advertise from '../components/Advertise';
import Creerse from '../components/Creerse';
import Contact from '../components/Contact';
import termsandpolicy from '../components/Termsandpolicy'
import EditProfileScreen from '../components/EditProfileScreen';
import Letter from './LetterScreenDetails/Letter';





const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfilesStack = createStackNavigator();


//const[data,setData]=React.useState(null)

// const setData=(data)=>{
//  let data1=data;
//  return(

//         data1
//  )
// }






const Tab = createMaterialBottomTabNavigator();

const MainTabScreen =({route})=>{
  console.log(route.params.formData);
  //setData(route.params.formData)
  return(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        initialParams={{formData:route.params.formData}}
        component={DeatailsStackScreen}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarColor:'#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contacts"color={color} size={26}  />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilesStackScreen}
        initialParams={{formData:route.params.formData}}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#694fad',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={ExploreScreen}
        initialParams={{formData:route.params.formData}}
        options={{
          tabBarLabel: 'Notification',
          tabBarColor:'#d02860',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
)};

export default MainTabScreen;

const HomeStackScreen=({navigation})=>(
    <HomeStack.Navigator screenOptions={{ 
      headerStyle:{
        backgroundColor:"#009387"
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"   
      }
  
    }} >
      <HomeStack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        title:"",
      
        headerLeft: () => (
          <View style={{marginLeft: 10}}>
         
          <Ionicons 
            name="menu" 
            size={34} 
            color="black" 
            onPress={() => navigation.openDrawer()}
          />
          </View>
        ),

        headerRight: () => (
        <View style={{marginLeft: 10}}>
         
            
        <Ionicons 
          name="search-sharp" 
          size={30} 
          color="black" 
          onPress={() => navigation.openDrawer()}
        />
        </View>
        ),
        
        
  
      }}/>

      <HomeStack.Screen
      name="CvScreen"
      component={CvScreen}
      />

      <HomeStack.Screen 
      name="LetterScreen"
      component={LetterScreen}
      />

      <HomeStack.Screen
      name="InvoiceScreen"
      component={InvoiceScreen}
      />
      <HomeStack.Screen
      name="Letter"
      component={Letter}
      />
      </HomeStack.Navigator>
  );
  
  
  const DeatailsStackScreen=({navigation,route})=>{


    return(

    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#1f65ff"
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
  
    }} >
      <DetailsStack.Screen 
      name="Details" 
      component={DetailsScreen} 
      options={{
      }}
      />

      <DetailsStack.Screen
      name="Aboutus"
      component={Aboutus}
      />

      <DetailsStack.Screen
      name="Contact"
      component={Contact}
      />

    </DetailsStack.Navigator>


    
  )}
  

    
  const ProfilesStackScreen=({navigation,route})=>(
    <ProfilesStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#fff"
      },
      headerTintColor:"#000",
      headerTitleStyle:{
        fontWeight:"bold"
      }
  
    }} >
      <ProfilesStack.Screen 
      
      name="Profiles" 
      component={ProfilesScreen}
      initialParams={{formData:route.params.formData}} 
      options={{

        headerLeft :()=>(
          <View>
            <Ionicons 
            name="menu" 
            size={34} 
            color="black" 
            onPress={() => navigation.openDrawer()}
          />
          </View>

        ),

        headerRight:()=>(

          <View>
            <MaterialCommunityIcons 
            name="account-check" 
            size={30} 
            color="black" 
            onPress={() => navigation.navigate("EditProfile")}
            />
            
          
          </View>
        )
      }}
      />

      <ProfilesStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfilesStack.Navigator>

  )
  
  

  