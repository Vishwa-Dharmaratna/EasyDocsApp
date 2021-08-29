import React from 'react';
import { View, Text, Button, StyleSheet,TextInput,ScrollView ,TouchableOpacity} from 'react-native';

import { AuthContextNew } from "../../components/newContext";


const PersonalDetails = ({navigation,route}) => {

  const {value,setValue}=React.useContext(AuthContextNew);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Personal details</Text>

      <ScrollView>
        
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>First Name</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter first name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                           onChangeText={(val)=>setValue({...value,FName:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Last Name</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter last name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,LName:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Job Role</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter job role"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,JobRole:val})}
                        />
                        
                </View>

                
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Email</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter Email"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,Email:val})}
                        />
                        
                </View>

                
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Phone</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter phone number"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,Phone:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Profile</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter your profile details"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,Profile:val})}
                        />
                        
                </View>

                 
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Address</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter address"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,Address:val})}
                        />
                        
                </View>

                <TouchableOpacity style={styles.commandButton}onPress={() => navigation.navigate('CvTemplates')}>
                    <Text style={styles.panelButtonTitle}>
                      Submit
                    </Text>
                </TouchableOpacity>

               
                </ScrollView>
      </View>
    );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
 
    justifyContent: 'center'
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginLeft: 30,
    marginTop: 30,
},
action: {
  flexDirection: 'row',
  marginTop: 30,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5,
  marginLeft: 40,
},
text:{
  color: '#404040',
  marginLeft: 110,
  fontSize: 20,
  marginTop:30,
  fontWeight:'bold'

},
commandButton: {
  padding: 15,
  borderRadius: 150,
  backgroundColor: '#ffa366',
  alignItems: 'center',
  marginTop: 50,
},
panelButtonTitle: {
  fontSize: 17,
  fontWeight: 'bold',
  color: 'white',
},

});