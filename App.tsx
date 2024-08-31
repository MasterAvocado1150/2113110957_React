import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylesPractice } from "./styles/style";
import React, { useState, useEffect } from "react";
import ProfileScreen from "./components/ProfileScreen";
import Login from "./components/Login";
import FlastListExample from "./components/FlastListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";
import NewsApp from "./components/NewsApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiosPostData from "./components/AxiosPostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";
import ModelExample from "./components/ModelExample";
import WeatherApp from "./components/WeatherApp";

export default function App(): React.JSX.Element {
  return (
    <View>
      {/* <FlastListExample/> */}
      {/* <FlatListcallBackend/> */}
      {/* <NewsApp/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      {/* <ModelExample/> */}
      <WeatherApp/>
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
