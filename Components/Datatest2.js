import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'
import { DefaultTheme, Provider as PaperProvider,Button } from 'react-native-paper';
import Expo, { SQLite } from 'expo';
import { openDatabase } from "expo-sqlite";

var u=1
var d=[]

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
        'create table if not exists account3 (Trajet integer primary key not null, Village_Actuel text, Destin text, Personnes integer, Kgs integer);',[],()=>console.log("Created!"),(a,b)=>console.log(b)
      );
      console.log("created table account2 ");
      tx.executeSql(
        'create table if not exists tablex (id integer primary key not null, relatedAccount_id int, type int, amount int, balanceAfterTransaction int, dateTime text, description text, FOREIGN KEY(relatedAccount_id) REFERENCES account3(trajet) );',[],()=>console.log("Created2!")
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
    this.props.listo
    db.transaction(
      tx => {
        for (var u=0; u<this.props.cuantos;u++){
        console.log(tx.executeSql('insert into account3 (Village_Actuel , Destin, Personnes, Kgs) values (?,?,?,?)',[this.props.viact,this.props.viajes[u][0],this.props.viajes[u][1],this.props.viajes[u][2]],()=>console.log("sucess!"),(a,b)=>console.log(b)));
        console.log("inserted new account "+this.state.sourceName+" fin");
        tx.executeSql('select * from account3', [], (_, { rows }) =>
          console.log(JSON.stringify(rows)),(a,b)=>console.log(b)
        );
        console.log("exit");
        console.log(u+'esto es u')
        console.log(this.props.cuantos+ 'esto es cuantos')
       } }
    )
   };

   
   render() {
    
       
      return (
        
         <View style = {styles.aller}>
             
            {/* <TextInput style = {styles.textInput} autoCapitalize = 'none' placeholder = 'sourceName'
            onChangeText={this.source}/> */}
            <Button dark={false} mode="contained"  onPress={this.addSource}>Aller</Button>
            
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

