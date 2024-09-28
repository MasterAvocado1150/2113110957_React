// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import React, { Component, useState } from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import PostScreen from "./screens/PostScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";

import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";

//redux ex import
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";

import { useAppSelector, useAppDispatch } from "./redux-toolkit/hooks";
import { selectAuthState, setIsLoading, setIsLogin, setProfile } from "./auth/auth-aliec";
import { ActivityIndicator } from "react-native";
import { getProfile } from "./services/auth-servise";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

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
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Detail" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  //ใช้ useAppselect เพื่อดึง State store
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await getProfile();
      if (response?.data.data.user) {
        dispatch(setProfile(response.data.data.user))
        dispatch(setIsLogin(true));
      }else{
        dispatch(setIsLogin(false));
      }
    } catch (error) {
      console.log(error);
    }finally{
      dispatch(setIsLoading(false));
    }
  }

  useFocusEffect(
    React.useCallback(()=>{
      checkLogin();
    },[])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
