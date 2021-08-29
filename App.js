import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  ActivityIndicator,
  LogBox,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import MainTabScreen from "./screens/MainTabScreen";
import { DrawerContent } from "./screens/DrawerContent";

import SupportScreen from "./screens/SupportScreen";

import PersonalDetails from "./screens/CvScreenDetails/PersonalDetails";
import Education from "./screens/CvScreenDetails/Education";
import Experience from "./screens/CvScreenDetails/Experience";
import Skill from "./screens/CvScreenDetails/Skill";
import TechnicalSkill from "./screens/CvScreenDetails/TechnicalSkill";

import FormalLetter from "./screens/LetterScreenDetails/FormalLetter";
import BusinessLetter from "./screens/LetterScreenDetails/BusinessLetter";
import InformalLetter from "./screens/LetterScreenDetails/InformalLetter";
import OfficialLetter from "./screens/LetterScreenDetails/OfficialLetter";
import SocialLetter from "./screens/LetterScreenDetails/SocialLetter";
import EmploymentLetter from "./screens/LetterScreenDetails/EmploymentLetter";

import SettingsScreen from "./screens/SettingsScreen";
//import BookmarkScreen from './screens/BookmarkScreen';
import LetterTemplate from "./screens/Templates/LetterTemplate";
import CvTemplates from "./screens/Templates/CvTemplates";
import jwt_decode from "jwt-decode";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";

import { AuthContext } from "./components/context";
import { AuthContextNew } from "./components/newContext";

import RootStackScreen from "./screens/RootStackScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";

LogBox.ignoreLogs(["Setting a timer"]);

const firebaseConfig = {
  apiKey: "AIzaSyDtmlujFtfY08F2748iVAiC6tUzcf8C-UY",
  authDomain: "dmsproject-3878f.firebaseapp.com",
  projectId: "dmsproject-3878f",
  storageBucket: "dmsproject-3878f.appspot.com",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {}

function setcusData(userId, pushToken) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      UserId: userId,
      pushToken: pushToken,
      paymentD: 0,
      services: "null",
    });
}

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

const Drawer = createDrawerNavigator();

export default function App() {
  const [userId, setUserId] = React.useState(null);

  let pushToken;

  const myFunctions = () => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          throw new Error("permission not granted");
        }
      })
      .then(() => {
        // console.log("getting token");
        return Notifications.getExpoPushTokenAsync();
      })
      .then((response) => {
        const token = response.data;
        console.log("token: " + token);
        pushToken = token;
      })
      .catch((err) => {
        return null;
      });
  };

  React.useEffect(() => {
    let cancel = false;
    myFunctions();
    return () => {
      // This is the cleanup function
      cancel = true;
    };
  }, []);

  React.useEffect(() => {
    let cancel1 = false;
    const backgroundSubcription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // console.log(response);
      });

    const foregroundsubscription =
      Notifications.addNotificationReceivedListener((notification) => {
        // console.log(notification);
      });
    return () => {
      foregroundsubscription.remove();
      backgroundSubcription.remove();
      cancel1 = true;
    };
  }, []);

  const [value, setValue] = React.useState({

  ////////////////////////PersonalDetails//////////////////////////////
    FName: "",
    LName: "",
    JobRole: "",
    Email: "",
    Phone: "",
    Profile: "",
    Address: "",
//////////////////////////////Project///////////////////////////////////////////
    ProjectName1: "",
    ProjectName2: "",
    ProjectName3: "",
    ProjectName4: "",
    ProjectName5: "",
    ProjectName6: "",

    PDescription1: "",
    PDescription2: "",
    PDescription3: "",
    PDescription4: "",
    PDescription5: "",
    PDescription6: "",
///////////////////////////////////TechSkill///////////////////////////////////
    TSkill1:'',
    TSkill2:'',
    TSkill3:'',
    TSkill4:'',
    TSkill5:'',
    TSkill6:'',
/////////////////////////////////WorkExperience/////////////////////////////////
    Company1:'',
    Company2:'',
    Company3:'',
    Company4:'',
    Company5:'',
    Company6:'',

    CTitle1:'',
    CTitle2:'',
    CTitle3:'',
    CTitle4:'',
    CTitle5:'',
    CTitle6:'',

    CPeriod1:'',
    CPeriod2:'',
    CPeriod3:'',
    CPeriod4:'',
    CPeriod5:'',
    CPeriod6:'',

    CDescription1:'',
    CDescription2:'',
    CDescription3:'',
    CDescription4:'',
    CDescription5:'',
    CDescription6:'',
    /////////////////////////EducationBackground///////////////////////////////
    Institute1:'',
    Institute2:'',
    Institute3:'',
    Institute4:'',
    Institute5:'',
    Institute6:'',

    ITitle1:'',
    ITitle2:'',
    ITitle3:'',
    ITitle4:'',
    ITitle5:'',
    ITitle6:'',

    IPeriod1:'',
    IPeriod2:'',
    IPeriod3:'',
    IPeriod4:'',
    IPeriod5:'',
    IPeriod6:'',
    
    IDescription1:'',
    IDescription2:'',
    IDescription3:'',
    IDescription4:'',
    IDescription5:'',
    IDescription6:'',

   /////////////////////////////////////////////////////////////////////////


  });
  console.log("🚀 ~ file: App.js ~ line 185 ~ App ~ value", value)

 

  const [formData, setFormData] = React.useState(null);

  //const [isLoading,setIsLoading]=React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (condition, token, jsonToken) => {
        setUserId(token);

        // setcusData(userId, pushToken)

        //setFormData(token);
        setUserToken(jsonToken);
        //setIsLoading(false);
        let userToken;
        userToken = null;

        if (condition == true) {
          userToken = "test";
          console.log(token, pushToken);
          setcusData(token, pushToken);

          //var decoded = jwt_decode(token);
          //console.log(decoded)

          try {
            await AsyncStorage.setItem("userToken", userToken);
          } catch (e) {
            console.log(e);
          }
        }
        //console.log('user token:',userToken);
        dispatch({ type: "LOGIN", token: userToken });
      },
      signOut: async () => {
        //setUserToken(null);
        //setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        //setUserToken('fgkj');
        //setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      //setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      //console.log('user token:',userToken);
      dispatch({ type: "REGISTER", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <AuthContextNew.Provider value={{value,setValue}}>

    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen
              name="HomeDrawer"
              component={MainTabScreen}
              initialParams={{ formData: userToken }}
            />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            {/*<Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />*/}
            <Drawer.Screen name="LetterTemplate" component={LetterTemplate} />
            <Drawer.Screen name="CvTemplates" component={CvTemplates} />

            <Drawer.Screen name="PersonalDetails" component={PersonalDetails} />
            <Drawer.Screen name="Skill" component={Skill} />
            <Drawer.Screen name="Education" component={Education} />
            <Drawer.Screen name="Experience" component={Experience} />
            <Drawer.Screen name="TechnicalSkill" component={TechnicalSkill} />

            <Drawer.Screen name="FormalLetter" component={FormalLetter} />
            <Drawer.Screen name="BusinessLetter" component={BusinessLetter} />
            <Drawer.Screen name="InformalLetter" component={InformalLetter} />
            <Drawer.Screen name="OfficialLetter" component={OfficialLetter} />
            <Drawer.Screen
              name="EmploymentLetter"
              component={EmploymentLetter}
            />
            <Drawer.Screen name="SocialLetter" component={SocialLetter} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
    </AuthContextNew.Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
