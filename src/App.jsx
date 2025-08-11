import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import MovieVideos from "./components/MovieVideos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Login />} />
          <Route path="browse" element={<Browse />} />
          <Route path="video/:id" element={<MovieVideos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}
export default App;
