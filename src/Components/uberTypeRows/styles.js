import { StyleSheet } from "react-native";
const styles =StyleSheet.create({
  container:{
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   padding:10,
  },
  image:{
    width:70,
    height:70,
    resizeMode:'contain'
  },
  time:{

  },
  middleContainer:{
   flex:1,
   marginHorizontal:10
  },
  rightContainer:{
    width:100,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  price:{
   fontSize:15,
   fontWeight:'bold',
   marginLeft:5
  },
  type:{
   fontWeight:'bold',
   fontSize:20,
  },
  text:{
     fontSize:17,
     fontWeight:'600'
   }
})

export default styles