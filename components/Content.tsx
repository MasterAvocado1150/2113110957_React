import { Alert, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/style";


type ContentProps = {
  message: string;
  fullname: string;
};

const Content = ({message, fullname}:ContentProps) => {
  const onClickMe = () => {
    Alert.alert("Hello", "Input your fullname");
  };

  const [displayFullname, setDisplayFullname] = React.useState('');

  const handButtonClick = () => {
    setDisplayFullname(fullname);
    Alert.alert("Hello" , `Input your fullname : ${fullname}`);
  }

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>

      <Button
        title="Click Me"
        onPress={handButtonClick}
        color="blue"
        /* onPress={() => {
          Alert.alert("Hi", "React Native is fun");
        }} */
      />
    </View>
  );
};

export default Content;
