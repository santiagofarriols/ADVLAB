import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet,Alert } from 'react-native'
import { DefaultTheme, Provider as PaperProvider,Button } from 'react-native-paper';
import Expo, { SQLite } from 'expo';
import { openDatabase } from "expo-sqlite";
import * as firebase from 'firebase';
import { getDistance, getPreciseDistance } from 'geolib';





// Optionally import the services that you want to use
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";



 /* var firebaseConfig = {
    apiKey:"AIzaSyAPgwAOwvvCnlzVmO9DD-8EziuUon4-tYI",
    authDomain:"testsantifa.firebaseapp.com",
    databaseURL:"https://testsantifa.firebaseio.com",
    projectId:"testsantifa",
    storageBucket:"testsantifa.appspot.com",
    messagingSenderId:"614917378151",
    appId:"1:614917378151:web:96eb7d9caf318a1b83c4c2"
  }; */
  // Initialize Firebase
  /* firebase.initializeApp(firebaseConfig); */
  
  /* if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);}
    


    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds */


    var coordinates = [14.428347, -16.807602, 14.429043, -16.805907, 14.429355, -16.803032]

    // For reading .txt file code block
/* var fs = require('react-native-fs');
var text = fs.readFileSync("./assets/Chemin.txt");
var textByLine = text.split("\n") */


/* function getDancers(males, females) {
    var names = read("./assets/Chemin.txt").split("\n"); 
    for (var i = 0; i < names.length; ++i) {
              names[i] = names[i].trim();
           }
    for (var i = 0; i < names.length; ++i) { 
    var dancer = names[i].split(" "); 
    var sex = dancer[0];
    var name = dancer[1];
    if (sex == "F") {
    females.enqueue(new Dancer(name, sex));
    } else {
    males.enqueue(new Dancer(name, sex)); }
    } } */
class Geo extends Component {

    

    testi = () => {
        alert(datax)
            
        
    } 
    
    _getDistance = () => {
        var dis=0
        for (var i=0;i<coordinates.length-4;i++){
            i=i+1
        var dis = dis + getDistance(
          { latitude: coordinates[i], longitude: coordinates[i+1] },
          { latitude: coordinates[i+2], longitude: coordinates[i+3] }
        );}
        alert(`Distance\n${dis} Meter\nor\n${dis/ 1000} KM`);
        /* var g 
        var k
        var h=getDancers(g,k)
        alert(g)
        alert(k) */
    };

    _getPreciseDistance = () => {
        var pdis = getPreciseDistance(
          { latitude: 20.0504188, longitude: 64.4139099 },
          { latitude: 51.528308, longitude: -0.3817765 }
        );
        alert(`Precise Distance\n${pdis} Meter\nor\n${pdis / 1000} KM`);
      };

   
   
render() {
 
    
   return (
     
      <View style = {styles.aller}>
          
         
         <Button dark={false} mode="contained"  onPress={this.testi}>TESTg</Button>


         
         
      </View>
      
   )
}
}
export default Geo

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