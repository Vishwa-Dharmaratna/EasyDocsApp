{/*import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';






const CvScreen= ({navigation}) => {
    return (
        <View>
            <Text>Cv Screen</Text>
            <Button
                title="click here"
                onPress={()=>navigation.navigate("CvTemplates")}
            />
        </View>
    )
}

export default CvScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width: '90%',
      alignSelf: 'center'
    },
  });
*/}


import React from 'react';
import {View,StyleSheet, TextInput,Text,ScrollView,Button,TouchableOpacity} from "react-native";

const LetterScreen= ({navigation,route}) => {

 {/* const[SenderAddress,setSenderAddress]=React.useState("");
  
  const[ReceiverAddress,setReceiverAddress]=React.useState("");
  const[CloseLetter,setCloseLetter]=React.useState("");
  const[Date,setDate]=React.useState("");
  const[Greetings,setGreetings]=React.useState("");
  const[Subject,setSubject]=React.useState("");
  const[Body,setBody]=React.useState("");
  
  let formData={
    SenderName:SenderAddress,date:Date,ReceiverAddress:ReceiverAddress,
    Greetings:Greetings,Subject:Subject,Body:Body,CloseLetter:CloseLetter
  }*/}

  //console.log("Sri lanka",formData)

  const [FullName,setFullName]=React.useState('');

  const [Job,setJob]=React.useState('');

  const [Skill1,setSkill1]=React.useState('');
  const [Skill1Description,setSkill1Description]=React.useState('');
  const [Skill2,setSkill2]=React.useState('');
  const [Skill2Description,setSkill2Description]=React.useState('');
  const [Skill3,setSkill3]=React.useState('');
  const [Skill3Description,setSkill3Description]=React.useState('');
  

  const [Talent1,setTalent1]=React.useState('');
  const [Talent2,setTalent2]=React.useState('');
  const [Talent3,setTalent3]=React.useState('');
  const [Talent4,setTalent4]=React.useState('');
  const [Talent5,setTalent5]=React.useState('');
  const [Talent6,setTalent6]=React.useState('');
  
  const [Company1,setCompany1]=React.useState('');
  const [Position1,setPosition1]=React.useState('');
  const [Year1,setYear1]=React.useState('');

  const [Company2,setCompany2]=React.useState('');
  const [Position2,setPosition2]=React.useState('');
  const [Year2,setYear2]=React.useState('');

  const [Company3,setCompany3]=React.useState('');
  const [Position3,setPosition3]=React.useState('');
  const [Year3,setYear3]=React.useState('');

  const [Company4,setCompany4]=React.useState('');
  const [Position4,setPosition4]=React.useState('');
  const [Year4,setYear4]=React.useState('');

  const [University,setUniversity]=React.useState('');
  const [Cource,setCource]=React.useState('');
  const [GPA,setGPA]=React.useState('');

  let formData={
    FullName:FullName,Job:Job,Skill1:Skill1,Skill1Description:Skill1Description,Skill2:Skill2,Skill2Description:Skill2Description,
    Skill3:Skill3,Skill3Description:Skill3Description,Talent1:Talent1,Talent2:Talent2,Talent3:Talent3,Talent4:Talent4,
    Talent5:Talent5,Talent6:Talent6,Company1:Company1,Position1:Position1,Year1:Year1,Company2:Company2,Position2:Position2,Year2:Year2,
    Company3:Company3,Position3,Year3:Year3,Company4:Company4,Position4:Position4,Year4:Year4,University:University,Cource:Cource,
    gpa:GPA
  }




    return (
        <View style={styles.container}>
          <ScrollView>
          <View style={{margin:20}}>
          
          <Text style={styles.letter}>CV Template</Text>

          
        <Text>FULL NAME</Text>
          <TextInput

            placeholder="Full Name"
            dataDetector="FullName"
            multiline={true}
            onChangeText={(val)=>setFullName(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>JOB</Text>

          <TextInput

            placeholder="Job"
            dataDetector="Job"
            multiline={true}
           onChangeText={(val)=>setJob(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

        <Text>SKILL 1</Text>

          
          <TextInput

            placeholder="Skill1"
            
            multiline={true}
           onChangeText={(val)=>setSkill1(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>


        
          
          <TextInput

            placeholder="Skill1 Description"
            dataDetector="Skill1Description"
            multiline={true}
           onChangeText={(val)=>setSkill1Description(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>SKILL 2</Text>


          <TextInput

            placeholder="Skill2"
            dataDetector="Skill2"
            multiline={true}
           onChangeText={(val)=>setSkill2(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>



          
          <TextInput

            placeholder="Skill2 Description"
            dataDetector="Skill2Description"
            multiline={true}
            onChangeText={(val)=>setSkill2Description(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

        <Text>SKILL 3</Text>


          <TextInput

            placeholder="Skill3"
            dataDetector="Skill3"
            multiline={true}
           onChangeText={(val)=>setSkill3(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>



          
          <TextInput

            placeholder="Skill3 Description"
            dataDetector="Skill3Description"
            multiline={true}
            onChangeText={(val)=>setSkill3Description(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>TECHNICAL TALENTS 1</Text>


           <TextInput

            placeholder="Technical Talent"
            dataDetector="talent1"
            multiline={true}
            onChangeText={(val)=>setTalent1(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>TECHNICAL TALENTS 2</Text>

           <TextInput

            placeholder="Technical Talent"
            dataDetector="talent2"
            multiline={true}
            onChangeText={(val)=>setTalent2(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>TECHNICAL TALENTS 3</Text>


          <TextInput

            placeholder="Technical Talent"
            dataDetector="talent3"
            multiline={true}
            onChangeText={(val)=>setTalent3(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>TECHNICAL TALENTS 4</Text>


          <TextInput

            placeholder="Technical Talent"
            dataDetector="talent4"
            multiline={true}
            onChangeText={(val)=>setTalent4(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>
        
          <Text>TECHNICAL TALENTS 5</Text>

          <TextInput

            placeholder="Technical Talent"
            dataDetector="talent5"
            multiline={true}
            onChangeText={(val)=>setTalent5(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>TECHNICAL TALENTS 6</Text>


          <TextInput

            placeholder="Technical Talent"
            dataDetector="talent6"
            multiline={true}
            onChangeText={(val)=>setTalent6(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>WORKING EXPERIENCE</Text>
          <Text>COMPANY 1</Text>


          
          <TextInput

            placeholder="Company"
            dataDetector="Company1"
            multiline={true}
            onChangeText={(val)=>setCompany1(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          
          <TextInput

            placeholder="Company Position"
            dataDetector="Position1"
            multiline={true}
            onChangeText={(val)=>setPosition1(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <TextInput

            placeholder="Year"
            dataDetector="Year1"
            multiline={true}
            onChangeText={(val)=>setYear1(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

        <Text>COMPANY 2</Text>

           <TextInput

            placeholder="Company"
            dataDetector="Company2"
            multiline={true}
            onChangeText={(val)=>setCompany2(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          
          <TextInput

            placeholder="Company Position"
            dataDetector="Position2"
            multiline={true}
            onChangeText={(val)=>setPosition2(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>


          <TextInput

            placeholder="Year"
            dataDetector="Year2"
            multiline={true}
            onChangeText={(val)=>setYear2(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>COMPANY 3</Text>

           <TextInput

            placeholder="Company"
            dataDetector="Company3"
            multiline={true}
            onChangeText={(val)=>setCompany3(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          
          <TextInput

            placeholder="Company Position"
            dataDetector="Position3"
            multiline={true}
            onChangeText={(val)=>setPosition3(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <TextInput

            placeholder="Year"
            dataDetector="Year3"
            multiline={true}
            onChangeText={(val)=>setYear3(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>COMPANY 4</Text>


           <TextInput

            placeholder="Company"
            dataDetector="Company4"
            multiline={true}
            onChangeText={(val)=>setCompany4(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          
          <TextInput

            placeholder="Company Position"
            dataDetector="Position4"
            multiline={true}
            onChangeText={(val)=>setPosition4(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <TextInput

            placeholder="Year"
            dataDetector="Year4"
            multiline={true}
            onChangeText={(val)=>setYear4(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

          <Text>EDUCATION</Text>

             <TextInput

            placeholder="University"
            dataDetector="University"
            multiline={true}
            onChangeText={(val)=>setUniversity(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

             <TextInput

            placeholder="Cource"
            dataDetector="Cource"
            multiline={true}
            onChangeText={(val)=>setCource(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>

             <TextInput

            placeholder="GPA"
            dataDetector="GPA"
            multiline={true}
            onChangeText={(val)=>setGPA(val)}
            numberOfLines={3}
            require={true}
            style={styles.senderAddress}>

          </TextInput>




          <TouchableOpacity style={styles.commandButton}  onPress={() => navigation.navigate('CvTemplates',{formData})}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
    
          
    
          {/*<Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />*/}

        </View>
        </ScrollView>
          
        </View>
        
      );
    }
export default LetterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    letter: {
      
      color: "#121212",
      fontSize: 23,
      marginTop: 5,
      marginLeft: 66
    },
    senderAddress: {
     
      color: "#121212",
      height: 70,
      width: 320,
      textAlign: "left",
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft:20
    },
    date: {
      
      color: "#121212",
      height: 45,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    placeholder: {
      
      color: "#121212",
      height: 70,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    greetings: {
      
      color: "#121212",
      height: 80,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    subject: {
      
      color: "#121212",
      height:80,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    body: {
      
      color: "#121212",
      height: 80,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    placeholder2: {
      
      color: "#121212",
      height: 48,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    signature: {
      
      color: "#121212",
      height: 48,
      width: 320,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 25,
      marginLeft: 20
    },
    cupertinoButtonInfo: {
      height: 44,
      width: 100,
      marginTop: 25,
      marginLeft: 134
    }
  });
  
  