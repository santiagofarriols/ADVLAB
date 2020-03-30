import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default class ListV extends React.Component {
  render() {
    return (
      <Appbar style={styles.bottom}>
        <Appbar.Action icon="dump-truck"  onPress={() => console.log('Pressed archive')} />
        <Appbar.Action icon="truck" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="car-estate" onPress={() => console.log('Pressed label')} />
        
      </Appbar>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});