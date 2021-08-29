import React from 'react';
import { View, Text, Button, StyleSheet,TextInput,ScrollView ,TouchableOpacity} from 'react-native';


import { AuthContextNew } from "../../components/newContext";

// const MyTechSkill=()=>{
   
//   return(
//     <View>
//     <Text style={[styles.text_footer,{ marginTop:35}]}>
//       Technical Skill 1
//     </Text>
//     <View style={styles.action}>
//          <TextInput
//           placeholder="Ex:HTML/CSS/React"
//           multiline={true}
//           style={styles.textInput}
//           autoCapitalize="none"
//          onChangeText={(val)=>setValue({...value,TSkill1:val})}
//         />
//     </View>
//     </View>
//   )
// }

// function Add(){


//       for(let i=1;i<5;i++){

//         return(
         
//           <MyTechSkill/>
       
          
        
        
//       )
    

//       }
      
   
   
  
// }


const TechnicalSkill = ({navigation}) => {


 const [state,setState]=React.useState({
    textInput : []
 })
  

const addTextInput = (key) => {
   let textInput = state.textInput;
   let index=4+key;
   textInput.push(
    <View  key={key}>
    <Text style={[styles.text_footer,{
      marginTop:35
  }]}>Technical Skill {4+key}</Text>
  <View style={styles.action}>
      
          <TextInput
              key={key}
              placeholder="Ex:HTML/CSS/React"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val)=>setSkillData(val,index)}
          />
          
  </View>
  </View>
  //  <TextInput key={key} />
  );
   setState({ textInput })
 }

 function setSkillData(data,index){
  switch (index) {
    case 4:
      setValue({...value,TSkill4:data})
      break;
    case 5:
      setValue({...value,TSkill5:data})
      break;
    case 6:
      setValue({...value,TSkill6:data})
      break;
   
    
  }
 }


  const[techSkill,setTechSkill]=React.useState()

  const {value,setValue}=React.useContext(AuthContextNew);
  
    return (
        <View style={styles.container}>
        <Text style={styles.text}>TECHNICAL SKILLS</Text>

      <ScrollView>
        
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Technical Skill 1</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Ex:HTML/CSS/React"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,TSkill1:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Technical Skill 2</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Ex:HTML/CSS/React"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,TSkill2:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Technical Skill 3 </Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Ex:HTML/CSS/React"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,TSkill3:val})}
                        />
                        
                </View>

                <View>
              <Button title='+' onPress={() => addTextInput(state.textInput.length)} />
                {state.textInput.map((value, index) => {
         return value
       })}
     </View>

                {/* <Button onPress={() => MyTechSkill} title='Add'/> */}
                  

                
                
               
               
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('CvTemplates')}>
                    <Text style={styles.panelButtonTitle}>
                      Submit
                    </Text>
                </TouchableOpacity>

               
                </ScrollView>
      </View>
    );
};

export default TechnicalSkill;

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
