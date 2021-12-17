import React,{useState} from 'react';

import {

  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SafeAreaView,
  SectionList
  
} from 'react-native';





const App = () => {
 const [Items,setItems]= useState([
  {name:'text1'},
  {name:'text2'},
  {name:'text3'},
  {name:'text4'},
  {name:'text5'},
  {name:'text6'},
  {name:'text7'},
  {name:'text8'},
  {name:'text9'},
  {name:'text10'},
  {name:'text11'},
  {name:'text12'},
  {name:'text13'}
 ])

 const DATA =[
   {
     title:'ayub',
     data:['ninja']
  },
  {
    title:'naruto',
    data:['ninja','shinobi','leaf']
 },
 {
  title:'gaara',
  data:['ninja','shinobi2','sand']
},
{
  title:'zabuja',
  data:['ninja','shinobi3','mist']
}
  
 ]
  const [Refresh,setRefresh]=useState(false)
  const OnRefreshs =()=>{
  setRefresh(true);
  setItems([...Items,{name:'text12'}]);
  setRefresh(false);

  }

  return( 
    <SectionList
    sections={DATA}
    keyExtractor={(item,index)=>index.toString()}
    renderItem={({item})=>(
      
        <Text style={styles.text}>{item}</Text>
      
    )}
      renderSectionHeader={({section})=>(
        <View style={styles.item}>
        <Text style={styles.text}>{section.title}</Text>
      </View>
      )}

    />


    // <FlatList
    // // numColumns={3}
    // horizontal
    // inverted
    // keyExtractor={(item,index)=>index.toString()}
    // data={Items}
    // renderItem={({item})=>(
    //   <View style={styles.item}>
    //     <Text style={styles.text}>{item.name}</Text>
    //   </View>
      
    // )}
    // refreshControl={
    //   <RefreshControl
    //   refreshing={Refresh}
    //   onRefresh={OnRefreshs}
    //   colors={['red']}
    //   />
    
    // }
    
    // />

    
  
    // <ScrollView  style={styles.body}
    // refreshControl={
    //   <RefreshControl
    //   refreshing={Refresh}
    //   onRefresh={OnRefreshs}
    //   />
    
    // }
    // >
    // {
    //   Items.map((obj)=>{
    //     return(

    //       <View style={styles.item} key={obj.key}>
    //           <Text style={styles.text}>{obj.item}</Text>
    //       </View>

    //     )
    //   })
    // }

    // </ScrollView>  
  )

};

const styles = StyleSheet.create({
body:{
  flex:1,
  backgroundColor:'red',
  flexDirection:'column'

},
item:{
  backgroundColor:'skyblue',
  justifyContent:'center',
  alignItems:'center',
  margin:10
},

text:{
  color:'black',
  margin:10,
  fontSize:35,
  fontStyle:'italic'

}
});

export default App;
