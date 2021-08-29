import React from 'react';
import { View, Text, Button, StyleSheet,TextInput,ScrollView ,TouchableOpacity} from 'react-native';

const Contact= () => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>CONTACT US</Text>

      <ScrollView >
        <View style={styles.backgroundColor}>
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Email</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter email"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setFullName(val)}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Your Name</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter your name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            //onChangeText={(val)=>updateLastNameEntry(val)}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Massege</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter massege"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            //onChangeText={(val)=>updateLastNameEntry(val)}
                        />
                        
                </View>

                
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Additional Details</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Aditional Details"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            //onChangeText={(val)=>updateLastNameEntry(val)}
                        />
                        
                </View>

                
                </View>
                

                <TouchableOpacity style={styles.button}  onPress={() => alert('Button Clicked!')}>
                    <Text style={styles.panelButtonTitle}>
                      Submit
                    </Text>
                </TouchableOpacity>
                
               
                </ScrollView>
      </View>
    )
}

export default Contact;

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
      backgroundColor: '#4d94ff',
      alignItems: 'center',
      marginTop: 50,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 300,
    elevation: 30,
    backgroundColor: 'black',
    marginTop:30
  },
  backgroundColor:{
    backgroundColor:'#cccccc',
  }
    
  
  });