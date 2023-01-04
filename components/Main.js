import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useRout } from "../router";
// import db from "../firebase/config";
import { authStateChangeUser } from "../redux/auth/authOperations";

const Main = () => {
  //   //   const [user, setUser] = useState(null);
  //     // const [isAuth, setIsAuth] = useState(false);
  //   const { stateChange } = useSelector((state) => state.auth);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(authStateChangeUser());
  //   }, []);
  //   //   db.auth().onAuthStateChanged((user) => setUser(user));

  //   const routing = useRout(stateChange);

  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = useRout(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
