import React from 'react'

import {
    Pressable,
    StyleSheet,
    Text,
    
  } from 'react-native';

const CustomButton =(props)=>{
return(
    <Pressable
    onPress={props.Onclick}
    android_ripple={{color:'red'}}
    style={({pressed})=>[
      {backgroundColor:pressed?"#5555":"#00ff00"},
      {...props.style}

    ]}
    >
    <Text style={styles.text}>{props.title}</Text>

    </Pressable>
    )
}

const styles = StyleSheet.create({

    
text:{
    color:'black',
    margin:10,
    fontSize:20,
    textAlign:"center"
  
  },
})

export default CustomButton;