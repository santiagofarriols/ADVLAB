import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class Header1 extends React.Component {
  
  
  _goBack = (hacer) => hacer;

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');
  

  render() {
    return (
      <Appbar.Header style={{fontWeight: 'bold'}}>
        <Appbar.BackAction
          onPress={this._goBack (this.props.botonn1)}
        />
        <Appbar.Content 
        
          title="ADVLab"
          
        />
        {/* <Appbar.Action icon="search" onPress={this._onSearch} />
        <Appbar.Action icon="more-vert" onPress={this._onMore} /> */}
      </Appbar.Header>
    );
  }
}