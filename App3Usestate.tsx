import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylesPractice } from "./styles/style";
import React, { useState, useEffect } from "react";

export default function App(): React.JSX.Element {
  const [fullname, setfullname] = useState("");
  const [message, setmessage] = useState("Message from App.tsx");
  const [footerMessage, setFooterMessage] = useState(
    "Thai-Nichi Institute of technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  useEffect(() => {
    console.log(`Fullname has changed to : ${fullname}`);
  }, [fullname]);

  const handleButtonClick = () =>{
    Alert.alert("Hello" , `Input your fullname : ${fullname}`);
  }

  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message} />

      {/* <Content message={message} fullname= {fullname}/> */}
      <Content message={message} onButtonClick = {handleButtonClick}/>

      <AppFooter footerMessage={footerMessage} />
      {/* <StatusBar style="auto" /> */}

      <View style={{alignItems:"center"}}>
        <TextInput
          style={stylesPractice.input}
          placeholder="Enter your fullname"
          value={fullname}
          onChangeText={setfullname}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
