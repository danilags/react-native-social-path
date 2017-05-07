import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native'

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
  Fab} from 'native-base';

import MapView from 'react-native-maps';

class FooterPath extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        active: 'true'
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: '#ccc'}}>
        <Footer>
          <FooterTab>
            <Button badge vertical
                onPress={() => this.props.navigation.navigate('ReadNews')}
              >
              <Badge><Text>2</Text></Badge>
              <Icon name="paper-plane" />
              <Text>Timeline</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Camera')}
              >
              <Icon
                name="camera"
              />
              <Text>Camera</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Main')}
              >
              <Icon name="navigate" />
              <Text>Location</Text>
            </Button>
            <Button>
              <Icon name="person" />
              <Text>Momen</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    )
  }

}

export default FooterPath;
