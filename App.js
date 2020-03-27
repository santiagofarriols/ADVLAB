import React, { useState }  from 'react';
import { 
  StyleSheet,  
  View,  
  FlatList,
  TextInput,
  Text,
  Modal
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider,Button } from 'react-native-paper';

import Goalitem from './Components/Goalitem';
import Goalinput from './Components/Goalinput';
import Actuel from './Components/Actuel';
import Resultado from './Components/Resultado';
import Card1 from './Components/Card1';
import Headermain from './Components/Headermain';


 

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [Destin, setDestin] = useState([]); 
  const [Destindicc, setDestindicc] = useState([]);
  const [VillageActuel, setVillageActuel] = useState([]);
  const [SOCActuel, setSOCActuel] = useState([]);
  const [isAddmode, SetIsAddMode] = useState(false);
  const [Res, SetRes] = useState(false);

  
  setDestin[0];
  /* setDestindicc[{}]; */

  const addGoalHandler = (goalTitle,PersonnesTitle, KgTitle) => {
    
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      {id: Math.random().toString(), value: goalTitle, perso: PersonnesTitle, kilo: KgTitle}
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


  

  


  return (
    <PaperProvider theme={theme}>
    <Headermain/>
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
      //como agregar tambien personas y kg??
      )}
      />
      <Goalinput 
        visible={isAddmode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAdditionHandler}
      />

      {/* <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData =>(
        <Goalitem 
          id={itemData.item.id} 
          onDelete={removeGoalHandler} 
          title={itemData.item.value}
        />
        )}
      /> */}
        
        <View style={styles.aller}>
          <Button  dark={false} mode="contained" onPress={() =>SetRes(true) }>Aller</Button>
          

        </View>
          <Modal visible={Res}>
            <Resultado 
              title={VillageActuel}
              SOCact={SOCActuel}
              destinations={courseGoals}
              
              />
            
            <Button mode="contained" onPress={() =>SetRes(false)}>Retour</Button>
          </Modal>
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

