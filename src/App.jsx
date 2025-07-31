import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/Firebase";
import { addUser, removeUser } from "./utils/UserSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
        }))
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Login />} />
          <Route path="browse" element={<Browse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}
export default App;
