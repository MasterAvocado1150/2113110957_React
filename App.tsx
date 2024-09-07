// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import React, { Component } from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import PostScreen from "./screens/PostScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerStyle: { backgroundColor: "#20b2aa" },
        // headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        // options={{ title: "หน้าหลัก" }}
      />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          // headerStyle: { backgroundColor: "#20b2aa" },
          // headerTintColor: "white",
          // headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
      {/* <HomeStack.Screen name="Post" component={PostScreen} /> */}
    </HomeStack.Navigator>
  );
}


function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen
        name="Products"
        component={ProductScreen}
      />
    </ProductStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
