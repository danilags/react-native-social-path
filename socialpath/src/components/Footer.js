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

class FooterPath extends React.Component {
  constructor() {
    super()
    this.state = {
        active: 'true'
    };
  }

  render() {
    return (
      <View>
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="paper-plane" />
              <Text>Timeline</Text>
            </Button>
            <Button >
              <Icon
                name="camera"
              />
              <Text>Camera</Text>
            </Button>
            <Button>
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
