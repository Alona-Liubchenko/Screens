import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  boxImage: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  imageAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  boxUserInfo: {
    flex: 1,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userMail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
  },
});