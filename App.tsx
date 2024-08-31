
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

import React, { useState, useEffect } from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import PostScreen from "./screens/PostScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = (): React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="About" component={AboutScreen} />
        <HomeStack.Screen name="Post" component={PostScreen}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
