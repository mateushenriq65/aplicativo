
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logoo.png')}
      />
      
      <Text style={styles.texto1}>Discover Your Dream job here</Text>
      <Text style={styles.subtext}>Explore all the existing job based on your interest and study major</Text>
    </View>
  )
}
    <View
      style={styles.container2}>

       



     


    </View>


    
   

   
  
const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin:30
  },

  container2:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    gap:16,
  },

  imagem: {
    width: 100,
    
  },
  
  texto1: {
   alignItems: 'center',
   justifyContent:'center',
   textAlign:'center',
   color: '#1F41BB',
   fontWeight: '600',     
   fontSize: 42,
   margin:20,    
  },

  subtext: {
    alignItems: 'center',
    justifyContent:'center',
    textAlign:'center',
    fontWeight: '300',    
    fontStyle: 'italic', 
    fontSize: 20,  
    margin:20,
  },
     



});




