import React from 'react';
import { ScrollView, TouchableOpacity, View, FlatList, Text, Image, StyleSheet } from 'react-native';
import md5 from 'js-md5';

const BACKGROUND_IMAGE = require('../assets/hero1.jpg'); // Ruta de tu imagen de fondo

const PUBLIC_KEY = '4e8241524961595b080076b5dce70b41';
const PRIVATE_KEY = '89713b72cb99246f33e08f27b9d7805acc1f42e8';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Heroes',
  };

  state = {
    data: [],
  };

  async componentDidMount() {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    );

    const responseJson = await response.json();
    this.setState({ data: responseJson.data.results });
  }

  renderItem = ({ item }) => {
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => this.onItemPress(item)} style={styles.heroItem}>
          <Image style={styles.heroImage} source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
          <View style={styles.heroDetails}>
            <Text style={styles.heroName}>{item.name}</Text>
            <Text style={styles.heroDescription}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  onItemPress = (item) => {
    this.props.navigation.navigate('Description', { hero: item });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={BACKGROUND_IMAGE} style={styles.backgroundImage} />
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fondo negro
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
  },
  heroItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 1, 0, 0.8)', // Fondo rojo transparente
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  heroImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  heroDetails: {
    marginLeft: 20,
  },
  heroName: {
    color: '#fff', // Texto blanco
    fontWeight: 'bold',
    fontSize: 20,
  },
  heroDescription: {
    color: '#fff', // Texto blanco
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Línea de separación semi-transparente
  },
});
