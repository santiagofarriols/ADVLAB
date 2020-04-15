import React from 'react'
import {View, StyleSheet, TouchableOpacity,Image,AsyncStorage} from 'react-native';
import { Avatar, IconButton, Card, Title, Paragraph,Surface,Text, Button,DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Header1 from './Header1';
/* import * as SQLite from 'expo-sqlite'; */
/* import {SQLite} from 'expo'; */
/* import nobattery from '/nobattery.png' */



/* const db = SQLite.openDatabase("test.db"); */
//Definition de matrix distances entre les villages. L'ordre c'est celui de "noms"
const distancess = [[0, 3.3, 4.8, 5.7, 4],
                    [3.3 , 0, 4, 3, 2],
                    [4.8, 4, 0, 4, 2.9, 2],
                    [5.7, 3, 4, 0, 1.7 ],
                    [4, 2, 2, 1.7, 0]];

//Villages dans la zone d'activité                    
/* const noms = ['Sandiara', 'Faylar', 'Sessene','Gohe','Ndiobene'] */



const Resultado = props => {
    
   

    
    var que = [];
    props.destinations.forEach(element => {
        que.push(element.value,element.perso,element.kilo);
    });
    
    var dest =[];
    
    var a=false;
    
    var indexActuel;//Index(noms) du village actuel
    var des=[];//Array des indexs(noms) destinations demandés ej: si destination 1 se trouve en 3eme place dans l'array noms, il aura le valeur 2(0,1,2)
    var total=0;//calcule les distances dans les possibles chemins
    var ver=[];//matrix des possibles permutations des destins
    var Distancemin=Infinity;//Distance du trajet minimal
    var indexMin=0//Index du trajet minimal dans les lignes de "ver"


    //Function qui permet faire une permutation des destins et créer une matrix
    var permArr = [], 
    usedChars = []; 
    function permute(input) { 
        var i, ch; 
        for (i = 0; i < input.length; i++) { 
            ch = input.splice(i, 1)[0];
            usedChars.push(ch); 
            if (input.length == 0) { 
                permArr.push(usedChars.slice()); 
                } 
                permute(input); input.splice(i, 0, ch); 
                usedChars.pop(); } 
                return permArr 
            };


    
    //On cherche dans "noms" l'index du village actuel
    for (var i = 0; i < props.noms2.length; i++) {
        {props.noms2[i]==props.title? indexActuel=i :null};
        }

    //On crée un array (des) des index de "noms" des destinations
    props.destinations.forEach(element => {
        dest.push(element.value);
    });
    for (var i=0; i<dest.length; i++){
        for (var j = 0; j < props.noms2.length; j++) {
            {props.noms2[j]==dest[i] ? des.push(j) :null};
        }
    }



    
    //Création de matrix des destins permutés
    ver=permute(des);
    var gl=[]
    //Route final
    var Route=[]
    var Route3=[]
    Route3.push(props.title)
    
    //pour toutes les lignes, on parcour toutes les elements de l'array de distances et on l'Additione, 
    //après on regarde c'est lequel la distance la plus courte et on garde l'index de la matrix de permutations
    for (var i=0; i<ver.length; i++){
        for (var j = 0; j < ver[i].length-1; j++) {
            
            total=total+distancess[ver[i][j]][ver[i][j+1]]
            
        }
        total=total+distancess[indexActuel][ver[i][0]]
        gl.push(total)
        if (total<Distancemin){
            
            Distancemin=total;
            indexMin=i;
            
        }
        total=0
        }
        
    
        var gl2=gl.join(",")

        //Une fois qu'on a la ligne de distance minimal, On regarde la route avec les index dans "noms"
        for (var i=0; i<ver[0].length; i++){
            Route.push(props.noms2[ver[indexMin][i]])
                
            }
        var Route2=Route.join(',');
        Route.forEach(item => 
            Route3.push(" ->" + item  )
            )

        // calcul de la charge utile
        var persons=[]
        var kilos=[]
        props.destinations.forEach(element => {
            persons.push(element.perso);
        });
        props.destinations.forEach(element => {
            kilos.push(element.kilo);
        });
            var peso=61 //le chauffeur (61 kg moyenne personne africaine )
            for (var i=0;i<dest.length;i++){
                peso=peso+parseInt(persons[i])*61+parseInt(kilos[i])
            }
        // Calcul de la consomation  E = (( 1.617x MASSE + 99.6 )x 5/1000)×(1+30/100) 
        //masse véhicule: master=1972, kangoo=1489, jinbei=1210
        


        if (props.quelVehicule=='master'){
            var energy = (( 1.617* (peso + 1972) + 99.6 )*5/1000)*(1+30/100) }
        if (props.quelVehicule=='kangoo'){
            var energy = (( 1.617*(peso + 1489)  + 99.6 )* 5/1000)*(1+30/100) }
        if (props.quelVehicule=='jinbei'){
            var energy = (( 1.617*(peso + 1210) + 99.6 )* 5/1000)*(1+30/100) }


        
        //SOC après la course

        var Consommation = Distancemin*energy/100 //energy c'est combien de kWh il depense en 100km
        var NewSOC=props.SOCact-(Consommation*100/33)
        NewSOC=Math.round(NewSOC)

        //Temps de la course (20km/h)
        var temps=Distancemin*60/20
        temps=Math.round(temps)

        var Distanceloop=Distancemin+distancess[ver[indexMin][des.length-1]][indexActuel]
        var SOCloop=props.SOCact-(Distanceloop*energy/33)
        SOCloop=Math.round(SOCloop)
        var suffisant=true
        var colorback="white"
        if (SOCloop<15){
            suffisant=false
            colorback="crimson"
        };
        
        
    return (
        <PaperProvider theme={theme}>
        <Header1 
        botonn1={props.botonn}
        /> 
        <View style={styles.vista,{backgroundColor: colorback, flex:1}}>
         <View style={styles.listItem} >       
            
            
            

            <View>
            {suffisant ? 
            <View>
             <View style={styles.Resultados}>
                <Title >Route à suivre:  </Title>
                <Text>{Route3}</Text>
             </View>
 
             <View style={styles.Resultados}>
                <Title>Distance: {Distancemin} km</Title>
             </View>
 
 
             <View style={styles.Resultados}>
                <Title>Temps de la course: {temps} Min </Title>
             </View>
 
             <View style={styles.Resultados}>
                <Title>Nouvel état de batterie: {NewSOC}%</Title>
             </View>
 
             <View style={styles.Resultados}>
                <Title>Distance totale: {Distanceloop}</Title>
             </View>
 
             <View style={styles.Resultados}>
                <Title>Da para volver?: {SOCloop}%</Title>
             </View>
            </View>
             :


            <View style={styles.Resultados1}>
                
                <Title style={{justifyContent:'flex-start'}}>La batterie n'est pas suffisante pour faire le trajet</Title>
                <Image style={styles.logo}
                    source={require('./nobattery.png')}
                />
                
                
            </View>
            } 
            
            </View>
            
        </View>
        </View>
    
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    listItem: {

        /* padding: 10,
        marginVertical: 10, */
        padding:'8%',
        /* flex:1, */
        alignItems:"flex-start",
        justifyContent:"center"
        
        },
        logo: {
            justifyContent:'center',
            alignItems:'center',
            width: 180,
            height: 170,
            marginTop:50,
            
          },

        Resultados: {
            marginVertical: 10, 
            
            },
        Resultados1: {
            alignItems: 'center',
            marginVertical: 10,
            justifyContent: 'center',
            flex:1,
             
            
            },
        vista: {
            flex: 1, 
                      
            },

        
            
}); 
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ffd700',
      accent: 'black',
    },
}
        



export default Resultado;