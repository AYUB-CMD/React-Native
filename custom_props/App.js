import React,{useState} from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Image,
  ImageBackground
  
} from 'react-native';
import { Header } from './src/Header';
import CustomButton from './src/CustomButton';






const App = () => {
  const[name,setname]=useState()
  const[submit,setsubmit]=useState(false)
  const[modal,setmodal]=useState(false)
  const Onclick=()=>{
    if(name.length > 3){
      setsubmit(!submit)
    }
    else{
      setmodal(true)
    }
    
  }

return(
  <ImageBackground 
  source={{uri:'https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png'}}
  style={styles.body}>

    <Modal
    visible={modal}
    onRequestClose={()=>{
      setmodal(false)
    }}
    animationType='slide'
    hardwareAccelerated
    > 
    <View style={styles.centered_modal}>
      <View style={styles.warn_modal}>
        <View style={styles.warn_title}>
          <Text style={styles.text}>Warning</Text>
        </View>
      <View style={styles.warn_body}>
      <Text style={styles.text}>Please Enter more than 3 character</Text>
      </View>
    <Pressable
      onPress={()=>{
        setmodal(false)
      } 
    }
    styles={styles.warn_btn}
    android_ripple={{color:"#00077"}}
      >
        <Text style={styles.text}>Ok</Text>
      </Pressable>
      </View>
    </View>  
      
    </Modal>

    <Header/>

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
    <CustomButton
    Onclick={Onclick}
    title={submit?'Clear':'Submit'}
    color={'#00ff00'}

    />

    <CustomButton
    Onclick={()=>{}}
    title={'Ok'}
    color={'#ff00ff'}
    style={{margin:10}}
    />
    

    {submit?
   <View style={styles.body}>
      <Text>
    You've Enter : {name}
    </Text>
  
   </View>
    :null
    
    }
    
    
  </ImageBackground>
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
},

centered_modal:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:"#00000099"
  },
  
warn_modal:{
  width:300,
  height:300,
  backgroundColor:'#ffffff',
  borderWidth:1,
  borderColor:'#000',
  borderRadius:20
},
warn_title:{
  height:50,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:"red",
  borderRadius:20,
  borderTopLeftRadius:20,
  borderTopRightRadius:20
  
},
warn_body:{
  height:200,
  justifyContent:'center',
  alignItems:'center'
},
warn_btn:{
  backgroundColor:'red',
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
},
img:{
  height:200,
  width:200,
  margin:20
}
});

export default App;
