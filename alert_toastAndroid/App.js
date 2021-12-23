import React,{useState} from 'react';

import {

  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
  
} from 'react-native';





const App = () => {
  const[name,setname]=useState()
  const[submit,setsubmit]=useState(false)
  const Onclick=()=>{
    if(name.length > 3){
      setsubmit(!submit)
    }
    else{
      // Alert.alert(
      //   "Alert Title",
      //   "My Alert Msg",
      //   [
      //     {
      //       text: "Cancel",
      //       onPress: () => console.log("Cancel Pressed"),
      //       style: "cancel"
      //     },
      //     { text: "OK", onPress: () => console.log("OK Pressed") }
      //   ],{cancelable:true,onDismiss:()=>console.warn('alert dismiss')}
      // );
      ToastAndroid.showWithGravity('My Alert Msg',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
      )
    }
    
  }

return(
  <View style={styles.body}>
    <Text style={styles.text}>
      Enter your Text: 
    </Text>
    <TextInput
    style={styles.input}
    placeholder="eg.ayub"
    onChangeText={(value)=>{setname(value)}}
    secureTextEntry
    // maxLength={2}
    />

    {/* Pressable */}
    <Pressable
    onPress={Onclick}
    android_ripple={{color:'red'}}
    style={({pressed})=>[
      {backgroundColor:pressed?"#5555":"#00ff00"}

    ]}
    >
    <Text style={styles.text}>{submit?'Clear':'Submit'}</Text>

    </Pressable>

    {submit?
    <Text>
    You've Enter : {name}
    </Text>
    :null}
    
    
  </View>
)

};

const styles = StyleSheet.create({
body:{
  flex:1,
  alignItems:'center'

},

text:{
  color:'black',
  margin:10,
  fontSize:20,
  textAlign:"center"

},
input:{
  width:200,
  borderWidth:1,
  justifyContent:"center",
  textAlign:"center",
  borderColor:'#555',
  borderRadius:5,
  marginBottom:10,
  
  
},
button:{
  backgroundColor:'#00ff00',
  width:150,
  height:50,
  borderRadius:5
}
});

export default App;
