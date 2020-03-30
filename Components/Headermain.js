import * as React from 'react';
import { Appbar } from 'react-native-paper';
import ListV from './ListV';

var iconuse="delete"
export default class Headermain extends React.Component {
  /* _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching'); */
    
  _onMore = () =>    <ListV/> ;

  render() {
    return (
      <Appbar.Header style={{fontWeight: 'bold'}}>
        {/* <Appbar.BackAction
          onPress={this._goBack}
        /> */}
        <Appbar.Content 
        
          title="ADVLab"
          
        />
        {/* <Appbar.Action icon="search" onPress={this._onSearch} /> */}
        <Appbar.Action icon={iconuse} onPress={this._onMore} ></Appbar.Action>
      </Appbar.Header>
    );
  }
}