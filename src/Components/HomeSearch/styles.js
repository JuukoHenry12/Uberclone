import { StyleSheet } from "react-native";
const styles =StyleSheet.create({
  inputBox:{
   backgroundColor:'#d9d9d9',
   margin:10,
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   padding:10
  },
  inputText:{
   fontSize:20,
   fontWeight:'500',
   color:'#6e6e6e',
  },
  timeContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:70,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:50,
  },
  row:{
   flexDirection:'row',
   alignItems:'center',
   padding:10,
   borderBottomWidth:1,
   borderColor:'#b3b3b3',
  },
  iconContainer:{
   backgroundColor:'#b3b3b3',
   padding:10,
   borderRadius:10
  },
  destinationText:{
   marginLeft:15,
   fontWeight:'500',
   fontSize:16
  }
})
export default styles;