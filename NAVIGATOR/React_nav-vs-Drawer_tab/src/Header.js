import React from 'react'

import {

    StyleSheet,
    Text,
    View,
    
  } from 'react-native';

  
export const Header = () => {
      return (
        
        <View  style={styles.head}>
            <Text style={styles.text}>Welcome To React-native</Text>
        </View>
        
          
      )
  }
const styles = StyleSheet.create({
    
    text:{
        color:'black',
        margin:5,
        fontSize:30,
        textAlign:"center",
      
      },
      head:{
          width:'100%',
          height:50,
          backgroundColor:'aqua',
          alignItems:'center',
          justifyContent:'center'
      }
      
      
      
    })

  