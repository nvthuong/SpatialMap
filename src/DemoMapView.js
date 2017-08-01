import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class DemoMapView extends Component {
  constructor(props) {
    super(props);
    arrayMarkers = [
      {
        latitude: 20.993776,
        longitude: 105.811417,
      }
    ];
    this.state = {
      initialRegion: {
        latitude: 20.993776,
        longitude: 105.811417,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      },
      markers:arrayMarkers
    }
  }

  onPress(data) {
    let latitude = data.nativeEvent.coordinate.latitude;
    let longitude = data.nativeEvent.coordinate.longitude;
    console.log(latitude);
    arrayMarkers.push({
      latitude: latitude,
      longitude: longitude,
    });
    this.setState({
      markers: arrayMarkers
    })
  }

  renderMarkers() {
    markers=[];
    for(marker of this.state.markers) {
      markers.push(
        <MapView.Marker
          key={marker.longitude}
          title={'toi o day' + marker.latitude}
          description={'day la mo ta'}
          coordinate={marker}
        />
      )
    }

    return markers;
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.initialRegion}
          style={StyleSheet.absoluteFillObject}
          onPress={this.onPress.bind(this)}
        >
          <MapView.Marker
            coordinate={this.state.initialRegion}
            title={'toi o day'}
            description={'day la mo ta'}
          />
          {this.renderMarkers()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
