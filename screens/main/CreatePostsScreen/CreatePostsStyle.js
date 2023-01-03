import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // justifyContent: "center",
  },
  camera: {
    height: 240,
    borderRadius: 20,
    marginTop: 32,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  boxIcon: {
    height: 60,
    width: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  textImage: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginHorizontal: 16,
  },
  form: {
    width: "100%",
    marginTop: 22,
    backgroundColor: "#fff",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    marginBottom: 8,
    marginHorizontal: 16,

    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    color: "#212121",
  },
  button: {
    marginHorizontal: 16,
    height: 51,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  deleteIcon: {
    alignItems: "center",
    marginTop: 20,
  },
});
