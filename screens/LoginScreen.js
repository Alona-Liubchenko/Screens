import React, { useState, useEffect } from "react";

import {
  StyleSheet,
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
  email: "",
  password: "",
};

export default function RegistrationScreen() {
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
          source={require("../assets/images/photoBG.jpg")}
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
                  <Text style={styles.warningText}>
                  Don't have an account?
                  </Text>
                  <TouchableOpacity
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  form: {
    paddingTop: 32,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heder: {
    marginBottom: 32,
  },
  hederTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
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
  wrapPassword: {
    position: "relative",
    marginBottom: 27,
  },
  inputPasswordText: {
    position: "absolute",
    right: 32,
    top: 15,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  warning: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  warningText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    marginRight: 4,
  },
  warningBtn: {},
  warningBtnTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});