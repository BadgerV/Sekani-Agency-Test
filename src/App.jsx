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

  //mock loading functionality
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, []);

  // call the necessary actions from the redux state to set the heights
  //  of the containers and calculate the height of the bottom scroller

  useEffect(() => {
    if (isLoading === false) {
      dispatch(setHeightOfScreen(appRef.current?.offsetHeight));
      dispatch(setTopHeightFirst(topRef.current?.offsetHeight));
      dispatch(setHeightOfFooter(footerRef.current?.offsetHeight));
      dispatch(setHeightOfBottomScroller());
    }
  }, [isLoading]);

  const handleResize = () => {
    // This function will be called whenever the window size changes
    dispatch(setHeightOfScreen(appRef.current?.offsetHeight));
    dispatch(setTopHeightFirst(topRef.current?.offsetHeight));
    dispatch(setHeightOfFooter(footerRef.current?.offsetHeight));
  };

  //useEffect to monitor screen changes
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
