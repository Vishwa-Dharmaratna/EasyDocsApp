import React from 'react';
import { View, Text, Button, StyleSheet,TextInput,ScrollView ,TouchableOpacity} from 'react-native';

import { AuthContextNew } from "../../components/newContext";

const Education = ({navigation}) => {

    const {value,setValue}=React.useContext(AuthContextNew);

    return (
        <View style={styles.container}>
        <Text style={styles.text}>EDUCATION BACKGROUND</Text>

        <ScrollView  style={styles.backgroundColor1}>
        <View style={styles.backgroundColor}>
        <Text style={styles.text1}>1</Text>
        
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Institute</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter Institute name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                             onChangeText={(val)=>setValue({...value,Institute1:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Title</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter your title"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,ITitle1:val})}
                        />
                        
                </View>
                
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Period</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter Period"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,IPeriod1:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Description</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter description"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,IDescription1:val})}
                        />
                        
                </View>

               
                </View>



                <View style={styles.backgroundColor}>
        <Text style={styles.text1}>2</Text>
        
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Institute</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter Institute name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,Institute2:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Title</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter your title"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,ITitle2:val})}
                        />
                        
                </View>
                
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Period</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter Period"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,IPeriod3:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Description</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter description"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val)=>setValue({...value,IDescription2:val})}
                        />
                        
                </View>

               
                </View>




                <AddNewField/>


                 
             

                <TouchableOpacity style={styles.commandButton}onPress={() => navigation.navigate('CvTemplates')}>
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
            const [Institute, setInstitute] = React.useState("");
            const [ITitle, setITitle] = React.useState("");
            const [IPeriod, setIPeriod] = React.useState("");
            const [IDescription, setIDescription] = React.useState("");

            const [flag,setFlag] = React.useState(false);

            const [index, setIndex] = React.useState("");

            const [alldata, setAlldata] = React.useState({
                Institute: "",
                ITitle: "",
                IPeriod: "",
                IDescription: "",
              });
            console.log("🚀 ~ file: Education.js ~ line 189 ~ AddNewField ~ alldata", alldata)
           

              const [state, setState] = React.useState({
                textInput: [],
                inputData: [],
              });


              React.useEffect(() => {
                if( state.inputData.length===1){
                  setValue({...value,
                    Institute3:state.inputData[0].text.Institute,
                    ITitle3:state.inputData[0].text.ITitle,
                    IPeriod3:state.inputData[0].text.IPeriod,
                    IDescription3:state.inputData[0].text.IDescription
                 })
               }
              },[state.inputData.length===1]);

              
              React.useEffect(() => {
                if( state.inputData.length===2){
                  setValue({...value,
                    Institute4:state.inputData[1].text.Institute,
                    ITitle4:state.inputData[1].text.ITitle,
                    IPeriod4:state.inputData[1].text.IPeriod,
                    IDescription4:state.inputData[1].text.IDescription
                 })
               }
              },[state.inputData.length===2]);

              
              React.useEffect(() => {
                if( state.inputData.length===3){
                  setValue({...value,
                    Institute3:state.inputData[2].text.Institute,
                    ITitle3:state.inputData[2].text.ITitle,
                    IPeriod3:state.inputData[2].text.IPeriod,
                    IDescription3:state.inputData[2].text.IDescription
                 })
               }
              },[state.inputData.length===3]);

              
              React.useEffect(() => {
                if( state.inputData.length===4){
                  setValue({...value,
                    Institute3:state.inputData[3].text.Institute,
                    ITitle3:state.inputData[3].text.ITitle,
                    IPeriod3:state.inputData[3].text.IPeriod,
                    IDescription3:state.inputData[3].text.IDescription
                 })
               }
              },[state.inputData.length===4]);

              React.useEffect(() => {
                setAlldata({...alldata, 
                    Institute:Institute ,
                    ITitle: ITitle,
                    IPeriod: IPeriod,
                    IDescription: IDescription});
              },[Institute,ITitle,IPeriod, IDescription]);

              React.useEffect(() => {
                setAlldata({...alldata, 
                    Institute:Institute ,
                    ITitle: ITitle,
                    IPeriod: IPeriod,
                    IDescription: IDescription});
              },[Institute,ITitle,IPeriod, IDescription]);

               
    React.useEffect(() => {
        if(alldata.Institute != "" && alldata.ITitle != "" && alldata.IPeriod != "" && alldata.IDescription != ""){addValues(alldata,index)}
        
      },[flag]);


      const addTextInput = (index) => {
        setIndex(index)
        let textInput = state.textInput;
        textInput.push(
          <View>
             <View style={styles.backgroundColor}>
        <Text style={styles.text1}>1</Text>
        
        <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Institute</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter Institute name"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setInstitute(val)}
                            // onChangeText={(val)=>setValue({...value,Institute1:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Title</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter your title"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setITitle(val)}
                            //onChangeText={(val)=>setValue({...value,ITitle1:val})}
                        />
                        
                </View>
                
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Period</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter Period"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setIPeriod(val)}
                            //onChangeText={(val)=>setValue({...value,IPeriod1:val})}
                        />
                        
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Description</Text>
                <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Enter description"
                            multiline={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setIDescription(val)}
                            //onChangeText={(val)=>setValue({...value,IDescription1:val})}
                        />
                        
                </View>

                <Button title="Done" onPress={() =>setFlag(!flag)}/>
               
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

        return (
            <View>
            <Button
              title="Add"
              onPress={() => addTextInput(state.textInput.length)}
            />
            <Button title="Remove" onPress={() => removeTextInput()} />
            {state.textInput.map((value) => {
              return value;
            })}
            {/* <Button title='+' onPress={() => addTextInput(state.textInput.length)} />
                  {state.textInput.map((value, index) => {
                  return value
                  })} */}
          </View>
          )

            
            
                    
                    

                    

        
}

export default Education;

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
      marginLeft: 80,
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
        
    }
});
