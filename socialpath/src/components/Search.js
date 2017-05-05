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

const SearchPath = () => {
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
          <Input placeholder="Search" />
        <Icon name="ios-people" />
      </Item>
      <Button transparent>
          <Text>Search</Text>
      </Button>
    </Header>
  )
}

export default SearchPath
