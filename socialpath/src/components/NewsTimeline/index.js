import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import {
  Container,
  Spinner,
  List,
  Content,
  Body,
  ListItem
} from 'native-base';

import { connect } from 'react-redux';

import { fetchNews } from '../../actions/actionCreators';


import FooterPath from '../Footer.js';

class ReadNews extends React.Component {
  constructor(props) {
    super(props)

  }

  static navigationOptions = {
    headerTitle: 'Top News',
    headerTintColor: '#F44336'
  };

  componentDidMount() {
    this.props.fetchNews()
  }

  render () {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <ScrollView>
          { this.props.news.length == 0 ? <Spinner color={red} /> :
            <View>
              <Image
                style={{ width: '100%', height: 200}}
                source={{ uri : this.props.news[1].urlToImage }}
              />
              <Text
                style={styles.titlenews}
              >{ this.props.news[1].title }</Text>
              <Text
                style={styles.titlenewsChild2}
              >{ this.props.news[1].publishedAt }</Text>
              <Text
                style={styles.desc}
              >{ this.props.news[1].description }</Text>
            </View>
          }

          { this.props.news.length == 0 ? <Spinner color={red}/> :

            this.props.news.map((data, index) =>(
              index !== 1 && <View key={index}>
                <Content>
                  <List>
                    <ListItem>
                      <Image
                        style={{ width: '50%', height: 100}}
                        source={{ uri : data.urlToImage }}
                      />
                      <Body>
                        <Text
                          style={styles.titlenewsChild}
                        >{ data.title }</Text>
                        <Text
                          style={styles.titlenewsChild2}
                        >{ data.publishedAt }</Text>
                      </Body>
                    </ListItem>
                  </List>
                </Content>

              </View>

            ))

          }

        </ScrollView>
        <FooterPath navigation={this.props.navigation} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  titlenews: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    padding: 10
  },
  titlenewsChild: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
  desc: {
    fontSize: 15,
    color: '#000',
    paddingLeft: 10,
    paddingRight: 10,
  },
  titlenewsChild2: {
    fontSize: 10,
    color: '#9E9E9E',
    paddingLeft: 10,
    paddingRight: 10,
  }
});

const mapStateToProps = state => ({
  news : state.news
})

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadNews)
