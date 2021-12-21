import React,{useState} from 'react';

import {

  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
  
} from 'react-native';





const App = () => {
  const[name,setname]=useState()
  const[submit,setsubmit]=useState(false)
  const Onclick=()=>{
    setsubmit(!submit)
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

    {/* default button */}
    {/* <Button
     title={submit?'Clear':'Submit'}
     onPress={Onclick}
     disabled={submit}
     color='red'
    /> */}


    {/* Touchable Opacity */}
    {/* <TouchableOpacity
    onPress={Onclick}
    style={styles.button}
    activeOpacity={0.2}
    >
      <Text style={styles.text}>{submit?'Clear':'Submit'}</Text>
    </TouchableOpacity> */}


    {/* TouchableHighlight */}
    {/* <TouchableHighlight
    onPress={Onclick}
    style={styles.button}
    activeOpacity={0.2}
    underlayColor='red'
    >
      <Text style={styles.text}>{submit?'Clear':'Submit'}</Text>
    </TouchableHighlight> */}

    {/* Pressable */}
    <Pressable
    onLongPress={Onclick}
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
