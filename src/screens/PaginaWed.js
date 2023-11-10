import React, { Component } from 'react';
import { Button, ScrollView, Image, Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default class Description extends Component {
  render() {
    const { hero } = this.props.route.params;
    return (
      <ScrollView>
        <Image
          source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }}
          style={styles.heroImage}
        />
        <Text style={styles.heroName}>{hero.name}</Text>
        <TouchableOpacity
          style={styles.webPageButton}
          onPress={() => this.props.navigation.navigate('WebPage', { link: hero.urls })}
        >
          <Text style={styles.buttonText}>Web Page</Text>
        </TouchableOpacity>
        <Text style={styles.heroDescription}>{hero.description}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  heroImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    borderRadius: 10,
    marginBottom: 10,
  },
  heroName: {
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  webPageButton: {
    backgroundColor: '#f4511e',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  heroDescription: {
    padding: 10,
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
  },
});
