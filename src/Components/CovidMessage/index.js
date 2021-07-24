import React from 'react'
import {Text, View } from 'react-native'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>upgradring this package require font files to be linked</Text>
      <Text style={styles.learnMore}>Learn more
       <MaterialIcons name="arrow-right" type="" size={16} />
      </Text>
     
    </View>
  )
}

export default CovidMessage;


