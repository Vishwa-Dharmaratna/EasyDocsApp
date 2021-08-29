import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { AuthContextNew } from "../../components/newContext";




const Experience = ({ navigation }) => {



  const { value, setValue } = React.useContext(AuthContextNew);


 

 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WORKS EXPERIENCE</Text>

      <ScrollView style={styles.backgroundColor1}>
        <View style={styles.backgroundColor}>
          <Text style={styles.text1}>1</Text>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Company
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter company name"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setValue({ ...value, Company1: val })}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Title
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter your title"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setValue({ ...value, CTitle1: val })}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Period
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Period"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setValue({ ...value, CPeriod1: val })}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Description
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter description"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setValue({ ...value, CDescription1: val })}
            />
          </View>
        </View>

        <View style={styles.backgroundColor}>
          <Text style={styles.text1}>2</Text>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Company
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter company name"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setValue({ ...value, Company2: val })}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Title
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter your title"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setValue({ ...value, CTitle2: val })}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Period
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Period"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setValue({ ...value, CPeriod2: val })}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Description
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter description"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setValue({ ...value, CDescription2: val })}
            />
          </View>
        </View>
        
          {/* here */}
          <AddNewField/>
       

        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => navigation.navigate("CvTemplates")}
        >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};



const AddNewField=()=>{

  const { value, setValue } = React.useContext(AuthContextNew);
  const [Company, setCompany] = React.useState("");
  const [CTitle, setCTitle] = React.useState("");
  const [CPeriod, setCPeriod] = React.useState("");
  const [CDescription, setCDescription] = React.useState("");
  const [flag,setFlag] = React.useState(false);
  
  const [index, setIndex] = React.useState("");

  const [alldata, setAlldata] = React.useState({
    Company: "",
    CTitle: "",
    CPeriod: "",
    CDescription: "",
  });


  
  console.log("🚀 ~ file: Experience.js ~ line 294 ~ AddNewField ~ alldata", alldata)

  const [state, setState] = React.useState({
    textInput: [],
    inputData: [],
  });


React.useEffect(() => {
  if( state.inputData.length===1){
    setValue({...value,
     Company3:state.inputData[0].text.Company,
     CTitle3:state.inputData[0].text.CTitle,
     CPeriod3:state.inputData[0].text.CPeriod,
     CDescription3:state.inputData[0].text.CDescription
   })
 }
},[state.inputData.length===1]);

React.useEffect(() => {
  if( state.inputData.length===2){
    setValue({...value,
     Company4:state.inputData[1].text.Company,
     CTitle4:state.inputData[1].text.CTitle,
     CPeriod4:state.inputData[1].text.CPeriod,
     CDescription4:state.inputData[1].text.CDescription
   })
 }
},[state.inputData.length===2]);

React.useEffect(() => {
  if( state.inputData.length===3){
    setValue({...value,
     Company5:state.inputData[2].text.Company,
     CTitle5:state.inputData[2].text.CTitle,
     CPeriod5:state.inputData[2].text.CPeriod,
     CDescription5:state.inputData[2].text.CDescription
   })
 }
},[state.inputData.length===3]);

React.useEffect(() => {
  if( state.inputData.length===4){
    setValue({...value,
     Company5:state.inputData[3].text.Company,
     CTitle5:state.inputData[3].text.CTitle,
     CPeriod5:state.inputData[3].text.CPeriod,
     CDescription5:state.inputData[3].text.CDescription
   })
 }
},[state.inputData.length===4]);





//console.log("🚀 ~ file: Experience.js ~ line 516 ~ AddNewField ~ state.inputData", state.inputData[0].text,state.inputData.length)


  React.useEffect(() => {
    setAlldata({...alldata, 
      Company:Company ,
    CTitle: CTitle,
    CPeriod: CPeriod,
    CDescription: CDescription});
  },[Company,CTitle,CPeriod, CDescription]);


  
  React.useEffect(() => {
    setAlldata({...alldata, 
      Company:Company ,
    CTitle: CTitle,
    CPeriod: CPeriod,
    CDescription: CDescription});
  },[Company,CTitle,CPeriod, CDescription]);

  
  console.log("🚀 ~ file: Experience.js ~ line 317 ~ Sendto ~ alldata", alldata)
 
    
    React.useEffect(() => {
      if(alldata.Company != "" && alldata.CTitle != "" && alldata.CPeriod != "" && alldata.CDescription != ""){addValues(alldata,index)}
      
    },[flag]);
  

  const addTextInput = (index) => {
    setIndex(index)
    let textInput = state.textInput;
    textInput.push(
      <View>
        <View style={styles.backgroundColor}>
          <Text style={styles.text1}></Text>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Company
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter company name"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              
              //onChangeText={(val)=>setCompanyData(val,index)}
              onChangeText={(val) => setCompany(val)}

              //onChangeText={(val)=>setValue({...value,Company1:val})}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Title
          </Text>
          <View style={styles.action}>
            <TextInput
           
              placeholder="Enter your title"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              //onChangeText={(val)=>setCTitleData(val,index)}
              onChangeText={(val) => setCTitle(val)}
              //onChangeText={(val)=>setValue({...value,CTitle1:val})}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Period
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Period"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              //onChangeText={(val)=>setCPeriodData(val,index)}
              onChangeText={(val) => setCPeriod(val)}
              // onChangeText={(val)=>setValue({...value,CPeriod1:val})}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Description
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter description"
              multiline={true}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) =>  setCDescription(val)}
              //onChangeText={(val)=>setValue({...value,CDescription1:val})}
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

  // if(alldata.Company != "" && alldata.CTitle != "" && alldata.CPeriod != "" && alldata.CDescription != ""){
    
  //   addValues(alldata, index);
  // }

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





export default Experience;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    marginLeft: 30,
    marginTop: 30,
  },
  action: {
    flexDirection: "row",
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    marginLeft: 40,
  },
  text: {
    color: "#404040",
    marginLeft: 110,
    fontSize: 20,
    marginTop: 30,
    fontWeight: "bold",
  },
  text1: {
    color: "#404040",
    marginLeft: 30,
    fontSize: 15,
    marginTop: 30,
    fontWeight: "bold",
  },
  commandButton: {
    padding: 15,
    borderRadius: 150,
    backgroundColor: "#ffa366",
    alignItems: "center",
    marginTop: 50,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  backgroundColor: {
    backgroundColor: "#FFFFFF",
    marginTop: 30,
  },
  backgroundColor1: {
    backgroundColor: "#cccccc",
  },
});
