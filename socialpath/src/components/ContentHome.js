import React from 'react'

import {
  AppRegistry,
  StyleSheet,
  View,
  Image
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


class ContentHome extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <Content>
        <Card style={{ flex: 1 }}>
          <CardItem>
            <Left>
              <Thumbnail
                style={{ width: 50, height: 50 }}
                source={{ uri : 'https://scontent-sit4-1.cdninstagram.com/t51.2885-19/s150x150/15877059_1462723210434512_6530061937466671104_a.jpg'}} />
            </Left>
          </CardItem>
        </Card>
        <Card>
          <View style={styles.timeline}>
            <View style={styles.childone}>
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri : 'https://scontent-sit4-1.cdninstagram.com/t51.2885-19/s150x150/18160845_426616457705615_1589827593958326272_a.jpg'}} />
            </View>
            <View style={styles.childtwo}>
              <CardItem header>
                <Icon name="navigate" />
                 <Body>
                   <Text>At Hacktiv8 Indonesia</Text>
                   <Text note>University</Text>
                 </Body>
              </CardItem>
              <Thumbnail
                 square size={80}
                style={{ width: 200, height: 200 }}
                source={{ uri: 'https://media.istockphoto.com/photos/egg-benedict-toast-english-breakfast-plate-concept-picture-id483281364' }}/>
            </View>
          </View>
        </Card>

      </Content>
    )
  }
}

const styles = StyleSheet.create({
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
  }
});

export default ContentHome;
