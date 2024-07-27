import { StyleSheet } from "react-native"

 export default StyleSheet.create ({
  container: {
    alignItems: "center",
    padding: 20,
    borderColor: "#deb887", // burlywood color
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
    elevation:5,
    marginTop:20,
  },
  profileName:{
    fontSize:20,
    color: "#deb887",
  }
})