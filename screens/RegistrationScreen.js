import React , {useState}from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';

const InitialState = {
    login: "",
     email:"",
     password:"",
}
export default function RegistrationScreen(){
    return(<Viev><ImageBackground style={styles.image} source={require('./assets/images/photoBG.jpg')}>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
    <View style={styles.forma}>
      <Text>Registration</Text>
      <TextInput style={ styles.input} placeholder="Login"/>
      <TextInput style={ styles.input} placeholder="Email"/>
      <TextInput style={ styles.input} placeholder="Password" secureTextEntry={true}/>
      <View>
        <TouchableOpacity style={styles.btn}><Text style={styles.btnTitle}>SING UP</Text></TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  </ImageBackground></Viev>)
}


const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   // alignItems: 'center',
    //   // justifyContent: 'center',
    // },
    forma: {
      backgroundColor: '#FFFFFF',
      borderRadius: 25,
      // width: 375,
      height:549,
  },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end",
    },
    input: {
      textAlign: 'left',
      backgroundColor: "#F6F6F6",
      borderColor: "#E8E8E8",
      borderRadius: 8,
       height: 40,
      margin: 12,
      borderWidth: 1,
      paddingLeft: 16,
    },
    btn: {
      backgroundColor: "#FF6C00",
      height:51,
      borderRadius:100,
      marginTop:43,
      justifyContent:"center",
      alignItems:"center",
    },
    btnTitle:{
      color: "#FFFFFF",
      fontSize:16,}
  },);
  
    