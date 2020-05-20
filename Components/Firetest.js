import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet,Alert } from 'react-native'
import { DefaultTheme, Provider as PaperProvider,Button } from 'react-native-paper';
import Expo, { SQLite } from 'expo';
import { openDatabase } from "expo-sqlite";
import * as firebase from 'firebase';




// Optionally import the services that you want to use
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

/* const firebase=require('firebase') */

 var firebaseConfig = {
    apiKey:"AIzaSyAPgwAOwvvCnlzVmO9DD-8EziuUon4-tYI",
    authDomain:"testsantifa.firebaseapp.com",
    databaseURL:"https://testsantifa.firebaseio.com",
    projectId:"testsantifa",
    storageBucket:"testsantifa.appspot.com",
    messagingSenderId:"614917378151",
    appId:"1:614917378151:web:96eb7d9caf318a1b83c4c2"
  };

  /* var firebaseConfig = {
    apiKey: "AIzaSyDEIA7x4RqoDeeDPW-QKQSap2cNvmyur9o",
    authDomain: "di-ra-225911.firebaseapp.com",
    databaseURL: "https://di-ra-225911.firebaseio.com",
    projectId: "di-ra-225911",
    storageBucket: "di-ra-225911.appspot.com",
    messagingSenderId: "425196420931",
    appId: "1:425196420931:web:4350a06b5f4e3d0ca379f6"
  }; */
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);}
    


    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds



class Firetest extends Component {
    


    
 

 

 
  

 

    

   test=(score) =>{
       var database = firebase.database();
       var ref = database.ref('Trajets/');
       for (var u=0; u<this.props.cuantos;u++){
        
       var data = {

           Date :new Date().toISOString(),
           Heure : hours+':'+min+':'+sec ,
           Village_actuel: this.props.viact,
           Destination: this.props.viajes[u][0],
           Personnes: this.props.viajes[u][1],
           Kgs:this.props.viajes[u][2],
           Motifs:this.props.viajes[u][3],
       }
       
       //recuperer l<id du device
       //mirar offline
       //mirar storage + images
       //auth
       //
       ref.push(data)}
        /* firebase.database().ref('Viajes/').push({
          item: 5600,
          speed: 50
         } ); */

         

      }


      
   
render() {
 
    
   return (
     
      <View style = {styles.aller}>
          
         
         <Button dark={false} mode="contained"  onPress={this.test}>TEST</Button>
         
      </View>
      
   )
}
}
export default Firetest

const styles = StyleSheet.create ({
container: {
   /* flex: 1, */
   alignItems: 'center',
   marginTop: 50
},
aller: {
 
 flexDirection:'row',
 justifyContent: 'center',
  alignItems: "flex-end",
  
 padding: 10,
 

},

textInput: {
   margin: 15,
   height: 35,
   borderWidth: 1,
   backgroundColor: '#7685ed'
}
})