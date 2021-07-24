import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeMap = () => {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: '#a0abff',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Text> I am map </Text>
    </View>
  );
};

export default HomeMap;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
