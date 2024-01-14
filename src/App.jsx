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
  setLoading,
} from "./redux/slices/generalSlice";

import { useSelector } from "react-redux";

import Footer from "./components/Footer/Footer";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";

function App() {
  const dispatch = useDispatch();
  const appRef = useRef(null);
  const topRef = useRef(null);
  const footerRef = useRef(null);

  const isLoading = useSelector((state) => state.general.isLoading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      dispatch(setHeightOfScreen(appRef.current?.offsetHeight));
      dispatch(setTopHeightFirst(topRef.current?.offsetHeight));
      dispatch(setHeightOfFooter(footerRef.current?.offsetHeight));
      dispatch(setHeightOfBottomScroller());
    }
  }, [isLoading]);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="App" ref={appRef}>
          <div className="app--top" ref={topRef}>
            <Navbar />
          </div>
          <Splash />
          <div className="app-footer" ref={footerRef}>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
