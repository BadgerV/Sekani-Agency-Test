import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Splash from "./components/Splash/Splash";

import { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import {
  setHeightOfBottomScroller,
  setHeightOfFooter,
  setHeightOfScreen,
  setTopHeightFirst,
} from "./redux/slices/generalSlice";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const appRef = useRef(null);
  const topRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    dispatch(setHeightOfScreen(appRef.current.offsetHeight));
    dispatch(setTopHeightFirst(topRef.current.offsetHeight));
    dispatch(setHeightOfFooter(footerRef.current.offsetHeight));

    // console.log(appRef.current.offsetHeight, topRef.current.offsetHeight);

    dispatch(setHeightOfBottomScroller());
  }, []);

  return (
    <div className="App" ref={appRef}>
      <div className="app--top" ref={topRef}>
        <Navbar />
      </div>
      <Splash />
      <div className="app-footer" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="cont">
        <svg
          className="first"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1677.62 51.93"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              y1="25.96"
              x2="1677.62"
              y2="25.96"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#3fceee" />
              <stop offset="0.56" stopColor="#4ae2fa" />
              <stop offset="1" stopColor="#3fceee" />
            </linearGradient>
          </defs>
          <title>circuit line 1</title>
          <polyline
            points="0 47.08 300.17 47.08 346.25 1 617.83 1 650.19 24.04 1248.73 24.04 1286.97 1 1626.69 1 1676.91 51.22"
            style={{
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
              stroke: "url(#linear-gradient)",
            }}
          />
        </svg>
        <svg
          className="second"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1677.62 51.93"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              y1="25.96"
              x2="1677.62"
              y2="25.96"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="red" />
              <stop offset="0.56" stopColor="red" />
              <stop offset="1" stopColor="red" />
            </linearGradient>
          </defs>
          <title>circuit line 1</title>
          <polyline
            ref={lineRef}
            points="0 47.08 300.17 47.08 346.25 1 617.83 1 650.19 24.04 1248.73 24.04 1286.97 1 1626.69 1 1676.91 51.22"
            style={{
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
              stroke: "red",
            }}
          />
        </svg>
      </div>
      <div className="another-div">
        <span>this is actualy wrong</span>
      </div> */
}
