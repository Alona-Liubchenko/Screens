import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View, StyleSheet } from "react-native";
import RegistrationScreen from "./screens/auth/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen/LoginScreen";
import PostsScreen from "./screens/main/PostsScreen";
import CreatePostsScreen from "./screens/main/CreatePostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const useRout = (isAuth) => {
  if(!isAuth){return(
 <AuthStack.Navigator>
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={RegistrationScreen}
          />
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
    </AuthStack.Navigator>)
  }
  return ( <MainTab.Navigator>
          <MainTab.Screen
            options={{ headerShown: false }}
            name="Posts"
            component={PostsScreen}
          />
          <MainTab.Screen
            options={{ headerShown: false }}
            name="Create"
            component={CreatePostsScreen}
          />
          <MainTab.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={ProfileScreen}
          />
        </MainTab.Navigator>)
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const routing = useRout({})
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={styles.screen} onLayout={onLayoutRootView}>
       {routing}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});


