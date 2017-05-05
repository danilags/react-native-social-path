import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions
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

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Container>
        <View>
          <HeaderPath />
          <SearchPath />
        </View>

        <ContentHome />

        <FooterPath />
        <View style={styles.container2}>
        <MapView
           style={styles.map}
           initialRegion={{
             latitude: -6.260507,
             longitude: 106.781495,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
           showsUserLocation={true}
          />
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
