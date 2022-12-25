// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen/>
      {/* <StatusBar style="auto" /> */}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
//   forma: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 25,
//     // width: 375,
//     height:549,
// },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//   },
//   input: {
//     textAlign: 'left',
//     backgroundColor: "#F6F6F6",
//     borderColor: "#E8E8E8",
//     borderRadius: 8,
//      height: 40,
//     margin: 12,
//     borderWidth: 1,
//     paddingLeft: 16,
//   },
//   btn: {
//     backgroundColor: "#FF6C00",
//     height:51,
//     borderRadius:100,
//     marginTop:43,
//     justifyContent:"center",
//     alignItems:"center",
//   },
//   btnTitle:{
//     color: "#FFFFFF",
//     fontSize:16,}
},);

  