
import React from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




const Stack =createStackNavigator()


const screenA=({navigation})=>{
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

const screenB=({navigation})=>{
  const onpressHandler=()=>{
    // navigation.navigate('Screen_A')
    navigation.goBack()
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
    </View>
  )
}


const App = () => {

return(
  <NavigationContainer>
    <Stack.Navigator
    // screenOptions={{
    //   header:()=>null
    // }}
    >
      <Stack.Screen
      name="Screen_A"
      component={screenA}
      options={{
        header:()=>null
      }}
      />
       <Stack.Screen
      name="Screen_B"
      component={screenB}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

};

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

export default App;
