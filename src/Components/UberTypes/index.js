import React from 'react'
import { View, Text,Pressable} from 'react-native'
import styles from './styles'
import UberTypesRows from '../uberTypeRows'
import type from '../../assets/data/types'
const index = () => {
  return (
    <View>
      {
        type.map((type)=><UberTypesRows key={type.id} type={type} />
        )
      }
      <Pressable
       style={{ 
          backgroundColor:'black',
          padding:10,
          margin:10,
          alignItems:'center'
        }}
      ><Text
        style={{ 
          color:'white',
         
         }}
      >Confirm Uber</Text></Pressable>
    </View>
  )
}

export default index
