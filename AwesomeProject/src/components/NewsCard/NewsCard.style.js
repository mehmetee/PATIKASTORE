import {StyleSheet,Dimensions,} from 'react-native';

export default StyleSheet.create({
 container:{
     backgroundColor:"#dddddd",
     flex:1,
     margin:7,
     borderRadius:5,
 },
image:{
    height:Dimensions.get("window").height /3,
    width: Dimensions.get("window").width -1000,
    marginLeft:10,
    marginRight:10,
    marginTop:15,
    borderRadius:5,
    resizeMode:'stretch',
    flex:1,
},
title:{
fontWeight:'bold',
fontSize:25,
color:'black',
marginLeft:13,
flex:1,
},
price:{
fontWeight:'bold',
fontSize:20,
marginLeft:13,
flex:1,

},
instock:{
fontSize:20,
flex:0,
flexDirection:'column-reverse',
color:'red',
fontWeight:'bold',
marginLeft:13,

},

})