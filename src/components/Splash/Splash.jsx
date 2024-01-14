import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { setTopHeightSecond } from "../../redux/slices/generalSlice";
import SpawnComponent from "../SpawnComponent/SpawnComponent";
import Dropdown from "../Dropdown/Dropdown";
import { BackgroundSVG, CrawlingSVG } from "../common/SimpleSVGs";
import leftCircuit from "../../assets/left-circuit-fill.svg";
import rightCircuit from "../../assets/right-circuit-fill.svg";
import { spawns } from "../../utils/demo-data";
import "./Splash.css";

const Splash = () => {
  const dispatch = useDispatch();
  const bottomScrollerHeight = useSelector(
    (state) => state.general.heightOfBottomScroller
  );

  const splashFirstTopHeight = useRef(null);
  const splashSecondTopHeight = useRef(null);
  const bottomScroller = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    dispatch(
      setTopHeightSecond(
        splashFirstTopHeight.current.offsetHeight +
          splashSecondTopHeight.current.offsetHeight +
          60
      )
    );

    return () => {
      // Cleanup animation frame on component unmount
      cancelAnimationFrame(animationRef.current);
    };
  }, [dispatch, splashFirstTopHeight, splashSecondTopHeight]);

  const scrollHandler = (direction) => {
  const targetHeight = bottomScroller.current.scrollHeight;
  const currentScrollTop = bottomScroller.current.scrollTop;
  let distance =
    direction === "up" ? -currentScrollTop : targetHeight - currentScrollTop;
  const steps = 30; // Adjust the number of steps for smoothness
  const scrollStep = distance / steps;

  const scrollAnimation = () => {
    if (
      (direction === "up" && distance >= 0) ||
      (direction === "down" && distance <= 0)
    ) {
      return;
    }

    bottomScroller.current.scrollTop += scrollStep;
    distance -= scrollStep;

    // Check if reached the bottom
    if (direction === "down" && bottomScroller.current.scrollTop + bottomScroller.current.clientHeight >= targetHeight) {
      return;
    }

    animationRef.current = requestAnimationFrame(scrollAnimation);
  };

  scrollAnimation();
};


  return (
    <div className="splash">
      <div
        className="splash__top"
        ref={splashFirstTopHeight}
      >
        <BackgroundSVG />
        <CrawlingSVG />
      </div>
      <div className="splash__middle" ref={splashSecondTopHeight}>
        <div className="splash__middle--left">
          <img src={leftCircuit} alt="" />
          <span>72400 spawns</span>
          <img src={rightCircuit} alt="" />
        </div>
        <div className="splash__middle--right">
          <Dropdown title="Latest" different="true" />
        </div>
      </div>
      <div
        className="splash__bottom"
        style={{ maxHeight: `${bottomScrollerHeight}px` }}
        ref={bottomScroller}
      >
        {spawns.map((spawn, i) => (
          <SpawnComponent key={i} {...spawn} />
        ))}

        <div
          className="scroll--buttons"
          style={{ height: `${bottomScrollerHeight}px` }}
        >
          <ArrowDropUpIcon onClick={() => scrollHandler("up")} />
          <ArrowDropDownIcon onClick={() => scrollHandler("down")} />
        </div>
      </div>
    </div>
  );
};

export default Splash;
