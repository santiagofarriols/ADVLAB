import React, { useState }  from 'react';
import { 
  StyleSheet,  
  View,  
  FlatList,
  TextInput,
  Text,
  Modal,
  AsyncStorage,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider,Button } from 'react-native-paper';
/* import { openDatabase } from "expo-sqlite"; */

import Goalitem from './Components/Goalitem';
import Goalinput from './Components/Goalinput';
import Actuel from './Components/Actuel';
import Resultado from './Components/Resultado';
import Card1 from './Components/Card1';
import Headermain from './Components/Headermain';
import ListV from './Components/ListV';
import Datatest2 from './Components/Datatest2';
import { render } from 'react-dom';
import Firetest from './Components/Firetest'
import Geo from './Components/Geo'
/* import DismissK from './Components/DismissK' */






const noms = ['Sandiara', 'Faylar', 'Sessene','Gohe','Ndiobene']



export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [Vehicule, setVehicule] = useState('master');
  const [Destin, setDestin] = useState([]); 
  const [Destindicc, setDestindicc] = useState([]);
  const [VillageActuel, setVillageActuel] = useState([]);
  const [SOCActuel, setSOCActuel] = useState([]);
  const [isAddmode, SetIsAddMode] = useState(false);
  const [Res, SetRes] = useState(false);
  

  
  var courseDes=[]
  var cuantos
  setDestin[0];
  /* setDestindicc[{}]; */


  

  const addGoalHandler = (goalTitle,PersonnesTitle, KgTitle,Motif) => {
    
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      {id: Math.random().toString(), value: goalTitle, perso: PersonnesTitle, kilo: KgTitle, motif: Motif}
    ]);

    SetIsAddMode(false);
    Destin.push(goalTitle); 

    setDestindicc(currentDicc => [
      ...Destindicc, 
      {index: Destin.length-1, value: goalTitle}
    ]);
    


    
    
   
  };

  const addActuelHandler = ActuelTitle => {
    setVillageActuel(ActuelTitle)
    
  };
  
  const addSOCHandler = SOCTitle => {
    setSOCActuel(SOCTitle)
    
  };

 

  const removeGoalHandler = goalid => {
    
    setCourseGoals(currentGoals =>{

        return currentGoals.filter(goal=> goal.id !== goalid);
    });
    
      
  
  };



  const removeGoalHandler1 = diccIndex => {
    setDestindicc(currentDicc =>{

      return currentDicc.filter(goal=> goal.index !== diccIndex);

  });
    Destin.splice(diccIndex,1);
  
   };
  const cancelGoalAdditionHandler = () => {
    SetIsAddMode(false);
  };
  
  const actor = () => {
    var estax=false

    for(var i=0; i<noms.length;i++){
      if (enteredGoal==props.noms1[i]){
        estax=true
      }
    }
    if (estax==true){
    props.onAddGoal(enteredGoal,enteredPersonnes,enteredKg);
    setEnteredGoal('');
    setEnteredPersonnes('');
    setEnteredKg('');
    }
    if (estax==false) {
      Alert.alert('Villages disponibles:',' \n'  + desc.join(""))
    }
    SetRes(false);
  };


  const actor1 = () => {
    SetRes(false);
  };


  const actortrue = () => {


    SetRes(true);
    
  };
  
  const changeVehicule = insertedVehicule => {


   setVehicule(insertedVehicule)    
  };
  courseGoals.forEach(element => {
    courseDes.push([element.value,element.perso,element.kilo,element.motif]);
    cuantos=courseDes.length
});
  


  
 

 



 




  return (
    
    <PaperProvider theme={theme}>
    <Headermain change={changeVehicule}/>
    
    <View style={styles.screen}>
    
      <Actuel
        onAddActuel={addActuelHandler}
        onAddSOC={addSOCHandler}
      />


      <View style={styles.ajouter} >
      
      
      <Button mode="outlined" color='goldenrod' onPress = {() => SetIsAddMode(true)} >Ajouter un nouveau trajet</Button>
       
      </View>

      <FlatList   
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData =>(
      <Card1 
      onDelete={removeGoalHandler}
      onDelete1={removeGoalHandler1} 
      title={itemData.item.value}
      person={itemData.item.perso}
      kilog={itemData.item.kilo}
      id={itemData.item.id}
      
      
      />
      
      )}
      />
      <Goalinput 
        noms1={noms}
        visible={isAddmode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAdditionHandler}
      />

     
        
        
          <Modal visible={Res}>
            <Resultado 
              title={VillageActuel}
              SOCact={SOCActuel}
              destinations={courseGoals}
              botonn={actor1}
              noms2={noms}
              quelVehicule={Vehicule}
              
              />
            
            {/* <Button mode="contained" onPress={() =>SetRes(false)}>Retour</Button> */}
          </Modal>


           {/* <Modal visible={Res2}> */}
           <Datatest2 
            viajes={courseDes}
            cuantos={cuantos}
            viact={VillageActuel}
            listo={actortrue}
            noms3={noms}
            />
          <Firetest
          viajes={courseDes}
          cuantos={cuantos}
          viact={VillageActuel}
          listo={actortrue}
          noms3={noms}
          />
          <Geo/>
        </View>

        
        

      </PaperProvider>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    padding:'8%',
    flex:1,
    
    
  },
  inputContainer: {
    flexDirection: "row", 
    justifyContent: 'space-between',
     alignItems: "center",
     borderColor:"red",
     borderWidth: 10
  },
  input: {
    width: "80%", 
    borderColor: "black", 
    borderWidth: 1, 
    padding: 10
  },
  aller: {
    
    flexDirection:'row',
    justifyContent: 'center',
     alignItems: "flex-end",
    padding: 10,
  },

  

  ajouter: {
    
    flexDirection:'column',
    justifyContent: 'flex-end',
    alignItems: "center",
    width:'100%',
    marginBottom: 15,
    marginTop:30
  },

  erase: {
    flexDirection: "row", 
    justifyContent: 'flex-end',
     alignItems: "flex-end",
     borderColor:"red",
     borderWidth: 1
     
     
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
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  



  

})
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffd700',
    accent: 'black',
  },
};



;

