import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet,Alert } from 'react-native'
import { DefaultTheme, Provider as PaperProvider,Button } from 'react-native-paper';
import Expo, { SQLite } from 'expo';
import { openDatabase } from "expo-sqlite";

var u=1
var d=[]

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes(); //Current Minutes
var sec = new Date().getSeconds(); //Current Seconds

const db = openDatabase('wallet');
class Datatest2 extends Component {

   state = {
      'balance': 0,
      'value':0,
      'sourceName' :'',
   }
    
   
   
   componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists account5 (Trajet integer primary key not null,Date text, Heure text, Village_Actuel text, Destin text, Personnes integer, Kgs integer, Motif text);',[],()=>console.log("Created!"),(a,b)=>console.log(b)
      );
      console.log("created table account2 ");
      tx.executeSql(
        'create table if not exists tablex (id integer primary key not null, relatedAccount_id int, type int, amount int, balanceAfterTransaction int, dateTime text, description text, FOREIGN KEY(relatedAccount_id) REFERENCES account5(trajet) );',[],()=>console.log("Created2!")
      );
    });
  }
   source = (s) =>{
     
     console.log(s);
     this.setState({ 'sourceName' : this.props.viajes});
   } 
   
    
   addSource = ()=>{
    
       
    console.log("entered addedSource");
    var holax=this.props.viajes[0][0]
    console.log(holax + '!!!!!!!!!!')
    
    db.transaction(
      tx => {
        for (var u=0; u<this.props.cuantos;u++){
        console.log(tx.executeSql('insert into account5 (Date, Heure, Village_Actuel , Destin, Personnes, Kgs, Motif) values (?,?,?,?,?,?,?)',[date+'/'+month+'/'+year,hours+':'+min+':'+sec,this.props.viact,this.props.viajes[u][0],this.props.viajes[u][1],this.props.viajes[u][2],this.props.viajes[u][3]],()=>console.log("sucess!"),(a,b)=>console.log(b)));
        console.log("inserted new account "+this.state.sourceName+" fin");
        tx.executeSql('select * from account5', [], (_, { rows }) =>
          console.log(JSON.stringify(rows)),(a,b)=>console.log(b)
        );
        console.log("exit");
        
       } }
    )
   };

   hacer=()=>{

    var estay=false

    var desc=[]
    this.props.noms3.forEach(element =>{
    desc.push('-' + element+ '\n')});

    for(var i=0; i<this.props.noms3.length;i++){
      if (this.props.viact==this.props.noms3[i]){
        estay=true
      }
    }
    if (estay==true && this.props.viajes.length>0 ){
        this.addSource()
        this.props.listo()
    }
    if (estay==false) {
      Alert.alert('Village Actuel ne pas trouvé.\n\nDisponibles:',' \n'  + desc.join(""))
    }
    if (this.props.viajes.length<1) {
        Alert.alert('Insérez une destination')
      }
    
   }

   
   render() {
    
       
      return (
        
         <View style = {styles.aller}>
             
            
            <Button dark={false} mode="contained"  onPress={this.hacer}>Aller</Button>
            
         </View>
         
      )
   }
}
export default Datatest2

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

