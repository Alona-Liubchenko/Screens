import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "../../../firebase/config";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./PostsScreenStyle";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const { login } = useSelector((state) => state.auth);
  console.log(login);
  const getAllPost = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };
  useEffect(
    () => {
      getAllPost();
      // if (route.params) {
      //   setPosts((prevState) => [...prevState, route.params]);
      // }
    },
    [
      // route.params
    ]
  );
  console.log(posts);
  return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <Image
          style={styles.imageAvatar}
          source={require("../../../assets/images/user.jpg")}
        />

        <View style={styles.boxUserInfo}>
          <Text style={styles.userName}>{login}</Text>
          <Text style={styles.userMail}>{}</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.postsBox}>
            <Image sourse={{ uri: item.photo }} style={styles.postsImage} />
            <View>
              <Text>{item.comment}</Text>
            </View>
            <View style={styles.infoBox}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Comments", { postId: item.id })
                }
              >
                <Fontisto name="comment" size={24} color="#BDBDBD" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Map", { location: item.location })
                }
              >
                <Text>
                  <SimpleLineIcons
                    name="location-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                  location
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PostsScreen;
