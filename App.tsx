import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylesPractice } from "./styles/style";
import React, { useState, useEffect } from "react";
import ProfileScreen from "./components/ProfileScreen";
import Login from "./components/Login";

export default function App(): React.JSX.Element {
  return (
    <View>
      <ProfileScreen />

      <Login/>
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
