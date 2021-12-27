import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    
  } from 'react-native';




export const screenA=({navigation})=>{
  const onpressHandler =()=>{
  navigation.navigate('Screen_B')
  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
      </Text>
      <Pressable
      onPress={onpressHandler}
      style={({pressed})=>(
        {backgroundColor:pressed?'#ddd':"aqua"}
      )}
      >
      <Text style={styles.text}>
        Go to Screen B  
      </Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
      fontSize:40,
    }
  
  });