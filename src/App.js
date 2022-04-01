import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NewsMain from "./components/NewsMain";
import Network from "./components/Network";

function App() {
  const [img, setImg] = useState();
  const [fet, setFet] = useState();
  // useEffect(changeImg)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    imageRendered = !imageRendered;
  });

  const currentAccount = "6241b5955f0f9cae1d24811a";

  let imageRendered = true;

  /* const changeImg = (value) => {
    setImg(value)
    // console.log(value)
  } */

  const changeFet = (value) => {
    setFet(value);
  };

  return (
    <HashRouter basename="/">
      {imageRendered ? (
        <MyNavbar image={img} funcD={fet} currentAccount={currentAccount} />
      ) : (
        <MyNavbar funcD={fet} currentAccount={currentAccount} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <NewsMain
              changeImg={(value) => setImg(value)}
              currentAccount={currentAccount}
            />
          }
        />
        <Route
          path="/profile/:profileId"
          element={
            <MainSection D={changeFet} currentAccount={currentAccount} />
          }
        />
        <Route path="/network" element={<Network />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
