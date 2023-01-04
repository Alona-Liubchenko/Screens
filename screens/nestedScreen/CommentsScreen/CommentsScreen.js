import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import db from "../../../firebase/config";
import { Feather } from "@expo/vector-icons";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState("");
  const [allComments, setAllComents] = useState([]);
  const { login } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPost();
  }, []);
  const createPost = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, login });
  };
  const getAllPost = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((data) =>
        setAllComents(data.docs.map((doc) => ({ ...doc.data() })))
      );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Text>{item.login}</Text>
              <Text>{item.comment}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"comment..."}
          onChangeText={setComment}
        />

        <TouchableOpacity onPress={createPost} style={styles.sendBtn}>
          <Feather name="arrow-up" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  commentContainer: {

    backgroundColor:"#F6F6F6",

    marginHorizontal: 10,
    padding: 10,
    marginBottom: 10,
  },
 
  input: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    textAlign: "left",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    marginBottom: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    paddingLeft: 16,
  },
  sendBtn: {
    backgroundColor: "#FF6C00",
    height: 34,
    width: 34,
    borderRadius: 50,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 16,
    top: 10,
  },

  inputContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    position: "relative",
  },
});

export default CommentsScreen;
