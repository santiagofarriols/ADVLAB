import React, { useState } from 'react'
import {View, Text, StyleSheet, Modal, NativeModules, Alert} from 'react-native';
import { DefaultTheme, Provider as PaperProvider,TextInput, Button,Chip, Title } from 'react-native-paper';


/* const noms = ['Sandiara', 'Faylar', 'Sessene','Gohe','Ndiobene'] */
/* props.noms1.forEach(element =>{
  desc.push('-' + element+ '\n')


}); */
const Goalinput = props => {

  var desc=[]
  props.noms1.forEach(element =>{
    desc.push('-' + element+ '\n')
  
  
  });
  const [enteredGoal, setEnteredGoal] = useState('');
  const [enteredKg, setEnteredKg] = useState('');
  const [enteredPersonnes, setEnteredPersonnes] = useState('');
  const [autreText, setAutreText] = useState('');

  //for the chips
  const [selectedc, setSelectedc] = useState(false);
  const [selecteds, setSelecteds] = useState(false);
  const [selectede, setSelectede] = useState(false);
  const [textColorc, setTextColorc] = useState(`#FBA200`);
  const [textColors, setTextColors] = useState(`#FBA200`);
  const [textColore, setTextColore] = useState(`#FBA200`);
  const [stylecom, setStylecom] = useState({ borderColor: `#FBA200`, borderWidth:1, backgroundColor: `white` });
  const [stylesan, setStylesan] = useState({ borderColor: `#FBA200`, borderWidth:1, backgroundColor: `white` });
  const [styleeco, setStyleeco] = useState({ borderColor: `#FBA200`, borderWidth:1, backgroundColor: `white` });
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  };  

  const goalInputHandler2 = (enteredText) => {
    setEnteredPersonnes(enteredText)
  };  

  const goalInputHandler3 = (enteredText) => {
    setEnteredKg(enteredText)
  };  
  const goalInputHandler4 = (holax) => {
    setAutreText(holax)

    setTextColors('#FBA200')
    setStylesan({ borderColor: `#FBA200`, backgroundColor: `transparent` })

    setTextColorc('#FBA200')
    setStylecom({ borderColor: `#FBA200`, backgroundColor: `transparent` })

    setTextColore('#FBA200')
    setStyleeco({ borderColor: `#FBA200`, backgroundColor: `transparent` })
  }; 

  const selectedcom = () => {
    setSelectedc(!selectedc);
    setSelecteds(false);
    setSelectede(false);
    setAutreText('Commerce')
    /* if (chipPressed) {
        chipPressed(selected);
    } */
    if(!selectedc){
      setTextColorc('white')
      setStylecom({ borderColor: `#FBA200`, backgroundColor: `#FBA200` })

      setTextColors('#FBA200')
      setStylesan({ borderColor: `#FBA200`, backgroundColor: `transparent` })

      setTextColore('#FBA200')
      setStyleeco({ borderColor: `#FBA200`, backgroundColor: `transparent` })
    }
    if(selectedc){
      setTextColorc(`#FBA200`);
      setStylecom({ borderColor: `#FBA200`, backgroundColor: `transparent` });
    }
};

const selectedsan = () => {
  setSelecteds(!selecteds);
  setSelectedc(false);
  setSelectede(false);
  setAutreText('Santé')
  
  if(!selecteds){
    setTextColors('white')
    setStylesan({ borderColor: `#FBA200`, backgroundColor: `#FBA200` })

    setTextColorc('#FBA200')
    setStylecom({ borderColor: `#FBA200`, backgroundColor: `transparent` })

    setTextColore('#FBA200')
    setStyleeco({ borderColor: `#FBA200`, backgroundColor: `transparent` })
  }
  if(selecteds){
    setTextColors(`#FBA200`);
    setStylesan({ borderColor: `#FBA200`, backgroundColor: `transparent` });
  }
};


const selectedeco = () => {
  setSelectede(!selectede);
  setSelectedc(false);
    setSelecteds(false);
    setAutreText("École")
  /* if (chipPressed) {
      chipPressed(selected);
  } */
  if(!selectede){
    setTextColore('white')
    setStyleeco({ borderColor: `#FBA200`, backgroundColor: `#FBA200` })

    setTextColors('#FBA200')
    setStylesan({ borderColor: `#FBA200`, backgroundColor: `transparent` })

    setTextColorc('#FBA200')
    setStylecom({ borderColor: `#FBA200`, backgroundColor: `transparent` })
  }
  if(selectede){
    setTextColore(`#FBA200`);
    setStyleeco({ borderColor: `#FBA200`, backgroundColor: `transparent` });
  }
};
    
 var es
 
  const addGoalHandler = () => {
    var esta=false

    for(var i=0; i<props.noms1.length;i++){
      if (enteredGoal==props.noms1[i]){
        esta=true
      }
    }
    if (esta==true){
    props.onAddGoal(enteredGoal,enteredPersonnes,enteredKg,autreText);
    setEnteredGoal('');
    setEnteredPersonnes('');
    setEnteredKg('');
    setAutreText('');
    setTextColors('#FBA200')
    setStylesan({ borderColor: `#FBA200`, backgroundColor: `transparent` })

    setTextColorc('#FBA200')
    setStylecom({ borderColor: `#FBA200`, backgroundColor: `transparent` })

    setTextColore('#FBA200')
    setStyleeco({ borderColor: `#FBA200`, backgroundColor: `transparent` })

    }
    if (esta==false) {
      Alert.alert('Villages disponibles:',' \n'  + desc.join(""))
    }
    

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
            label='Village destination'
            />
          </View>
          <View style={styles.inputContainer}>
          <TextInput 
            /* placeholder="Village" 
            placeholderTextColor = 'grey' */
            keyboardType="numeric"
            returnKeyType="done"
            style={styles.input2}
            onChangeText={goalInputHandler2} 
            value={enteredPersonnes}
            mode='outlined'
            label='Personnes '
            />
            <TextInput 
            /* placeholder="Village" 
            placeholderTextColor = 'grey' */
            keyboardType="numeric"
            returnKeyType="done"
            style={styles.input2}
            onChangeText={goalInputHandler3} 
            value={enteredKg}
            mode='outlined'
            label='Kgs '
            />
          </View>
          
          {/* <View style={styles.motiff}>
            <Title style={styles.motiff}>Motif du déplacement</Title>
            </View> */}
          <View  style={styles.inputContainer}>
           
          <View style={styles.chipp}>
            <Chip icon="currency-usd" style={stylecom} selectedColor={textColorc} selected={selectedc} onPress={selectedcom}>Commerce</Chip>
          </View>
          <View style={styles.chipp}>
          <Chip icon="hospital" style={stylesan} selectedColor={textColors} selected={selecteds} onPress={selectedsan}>Santé</Chip>
          </View>
          <View style={styles.chipp}>
          <Chip icon="school" style={styleeco} selectedColor={textColore} selected={selectede} onPress={selectedeco}>École</Chip>
          </View>

          
          </View>

          <View style={styles.autre}>
          <TextInput 
            /* placeholder="Village" 
            placeholderTextColor = 'grey' */
            
            
            style={styles.autreinput}
            onChangeText={goalInputHandler4} 
            value={autreText}
            mode='flat'
            label='Autre'
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

      
      chipp: { 
       margin:5,
       marginTop:15
         
      },
      autre: { 
        
        flexDirection:'row',
        justifyContent: 'center',
         alignItems: "center",
         width:"100%",
         marginTop:10
          
       },

       motiff: { 
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        
        
         
         
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
autreinput: {
  width: "80%", 
  height: 45,
  /* borderColor: "blak", 
  borderWidth: 1,  */
  marginVertical:'1%',
  marginHorizontal:10,
  fontSize:18,
  backgroundColor: `white`
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