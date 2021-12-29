
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { screenA } from './src/ScreenA';
import { screenB } from './src/ScreenB';

// const Tab=createBottomTabNavigator()
// const Tab =createMaterialBottomTabNavigator()
// const Tab =createMaterialTopTabNavigator()
// const Stack =createStackNavigator()

const Drawer = createDrawerNavigator();



const App = () => {

return(
  <NavigationContainer>
    <Drawer.Navigator 
    initialRouteName='Screen_B'
    drawerPosition='left'
    drawerTyoe='slide'
    edgewidth={500}
    hideStatusBar={true}
    overlaycolor='#fff'
    drawerStyle={{
      backgroundColor:'blue',
      width:250
    }}

    screenOptions={{
      HeaderShown:true,
      swipeEnabled:true,
      gestureEnabled:false,
      headerTitleAlign:'center',
      headerStyle:{
        backgroundColor:'blue',
      },
      headerTintColor:'red',
      headerTintStyle:{
        fontSize:33,
        fontWieght:'bold'
      }
    }}
    >

      <Drawer.Screen
      name="Screen_A"
      component={screenA}
      options={
        {
          title:'Screen_A',
          drawerIcon:({focused})=>(
            <FontAwesome5
            name='btc'
            size={focused?25:35}
            color={focused?'red':'aqua'}
            />
          )
        }
      }

      />
       <Drawer.Screen
      name="Screen_B"
      component={screenB}

      initialParams={{ItemName:'Item From Screen A',  ItemId:12}}
      />

    </Drawer.Navigator>
  </NavigationContainer>
)

};



export default App;
