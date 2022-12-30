import React, { useState, useEffect } from "react";

import {
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

import { styles } from "./LoginScreenStyle";
const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
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
                paddingBottom: isShowKeyboard ? 32 : 144,
                width: dimensions,
              }}
            >
              <View style={styles.heder}>
                <Text style={styles.hederTitle}>Log in</Text>
              </View>
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
                  <Text style={styles.btnTitle}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.warning}>
                  <Text style={styles.warningText}>Don't have an account?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Registration")}
                    activeOpacity={0.7}
                    style={styles.warningBtn}
                  >
                    <Text style={styles.warningBtnTitle}>Sign up</Text>
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
