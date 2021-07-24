import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeMap from '../../Components/HomeMap/index'
import CovidMessage from '../../Components/CovidMessage/index'
import HomeSearch from '../../Components/HomeSearch/index'
const HomeScreen = () => {
  return (
    <View>
     <HomeMap/>
     <CovidMessage/>
      <HomeSearch/>
    </View>
  )
}

export default HomeScreen


