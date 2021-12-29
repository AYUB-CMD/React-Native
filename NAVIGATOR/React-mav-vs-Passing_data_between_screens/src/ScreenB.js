import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    
  } from 'react-native';



 export const screenB=({navigation,route})=>{
   const {ItemName,ItemId}=route.params
    const onpressHandler=()=>{
      navigation.navigate('Screen_A',{message:'hello'})
      // navigation.goBack()
    }
    return(
      <View style={styles.body}>
        <Text style={styles.text}>
          Screen B
        </Text>
        
        <Pressable
        onPress={onpressHandler}
        style={({pressed})=>(
          {backgroundColor:pressed?'#ddd':"aqua"}
        )}
        >
        <Text style={styles.text}>
          Go to Screen A
        </Text>
        </Pressable>
        <Text style={styles.text}>{ItemName} </Text>
        <Text style={styles.text}>{ItemId} </Text>
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