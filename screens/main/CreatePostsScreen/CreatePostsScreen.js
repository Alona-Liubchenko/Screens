import React, {
  useState,
  // useEffect
} from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import * as Location from "expo-location";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./CreatePostsStyle";

const initialState = {
  photo: "",
  title: "",
  location: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState();
  const [state, setState] = useState(initialState);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();

    setPhoto(photo.uri);
  };

  const sendPhoto = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location.coords);
    navigation.navigate("Posts", { photo });
    console.log(state);
    setState(initialState);
  };
  //       useEffect(() => {
  //     (async () => {

  //       let { status } = await Location.requestForegroundPermissionsAsync();
  //       if (status !== 'granted') {
  //         setErrorMsg('Permission to access location was denied');
  //         return;
  //       }

  //     })();
  //   }, []);
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
          value={state.title}
          placeholder={"Title..."}
          placeholderTextColor={"#BDBDBD"}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, title: value }))
          }
        />
        <TextInput
          style={styles.input}
          selectionColor={"#212121"}
          value={state.location}
          placeholder={"Location..."}
          placeholderTextColor={"#BDBDBD"}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, location: value }))
          }
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
        >
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
