
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {

     const handlePress = () => {    //aqui estou declarando o botão 1
    console.log('Botão clicado!');    
  };  

  const handlePress2 = () => {         //aqui estou declarando o botão 2 
    console.log('Botão 2 clicado!');
  };


  return (
        <View style={{ flex: 1}}>
        <View style={styles.container}>
        <Image                                       
        source={require('../assets/logoo.png')}
        />
      
      <Text style={styles.texto1}>Discover Your Dream job here</Text>
      <Text style={styles.subtext}>Explore all the existing job based on your interest and study major</Text>
    </View>
  
     
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

       
          {/* Botão 2 */}
        <TouchableOpacity style={styles.button2} onPress={handlePress2}>
          <Text style={styles.buttonText2}>Register</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

    

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

  button: {
    backgroundColor: '#1F41BB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

button2: {
    backgroundColor: '#ffffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
},

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',

  },
    
    buttonText2: {
    color: '#000000ff',
    fontSize: 16,
    fontWeight: 'bold'
    },

});




