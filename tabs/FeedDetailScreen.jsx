
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const FeedDetailScreen = ({route}) => {
  const {feed} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: feed}} style={styles.image} />
      <Text style={styles.description}> Caption </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  description: {
    margin: 20,
    fontSize: 18,
  },
});

export default FeedDetailScreen;
