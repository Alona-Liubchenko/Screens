import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import * as Location from "expo-location";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import db from "../../../firebase/config";
import { styles } from "./CreatePostsStyle";

// const initialState = {
//   photo: "",
//   title: "",
//   location: "",
// };

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState();
  // const [state, setState] = useState();
  const [comment, setComment] = useState("");
  const [location, setLocation] = useState(null);

   const { userId, login } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let locationRes = await Location.getCurrentPositionAsync({});
      setLocation(locationRes);
    })();
  }, []);
  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();

    setPhoto(photo.uri);
  };

  const sendPhoto = async () => {
    uploadPostToServer();
    // const location = await Location.getCurrentPositionAsync();
    navigation.navigate("Posts", { photo });
  };
  const uploadPostToServer = async () => {
    const photo = await uploadPhotoToServer();
    console.log( userId, comment, login)
    const createPost = await db
      .firestore()
      .collection("posts")
      .add({ photo, comment, location: location.coords, userId, login });
  };
  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();
    const uniquePostId = Date.now().toString();
    const data = await db.storage().ref(`postImage/${uniquePostId}`).put(file);
    const processedPhoto = await db
      .storage()
      .ref("postImage")
      .child(uniquePostId)
      .getDownloadURL();
    return processedPhoto;
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 100, width: 100 }}
            />
          </View>
        )}
        <TouchableOpacity style={styles.boxIcon} onPress={takePhoto}>
          <View>
            <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          </View>
        </TouchableOpacity>
      </Camera>
      <Text style={styles.textImage}>Download photo</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          selectionColor={"#212121"}
          value={comment}
          placeholder={"Title..."}
          placeholderTextColor={"#BDBDBD"}
          onChangeText={setComment}
        />
        <TextInput
          style={styles.input}
          selectionColor={"#212121"}
          value={location}
          placeholder={"Location..."}
          placeholderTextColor={"#BDBDBD"}
          onChangeText={setLocation}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonTitle} onPress={sendPhoto}>
            Publish
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.deleteIcon}>
        <AntDesign name="delete" size={24} color="#DADADA" />
      </View>
    </View>
  );
};

export default CreatePostsScreen;
