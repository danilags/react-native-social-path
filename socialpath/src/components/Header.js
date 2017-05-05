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
  Input } from 'native-base';

  const HeaderPath = () => {
      return (
        <View>
          <Header style={{ backgroundColor: '#e52f17' }}>
            <Left>
              <Button transparent>
                <Icon name='star'
                  style={{ color: '#f8fdfd', fontSize: 22 }}
                />
              </Button>
            </Left>
            <Body>
              <Title
                style={{ color: '#fff', fontSize: 24 }}
              >Path</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='grid'
                  style={{ color: '#f8fdfd', fontSize: 22 }}
                />
              </Button>
            </Right>
          </Header>
        </View>
      )
  }

  export default HeaderPath;
