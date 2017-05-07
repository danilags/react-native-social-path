import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {
  Container,
  Icon,
  Body,
  Title,
  Header,
  H1,
  Content, Form, Item, Input,Label, Button
} from 'native-base';

import FooterPath from '../Footer.js';

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

  }

  static navigationOptions = {
    headerTitle: 'SignIn',
    headerTintColor: '#F44336'
  };

  render () {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        >

        <Image
          style={styles.backgroundImage}
          source={{ uri : 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/YDSEFFR6P3.jpg' }}

        >
          <View
            style={{
              width: '80%',
              height: '60%',
            }}
          >
            <H1 style={{
              textAlign: 'center',
              color: '#F44336'
            }}>Welcome</H1>
              <Form>
                <Item

                  floatingLabel
                  style={styles.inputan}
                  >
                  <Label
                    style={{color: '#F44336'}}
                    >Username</Label>
                  <Input
                    style={{color: '#F44336'}}
                  />
                </Item>
                <Item floatingLabel>
                  <Label
                    style={{color: '#F44336'}}
                    >Password</Label>
                  <Input
                    style={{color: '#F44336'}}
                  />
                </Item>
              </Form>
              <Button
                full rounded danger
                style={{ marginTop: 20}}
                >
                <Text
                  style={{color: '#fff'}}
                  >SignIn</Text>
              </Button>
              <Button
                full rounded danger
                style={{ marginTop: 20}}
                >
                <Text
                  style={{color: '#fff'}}
                  >Create Account</Text>
              </Button>
          </View>
        </Image>
        <FooterPath />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentLogin: {

  },
  backgroundImage: {
    flex: 1,
    zIndex: 100,
    resizeMode: 'cover',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoginPage
