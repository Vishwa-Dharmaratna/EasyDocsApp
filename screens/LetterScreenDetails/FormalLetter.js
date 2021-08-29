import React from 'react';
import { View, Text, Button, StyleSheet,TextInput,ScrollView ,TouchableOpacity} from 'react-native';

const FormalLetter = ({navigation,route}) => {



    
  const[SenderName,setSenderName]=React.useState("");
  const[SenderAddress,setSenderAddress]=React.useState("");
  const[ReceiverName,setReceiverName]=React.useState("");
  const[ReceiverAddress,setReceiverAddress]=React.useState("");
  const[CloseLetter,setCloseLetter]=React.useState("");
  const[Date,setDate]=React.useState("");
  const[Greetings,setGreetings]=React.useState("");
  const[Subject,setSubject]=React.useState("");
  const[Body,setBody]=React.useState("");



  
  let formData={
    SenderName:SenderName,SenderAddress:SenderAddress,date:Date,ReceiverAddress:ReceiverAddress,ReceiverName:ReceiverName,
    Greetings:Greetings,Subject:Subject,Body:Body,CloseLetter:CloseLetter
  }


    return (
        <View style={styles.container}>
        <Text style={styles.text}>FORMAL LETTER</Text>

        <ScrollView  style={styles.backgroundColor1}>
        <View style={styles.backgroundColor}>
       
        
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Sender Name</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Sender’s Name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setSenderName(val)}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Sender Address</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Sender’s Address"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setSenderAddress(val)}
                        />
                        
                </View>

                
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Date</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Date"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setDate(val)}
                        />
                        
                </View>
                

               
                </View>


                <View style={styles.backgroundColor}>
      
        
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Receiver Name</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Receiver’s Name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setReceiverName(val)}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Receiver Address</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Receiver’s Address"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setReceiverAddress(val)}
                        />
                        
                </View>
                

               
                </View>



                
                <View style={styles.backgroundColor}>
      
        
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Greetings</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Greeting"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setGreetings(val)}
                        />
                        
                </View>


                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Subject</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Subject"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setSubject(val)}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Body</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Body of the Letter"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setBody(val)}
                        />
                        
                </View>
                

               
                </View>
              


                <View style={styles.backgroundColor}>
      
        
      <Text style={[styles.text_footer,{
                  marginTop:35
              }]}>CloseLetter</Text>
              <View style={styles.action}>
                  
                      <TextInput
                          placeholder="Closing the Letter"
                          multiline={true}
                          style={styles.textInput}
                          autoCapitalize="none"
                          onChangeText={(val)=>setCloseLetter(val)}
                      />
                      
              </View>

              

             
              </View>
            
            
              

                
                

                

                 
             

                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('LetterTemplate',{formData})}>
                    <Text style={styles.panelButtonTitle}>
                      Submit
                    </Text>
                </TouchableOpacity>

                
                </ScrollView>
                </View>
    );
};

export default FormalLetter;

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
      marginLeft: 130,
      fontSize: 20,
      marginTop:30,
      fontWeight:'bold'
    
    },
    text1:{
        color: '#404040',
        marginLeft: 30,
        fontSize: 15,
        marginTop:30,
        fontWeight:'bold'
      
      },
    commandButton: {
      padding: 15,
      borderRadius: 150,
      backgroundColor: '#ffa366',
      alignItems: 'center',
      marginTop: 30,
      marginBottom:20,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    backgroundColor:{
        
        backgroundColor:'#FFFFFF',
        marginTop: 30,
    },
    backgroundColor1:{
        
        backgroundColor:'#cccccc',
        
    }
});