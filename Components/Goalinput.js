import React, { useState } from 'react'
import {View, Text, StyleSheet, Modal} from 'react-native';
import { DefaultTheme, Provider as PaperProvider,TextInput, Button } from 'react-native-paper';

const Goalinput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [enteredKg, setEnteredKg] = useState('');
  const [enteredPersonnes, setEnteredPersonnes] = useState('');
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  };  

  const goalInputHandler2 = (enteredText) => {
    setEnteredPersonnes(enteredText)
  };  

  const goalInputHandler3 = (enteredText) => {
    setEnteredKg(enteredText)
  };  

    
 
 
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal,enteredPersonnes,enteredKg);
    setEnteredGoal('');
    setEnteredPersonnes('');
    setEnteredKg('');
    

  };
  return (
     <Modal visible={props.visible } animationType="slide">
        <View style={styles.inputContainer2} >
          <View style={styles.inputContainer}>
          <TextInput 
            /* placeholder="Village" 
            placeholderTextColor = 'grey' */
            style={styles.input}
            onChangeText={goalInputHandler} 
            value={enteredGoal}
            mode='outlined'
            label='Village '
            />
          </View>
          <View style={styles.inputContainer}>
          <TextInput 
            /* placeholder="Village" 
            placeholderTextColor = 'grey' */
            style={styles.input2}
            onChangeText={goalInputHandler2} 
            value={enteredPersonnes}
            mode='outlined'
            label='Personnes '
            />
            <TextInput 
            /* placeholder="Village" 
            placeholderTextColor = 'grey' */
            style={styles.input2}
            onChangeText={goalInputHandler3} 
            value={enteredKg}
            mode='outlined'
            label='Kg '
            />
          </View>
          <View style={styles.buttons}>
          
          <Button style={styles.buttons} dark={false} mode="contained" title="ANNULER" color="red" onPress={props.onCancel} >ANNULER</Button>
          <Button style={styles.buttons} dark={false} mode="contained" title="AJOUTER" onPress={addGoalHandler}>AJOUTER </Button>
          </View>
        </View>
        
        </Modal>
      
      );
    };
const styles = StyleSheet.create({
    inputContainer: { 
        flexDirection:'row',
        justifyContent: 'center',
         alignItems: "center",
         
      },
      inputContainer2: { 
        flex: 1,
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
  input2: {
    width: "37.5%", 
    height: 45,
    /* borderColor: "blak", 
    borderWidth: 1,  */
    marginVertical:'1%',
    marginHorizontal:10,
    fontSize:18,
},
  buttons: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
    margin:10,

  }
});
export default Goalinput;