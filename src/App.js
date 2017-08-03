import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Realm from 'realm';
import History from './Services/Models/History';

export default class SpatialMap extends Component {

  render() {

    // // Create database for table History

    // History.write(() => {
    //   History.create('History', {Name: 'TMA 2'});
    // });

    return (
      <View style={styles.container}>
         <Text>{History.objects('History')[0].Name}</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

