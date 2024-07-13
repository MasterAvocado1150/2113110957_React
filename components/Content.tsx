import { Alert, StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Content = () => {
  const onClickMe = () => {
    Alert.alert("Hello", "Input your fullname");
  };

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Message from App.tsx</Text>

      <Button
        title="Click Me"
        onPress={onClickMe}
        color="blue"
        /* onPress={() => {
          Alert.alert("Hi", "React Native is fun");
        }} */
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
