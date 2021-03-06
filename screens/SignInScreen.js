import React from 'react';
import {View,Text,Button,StyleSheet,Dimensions,TouchableOpacity,Platform,TextInput,StatusBar} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import jwt_decode from "jwt-decode";
import axios from 'axios';



import {AuthContext} from '../components/context'



const SignInScreen=({navigation})=>{

    const[token,setToken]=React.useState('x');
    const[masseage,setMasseage]=React.useState('');

    const[data,setData]=React.useState({
        username:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true,
        isValidUser:true,
        isValidPassword:true
    });

    const {signIn} =React.useContext(AuthContext);

    const textInputChange=(val)=>{
        if(val.trim().length>=4){
            setData({
                ...data,
                username:val,
                check_textInputChange:true,
                isValidUser:true

            });
        }else{

            setData({
                ...data,
                username:val,
                check_textInputChange:false,
                isValidUser:false
            });
            

        }
    }
    const handlePasswordChange=(val)=>{
        if(val.trim().length>=8){
        setData({
            ...data,
            password:val,
            isValidPassword:true
        });
        }  else{

            setData({
                ...data,
                password:val,
                isValidPassword:false
            });

        }
    }

    const handleValidUser=(val)=>{

        if(val.trim().length >=4){
            setData({
                ...data,
                isValidUser:true
            })
        }else{
            setData({
                ...data,
                isValidUser:false
            });
        }

    }

    const updateSecureTextEntry=()=>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        });
    }
console.log(data)
    const loginHandle=(username,password)=>{

        let formData={
            email:username,
            password:password
        }

        console.log("formData",formData)

        axios
            .post('http://vast-atoll-96781.herokuapp.com/users/login',formData)
            .then(
                function (response) {
                    var decoded = jwt_decode(response.data.token);
                    signIn(true, decoded.userId,response.data.token);
                   
                  }
            
    
                
    
            )
            .catch(error => {
                console.log(error);
                alert('enter valid user name and password');

            });

            
           


       // signIn(username,password);

    }
    return(
        <View style ={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>H! EasyDocs</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
                
                >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                        />
                        <TextInput
                            placeholder="Your Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>textInputChange(val)}
                            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                        />
                        {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                        </Animatable.View>
                        : null}
                </View>

                {data.isValidUser ? null:
                 <Animatable.View animation='fadeInLeft' duration={500}>
                 <Text style={styles.errorMsg}>User name must be 4 characters long</Text>
                 </Animatable.View>
                }

               


                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            secureTextEntry={!data.secureTextEntry ? true:false} 
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                        onPress={updateSecureTextEntry}
                        >

                        {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                        </TouchableOpacity>
                </View>

                {data.isValidPassword ? null:
                <Animatable.View animation='fadeInLeft' duration={500}>
                <Text style={styles.errorMsg}>Password name must be 8 characters long</Text>
                </Animatable.View>
                }

                
                


                <TouchableOpacity>
                    <Text style={{color:"#009387",marginTop:15}}>Forgrt Password</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>{loginHandle(data.username,data.password)}}
                    >

                    <LinearGradient
                        colors={['#08d4c4','#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign,{
                            color:'#fff'
                        }]}>Sign In</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('SignUpScreen')}
                        style={[styles.signIn,{
                            borderColor:'#009387',
                            borderWidth:1,
                            marginTop:15
                            
                        }]}
                    >
                        <Text style={[styles.textSign,{
                            color:'#009387'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>

        </View>

    );
};



export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#004d3d'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });