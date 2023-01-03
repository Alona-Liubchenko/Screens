import React from "react";
// import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../../main/PostsScreen/PostsScreen";
import MapScreen from "../MapScreen/MapScreen";
import CommentsScreen from "../CommentsScreen/CommentsScreen";

const NestedScreen = createStackNavigator();

export default function Home() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen name="Map" component={MapScreen} />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingVertical: 32,
//     paddingHorizontal: 16,
//   },
// });
