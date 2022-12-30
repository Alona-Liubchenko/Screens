import React, { useState, useEffect } from "react";
import { styles } from "./RegistrationScreenStyle";
// // import AddIcon from "../assets/images/icons/add.png";
// import { AntDesign } from "@expo/vector-icons";

import {
  Image,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);
    return () => dimensionsHandler.remove();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/images/photoBG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 32 : 78,
                width: dimensions,
              }}
            >
              <View style={styles.avatarSceleton}>
                <Image
                  source={require("../../../assets/images/icons/add.png")}
                  fadeDuration={0}
                  style={{ ...styles.addIcon, width: 25, height: 25 }}
                />
              </View>
              <View style={styles.heder}>
                <Text style={styles.hederTitle}>Registration</Text>
              </View>

              <TextInput
                style={styles.input}
                selectionColor={"#212121"}
                placeholder={"Login"}
                placeholderTextColor={"#BDBDBD"}
                value={state.login}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, login: value }));
                }}
              />
              <TextInput
                style={styles.input}
                placeholder={"Email"}
                placeholderTextColor={"#BDBDBD"}
                value={state.email}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, email: value }));
                }}
              />
              <View
                style={
                  isShowKeyboard
                    ? [styles.wrapPassword, { marginBottom: 0 }]
                    : styles.wrapPassword
                }
              >
                <TextInput
                  style={styles.input}
                  placeholder={"Password"}
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={!showPassword ? true : false}
                  value={state.password}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) => {
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }));
                  }}
                />
                <Text
                  style={styles.inputPasswordText}
                  onPress={handleTogglePassword}
                >
                  {!showPassword ? "Show" : "Hide"}
                </Text>
              </View>
              <View style={{ display: isShowKeyboard ? "none" : "flex" }}>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnTitle}>Sign up</Text>
                </TouchableOpacity>
                <View style={styles.warning}>
                  <Text style={styles.warningText}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    activeOpacity={0.7}
                    style={styles.warningBtn}
                  >
                    <Text style={styles.warningBtnTitle}>Sign in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
