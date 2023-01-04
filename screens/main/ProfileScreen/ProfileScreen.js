import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { authSignOutUser } from "../../../redux/auth/authOperations";
import db from "../../../firebase/config";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);
  //  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const { userId, login } = useSelector((state) => state.auth);

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
      );
  };
  const signOut = () => {
    dispatch(authSignOutUser());
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/images/photoBG.jpg")}
      >
        <View style={styles.form}>
          <View style={styles.avatarSceleton}>
            <AntDesign
              name="closecircleo"
              size={24}
              color="#E8E8E8"
              style={styles.addIcon}
            />
          </View>
          <View style={styles.heder}>
            <Text style={styles.hederTitle}>{login}</Text>
          </View>
          <TouchableOpacity onPress={signOut}>
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={styles.outIcon}
            />
          </TouchableOpacity>
          <View>
            <FlatList
              data={userPosts}
              keyExtractor={(item, indx) => indx.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    marginBottom: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.photo }}
                    style={{ width: 350, height: 200 }}
                  />
                </View>
              )}
            />
          </View>
        </View>

        {/* </KeyboardAvoidingView> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //     justifyContent: "center",
    //  backgroundColor: "#FFFFFF",
  },
  btn: {
    marginTop: 50,
  },
  form: {
    marginTop: 80,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heder: {
    marginBottom: 32,
  },
  hederTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    marginTop: 16,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
  },
  avatarSceleton: {
    position: "absolute",
    top: -60,
    left: "50%",
    marginLeft: -60,

    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addIcon: {
    position: "absolute",
    bottom: 14,
    right: -13,
  },
  outIcon: {
    position: "absolute",
    bottom: 80,
    right: 16,
    // top:20,
  },
});

export default ProfileScreen;
