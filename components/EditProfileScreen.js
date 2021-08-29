import React from 'react'
import { View, Text,Button,StyleSheet,TouchableOpacit,ImageBackground,TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const EditProfileScreen = () => {

    renderInner = () => (
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
          </View>
          <TouchableOpacity style={styles.panelButton} >
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton} >
            <Text style={styles.panelButtonTitle}>Choose From Library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => this.bs.current.snapTo(1)}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
      );
    

    bs = React.createRef();
    fall = new Animated.Value(1);

    return (
        <View style={styles.container}>

        <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
        />

            <View style={{margin:20}}>

                <View style={{alignItems:'center'}}>

                    <TouchableOpacity onPress={()=>this.bs.current.snapTo(0)}>

                        <View
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>

                              <ImageBackground
                              source={require('../assets/profileImage.png')}
                              style={{height:100, width:100}}
                              imageStyle={{borderRadius:15}}>
                                  <View
                                  style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                <Ionicons name="ios-camera-outline" size={40} color="black"
                                 style={{
                                    opacity: 0.7,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    borderRadius: 10,
                                  }} />

                                  </View>

                              </ImageBackground>

                        </View>

                    </TouchableOpacity>
                    <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>Vishwa Dharmaratna</Text>

                </View>
                <View style={styles.action}>
                <FontAwesome name="user-o" size={24} color="black" />
                    <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}>
                        
                    </TextInput>
                </View>


                <View style={styles.action}>
                <FontAwesome name="user-o" size={24} color="black" />
                    <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}>
                        
                    </TextInput>
                </View>

                <View style={styles.action}>
                <FontAwesome name="phone" size={24} color="black" />
                    <TextInput
                    placeholder="Phone"
                    keyboardType='number-pad'
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}>
                        
                    </TextInput>
                </View>

                <View style={styles.action}>
                    
                <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                    <TextInput
                    placeholder="Email"
                    keyboardType='email-address'
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}>
                        
                    </TextInput>
                </View>

                <View style={styles.action}>
                    
                <Fontisto name="world" size={24} color="black" />
                    <TextInput
                    placeholder="Country"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}>
                        
                    </TextInput>
                </View>

                <View style={styles.action}>
                    
                <EvilIcons name="location" size={24} color="black" />
                    <TextInput
                    placeholder="City"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={styles.textInput}
                    />
                        
                    
                </View>

                <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
                        <Text style={styles.panelButtonTitle}>
                            Submit
                        </Text>
                </TouchableOpacity>





            </View>
            
        </View>
    )
}

export default EditProfileScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
      },
      header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      action: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      },
      actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
      },

})
