import React from 'react'
import {StatusBar, View } from 'react-native'
// import HomeScreen from './src/Screens/HomeScreen/index'
// import DestinationSearch from './src/Screens/DestinationSearch/index'
import DestinationMap from './src/Screens/DestinationMap/index'
const App=()=>{
  return(
    <View>
    <StatusBar barStyle="dark-content" />
    {/* <HomeScreen /> */}
    {/* <DestinationSearch/> */}
    <DestinationMap/>
  </View>
  )
}
export default App;