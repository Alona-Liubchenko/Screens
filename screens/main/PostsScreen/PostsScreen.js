import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./PostsScreenStyle";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);
  return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <Image
          style={styles.imageAvatar}
          source={require("../../../assets/images/user.jpg")}
        />

        <View style={styles.boxUserInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userMail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.postsBox}>
            <Image sourse={{ uri: item.photo }} style={styles.postsImage} />
            <View>
              <Text >Text</Text>
            </View>
            <View style={styles.infoBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
              <Fontisto name="comment" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Map")}>
              
              <Text> <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />Location</Text>
              </TouchableOpacity>
              </View>
          </View>
        )}
      />
    </View>
  );
};

export default PostsScreen;
