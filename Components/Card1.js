import * as React from 'react';
import { Avatar, IconButton, Card, Title, Paragraph,Surface } from 'react-native-paper';
import { StyleSheet,TouchableOpacity,View } from 'react-native';



const Card1 = props => (
  <View style={styles.paquete}>
  <Card style={styles.cardstyle}>
      
        <Card.Title  
            title={props.title} 
            subtitle="ss" 
            right={(props)=> 
                <Card.Actions>
                  
                    
                    
                </Card.Actions>}
            left={(props) => <Avatar.Icon {...props} icon="truck" />} />
            
      
   
     </Card>
     
     <IconButton 
     size={25} 
     icon='delete' 
     onPress={props.onDelete.bind(this,props.id)} 
     style={styles.botondelete}>
    </IconButton>
  </View>
);

const styles = StyleSheet.create({
    paquete: {
      padding: 8,
      height: 80,
      width: '100%',
      flex:1,
      flexDirection:'row',
      elevation: 4,
    },

    botondelete: {
      padding: 0,
      height: 80,
      width: '15%',
      
      
      elevation: 5,
    },
    cardstyle: {
      padding: 0,
      height: 70,
      width: '85%',
      flex:1,

      elevation: 5, 
      marginVertical:10, 
     
      
      
      
      elevation: 4,
    },
  });

export default Card1;