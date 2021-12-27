
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { screenA } from './src/ScreenA';
import { screenB } from './src/ScreenB';

const Tab=createBottomTabNavigator()
// const Stack =createStackNavigator()



const App = () => {

return(
  <NavigationContainer>
    <Tab.Navigator
    
    // tabBarOptions={
    //   {
    //     activeTintColor:'red',
    //     activeBackgroundColor:'aqua',
    //     showLabel:true,
    //     labelStyle:{fontSize:25}
    //   }
    // }
    
    screenOptions={({route})=>({
      tabBarIcon:({focused,size,color})=>{
        let iconName;
        if (route.name === 'Screen_A'){
          iconName='at'
          size=focused ? 35 : 25;
          color=focused ? 'aqua' : '#555'

        }else if (route.name === 'Screen_B'){
          iconName='btc'
          size=focused ? 35 : 25;
          color=focused ? 'aqua' : '#555'
        }
        return(
         < FontAwesome5
         name={iconName}
         size={size}
         color={color}
         />
        )
      }
      
 
    })}
    

    >

      <Tab.Screen
      name="Screen_A"
      component={screenA}
      options={{
        // header:()=>null
        tabBarBadge:3
      }}

      
      />
       <Tab.Screen
      name="Screen_B"
      component={screenB}
      />

    </Tab.Navigator>
  </NavigationContainer>
)

};



export default App;
