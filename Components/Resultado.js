import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar, IconButton, Card, Title, Paragraph,Surface,Text, Button,DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Header1 from './Header1';


//Definition de matrix distances entre les villages. L'ordre c'est celui de "noms"
const distancess = [[0, 3.3, 4.8, 5.7, 4],
                    [3.3 , 0, 4, 3, 2],
                    [4.8, 4, 0, 4, 2.9, 2],
                    [5.7, 3, 4, 0, 1.7 ],
                    [4, 2, 2, 1.7, 0]];

//Villages dans la zone d'activité                    
const noms = ['Sandiara', 'Faylar', 'Sessene','Gohe','Ndiobene']


const Resultado = props => {


    
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
    for (var i = 0; i < noms.length; i++) {
        {noms[i]==props.title? indexActuel=i :null};
        }

    //On crée un array (des) des index de "noms" des destinations
    for (var i=0; i<props.destinations.length; i++){
        for (var j = 0; j < noms.length; j++) {
            {noms[j]==props.destinations[i] ? des.push(j) :null};
        }}



    
    //Création de matrix des destins permutés
    ver=permute(des);
    var gl=[]
    //Route final
    var Route=[]
    
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
            Route.push(noms[ver[indexMin][i]])
                
            }
        var Route2=Route.join(',');


        //SOC après la course

        var Consommation = Distancemin*0.275 //Consomation de 0.33kWh par km
        var NewSOC=props.SOCact-(Consommation*100/33)
    return (
        <PaperProvider theme={theme}>
        <Header1/> 
         <View style={styles.listItem} >       
            
            
            
            
            <Text>DistanceMin={Distancemin}</Text>
            <Text>RUTA={Route2}</Text>
            <Text>Nouvel SOC={NewSOC}</Text>

        </View>
    
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        
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