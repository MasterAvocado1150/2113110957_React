import { StyleSheet } from "react-native"

 export default StyleSheet.create ({
  container: {
    alignItems: "center",
    padding: 20,
    borderColor: "#7fff00", // burlywood color
  },
  profileImg: {
    borderRadius:50,
    width:100,
    height:100,
    marginRight:20,
  },
  profileContainer:{
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    padding:20,
    borderRadius:10,
    backgroundColor:"white",
    elevation:10,
    marginTop:20,
    shadowColor: "#006400"
  },
  profileName:{
    fontSize:20,
    marginLeft: 5,
    fontWeight: "bold",
    color: "#006400",
    fontStyle: 'italic',
  },
  btmargin:{
    marginTop:10,
  }
})