import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const index = props => {
  const {type} = props;
  const getImage = () => {
    if (type.type == 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
    if (type.type == 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }
    return require('../../assets/images/UberXL.jpeg');
  };

  return (
    <View  style={styles.container}>
      {/* images  */}
      <Image source={getImage()} style={styles.image} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name="person" size={20} />3
        </Text>
        <Text style={styles.time}>{type.duration} minutes</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="pricetags" size={18} color={'#42d742'} />
        <Text style={styles.price}>
          {''}ugx {type.price}
        </Text>
      </View>
    </View>
  );
};

export default index;
