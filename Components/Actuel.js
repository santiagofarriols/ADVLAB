import React, { useState } from 'react'
import {View, Text, Button, StyleSheet, Modal,} from 'react-native';
import { Title,TextInput,IconButton} from 'react-native-paper';

const Actuel = props => {
  
  const [Actuel, setActuel] = useState('');
  const [SOC, setSOC] = useState('');
  
  const ActuelInputHandler = (enteredText) => {
    setActuel(enteredText)
    props.onAddActuel(enteredText)
  };  
  
  const SOCInputHandler = (enteredText) => {
    setSOC(enteredText)
    props.onAddSOC(enteredText)
  };  



  
  return (
    
        
          <View>
          <Title style={{marginBottom:10}}>État actuel du véhicule:</Title>
          
          {/* <View style={styles.inputContainer2} > */}
          <View style={styles.inputContainer}>
          {/* <Button icon={require('C:\Users\Santi\Desktop\location_on-24px.svg')}></Button> */}
            <IconButton
            style={styles.iconn}
            size={25} 
            icon="pin-outline" 
             >></IconButton>
            <TextInput 
              /* placeholder="Village actuel"  */
              style={styles.input}
              mode='outlined'
              label='Village actuel'
              
              onChangeText={ActuelInputHandler} 
              value={Actuel}
            /> 
          </View>
          <View style={styles.inputContainer}>
          <IconButton
            style={styles.iconn}
            size={25} 
            icon="battery-charging" 
             >></IconButton>
            <TextInput 
              /* placeholder="Battery"  */
              keyboardType="numeric"
              returnKeyType="done"
              style={styles.input}
              mode='outlined'
              label='Battery'
              
              onChangeText={SOCInputHandler} 
              value={SOC}
            />
          </View>
          
         </View>
        
        
      
      );
    };
const styles = StyleSheet.create({
    inputContainer: { 
        flexDirection:'row',
        justifyContent: 'space-around',
         alignItems: "center",
         width: '100%'
         
      },
      inputContainer2: { 
      
        justifyContent: 'center',
         alignItems: "center",
         
         
      },
      
    input: {
        width: "80%", 
        height: 45,
        /* borderColor: "black", 
        borderWidth: 1,  */
        marginVertical:'1%',
        fontSize:18,
        
        
  },
  buttons: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  actuel: {
    
    justifyContent: 'center',
    alignItems: "flex-start",
  },
  iconn: {
    
    marginTop:15,
  },
});
export default Actuel;