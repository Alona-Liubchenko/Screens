import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./screens/auth/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen/LoginScreen";
import PostsScreen from "./screens/main/PostsScreen/PostsScreen";
import CreatePostsScreen from "./screens/main/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRout = (isAuth) => {
  if (!isAuth) {
    return (
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
      </AuthStack.Navigator>

    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#212121",
        tabBarShowLabel: false,
      }}
    >
      <MainTab.Screen
        options={{
          title: "Posts",
          headerTitleAlign: "center",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: "Roboto-Bold",
            fontSize: 17,
            lineHeight: 22,
          },
          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 10 }}
            />
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="grid-outline" size={size} color={color} />
            </View>
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          title: "CreatePosts",
          headerTitleAlign: "center",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: "Roboto-Bold",
            fontSize: 17,
            lineHeight: 22,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="add" size={size} color={color} />
            </View>
          ),
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          title: "Profile",
          headerTitleAlign: "center",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: "Roboto-Bold",
            fontSize: 17,
            lineHeight: 22,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="user" size={size} color={color} />
            </View>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
