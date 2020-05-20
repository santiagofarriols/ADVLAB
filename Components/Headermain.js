import * as React from 'react';
import { Appbar,FAB, Portal,DefaultTheme } from 'react-native-paper';
import {StyleSheet} from 'react-native'
import ListV from './ListV';

var iconn='truck'
var iconuse="delete"
export default class Headermain extends React.Component {

  state = {
    open: false,
  };
  /* _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching'); */
    
  _onMore = () =>    <ListV/> ;

  render() {



    
    const changev = aca =>{
      
      if (aca=='master'){iconn='truck'}
      if (aca=='kangoo'){iconn='car-estate'}
      if (aca=='jinbei'){iconn='dump-truck'}

      this.props.change(aca)
      console.log(iconn)}
    return (
      <Appbar.Header style={{fontWeight: 'bold'}}>
         <Portal>
        <FAB.Group
        
         fabStyle={styles.container}
          color='black'
          open={this.state.open}
          icon={this.state.open ? 'keyboard-backspace' : iconn}
          actions={[
            { icon: 'truck', label: 'Master', onPress:() => changev('master')},
            { icon: 'car-estate', label: 'Kangoo', onPress: () => changev('kangoo') },
            { icon: 'dump-truck', label: 'Jinbei', onPress: () => changev('jinbei') },
          ]}
          onStateChange={({ open }) => this.setState({ open })}
          onPress={() => {
            if (this.state.open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
        <Appbar.Content 
        
          title="        ADVLab"
          
        />
        {/* <Appbar.Action icon="search" onPress={this._onSearch} /> */}
        {/* <Appbar.Action icon={'dots-horizontal'} onPress={this._onMore} ></Appbar.Action> */}
      </Appbar.Header>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff8dc',
    
  }});
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffd700',
    accent: 'black',
  },
};