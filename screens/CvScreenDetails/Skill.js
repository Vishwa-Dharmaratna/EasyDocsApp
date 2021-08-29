import React from 'react';
import { View, Text, Button, StyleSheet,TextInput,ScrollView ,TouchableOpacity} from 'react-native';

import { AuthContextNew } from "../../components/newContext";



const Skill = ({navigation,route}) => {
  
  const {value,setValue}=React.useContext(AuthContextNew);

    return (
        <View style={styles.container}>
        <Text style={styles.text}>PROJECT</Text>

        <ScrollView  style={styles.backgroundColor1}>
        <View style={styles.backgroundColor}>
        <Text style={styles.text1}>Project</Text>
        
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Project Name</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter project name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,ProjectName1:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Project Description</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter project description"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,PDescription1:val})}
                        />
                        
                </View>
                

               
                </View>


                <View style={styles.backgroundColor}>
        <Text style={styles.text1}>Project </Text>
        
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Project Name</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter project name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,ProjectName2:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Project Description</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter project description"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,PDescription2:val})}
                        />
                        
                </View>
                

               
                </View>
              

                
                
                  <AddNewField/>
                

                 
             

                <TouchableOpacity style={styles.commandButton}  onPress={() => navigation.navigate('CvTemplates')}>
                    <Text style={styles.panelButtonTitle}>
                      Submit
                    </Text>
                </TouchableOpacity>

                
                </ScrollView>
                </View>
    );
};



const AddNewField=()=>{

  const { value, setValue } = React.useContext(AuthContextNew);
  const [ProjectName, setProjectName] = React.useState("");
  const [ PDescription, setPDescription] = React.useState("");
  
  const [flag,setFlag] = React.useState(false);
  
  const [index, setIndex] = React.useState("");

  const [alldata, setAlldata] = React.useState({
    ProjectName: "",
    PDescription: "",
   
  });

  const [state, setState] = React.useState({
    textInput: [],
    inputData: [],
  });

  React.useEffect(() => {
    if( state.inputData.length===1){
      setValue({...value,
        ProjectName3:state.inputData[0].text.ProjectName,
        PDescription3:state.inputData[0].text.PDescription,
       
     })
   }
  },[state.inputData.length===1]);


  React.useEffect(() => {
    if( state.inputData.length===2){
      setValue({...value,
        ProjectName4:state.inputData[1].text.ProjectName,
        PDescription4:state.inputData[1].text.PDescription,
       
     })
   }
  },[state.inputData.length===2]);


  React.useEffect(() => {
    if( state.inputData.length===3){
      setValue({...value,
        ProjectName5:state.inputData[2].text.ProjectName,
        PDescription5:state.inputData[2].text.PDescription,
       
     })
   }
  },[state.inputData.length===3]);

  
  React.useEffect(() => {
    if( state.inputData.length===4){
      setValue({...value,
        ProjectName6:state.inputData[3].text.ProjectName,
        PDescription6:state.inputData[3].text.PDescription,
       
     })
   }
  },[state.inputData.length===6]);

  React.useEffect(() => {
    setAlldata({...alldata, 
      ProjectName:ProjectName ,
      PDescription: PDescription,
    });
  },[ProjectName,PDescription]);

  React.useEffect(() => {
    setAlldata({...alldata, 
      ProjectName:ProjectName ,
      PDescription: PDescription,
    });
  },[ProjectName,PDescription]);

  React.useEffect(() => {
    if(alldata.ProjectName != "" && alldata.PDescription != "" ){addValues(alldata,index)}
    
  },[flag]);

  const addTextInput = (index) => {
    setIndex(index)
    let textInput = state.textInput;
    textInput.push(
      <View>

<View style={styles.backgroundColor}>
        <Text style={styles.text1}>Project</Text>
        
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Project Name</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter project name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) =>  setProjectName(val)}
                            //onChangeText={(val)=>setValue({...value,ProjectName1:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Project Description</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter project description"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) =>  setPDescription(val)}
                            //onChangeText={(val)=>setValue({...value,PDescription1:val})}
                        />
                        
                </View>
                
                <Button style={styles.button}
                title="Done" onPress={() =>setFlag(!flag)}/>
               
               
                </View>

        
      </View>

      //  <TextInput key={key} />
    );

    setState({ ...state, textInput });
    
  };

  
  //function to remove TextInput dynamically
  const removeTextInput = () => {
    let textInput = state.textInput;
    let inputData = state.inputData;
    textInput.pop();
    inputData.pop();
    setState({ ...state, textInput, inputData });
  };

  //function to add text from TextInputs into single array
  const addValues = (text, index) => {
    let dataArray = state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      setState({
        ...state,
        inputData: dataArray,
      });
    } else {
      dataArray.push({ text: text, index: index });
      setState({
        ...state,
        inputData: dataArray,
      });
    }
    
  };

  //function to add text from TextInputs into single array
  const addValues1 = (text, index) => {
    let dataArray = state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      setState({
        ...state,
        inputData: dataArray,
      });
    } else {
      dataArray.push({ text: text, index: index });
      setState({
        ...state,
        inputData: dataArray,
      });
    }
  };


  return (
    <View >
    <Button 
      title="Add"
      onPress={() => addTextInput(state.textInput.length)}
    />
    <Button
    title="Remove" onPress={() => removeTextInput()} />
    {state.textInput.map((value) => {
      return value;
    })}
    
  </View>
  )





}

export default Skill;

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
      marginTop: 50,
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
        
    },
    button:{
      marginTop:5,
      //marginLeft:30
    },
    button1:{
      marginTop:5,
      //marginLeft:30
    }
});
