import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./PostsScreenStyle";

const PostsScreen = () => {
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
    </View>
  );
};


export default PostsScreen;
