import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import {
  Container,
  Content,
  ListItem,
  Text,
  CheckBox,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
  Thumbnail,
  Footer,
  FooterTab,
  Badge,
  Item,
  Input,
  Card,
  CardItem } from 'native-base';

import HeaderPath from './Header'
import SearchPath from './Search'
import FooterPath from './Footer'
import MapsPath from './Maps'
import ContentHome from './ContentHome'

import MapView from 'react-native-maps';
import axios from 'axios';

exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): React.Element<any> {
      return <GeolocationExample />;
    },
  }
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialPosition: '',
      lastPosition: {
        longitude: 0
      },
      markers: [],
      cekinlocation: '',
      typelocation: ''
    };

    this.getCurrentMarker = this.getCurrentMarker.bind(this);

  }

  static navigationOptions = {
    header: null
  };

  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = position.coords;

      let newState = {
        lastPositioncustom: {
          ...lastPosition
        }
      }
      // console.log('Ini lokasi map ---',lastPosition.latitude);
      this.setState(newState);
      this.getCurrentMarker(lastPosition.latitude, lastPosition.longitude)
    });
  }

  getCurrentMarker(lat, long) {
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=500&key=AIzaSyBVIfTeKhaUqTIWTCa3jvic4zn90EKRqAM`)
      .then(res => {
        let customData = res.data.results.map((place) => {
          console.log('this is location lohh ----',place);
          return {
            location: {
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng,
            },
            name : place.name,
            type: place.types[0],
          }
        })
        this.setState({
          markers: customData
        })
      })

      .catch(err => {console.log(err)})
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  getInitialState() {
    return {
      lastPosition: {
        latitude: this.state.lastPosition.latitude,
        longitude: this.state.lastPosition.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  cobaMethod() {
    return {
      name : ''
    }
  }

  onRegionChange(lastPosition) {
    this.setState(lastPosition );
  }

  render() {
    return (
      <Container>
        <View>
          <HeaderPath />
          <SearchPath />
        </View>

        <ContentHome location={this.state.cekinlocation} typelocation={this.state.typelocation}/>

        <FooterPath navigation={this.props.navigation} />
        <View style={styles.container2}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
          showsUserLocation={true}
          loadingEnabled={true}
        >
          {this.state.markers.map((marker, index) => (
            <MapView.Marker
              key={index}
              coordinate={marker.location}
              title={marker.name}
              onPress={() => this.setState({
                cekinlocation: marker.name,
                typelocation: marker.type
              })}
              >
                <MapView.Callout>

                </MapView.Callout>
              </MapView.Marker>
          ))}

        </MapView>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  headerCustom: {
    marginTop: 20
  },
  timeline: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  childone: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 20
  },
  childtwo: {
    flex: 2,
    alignItems: 'flex-start'
  },
  container2: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // position: 'absolute',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});


export default App;
