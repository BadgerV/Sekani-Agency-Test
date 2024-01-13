import "./SimpleSVG.css";
import { useRef, useEffect } from "react";

export const BackgroundSVG = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const lineLength = lineRef.current.getTotalLength();
    console.log("Line Length:", lineLength);
  }, []);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1914.67 51.93"
        className="first-svg"
      >
        <title>top circuit line</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <polyline
              ref={lineRef}
              points="0 4.85 300.17 4.85 346.25 50.93 514.42 50.93 559.23 5.44 1572.64 5.44 1618.54 50.93 1863.74 50.93 1913.96 0.71"
              style={{
                fill: "none",
                stroke: "#15588d",
                strokeMiterlimit: 10,
                strokeWidth: "2px",
                opacity: 0.5,
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export const CrawlingSVG = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1914.67 51.93"
        className="second-svg"
      >
        <title>top circuit line</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <polyline
              points="0 4.85 300.17 4.85 346.25 50.93 514.42 50.93 559.23 5.44 1572.64 5.44 1618.54 50.93 1863.74 50.93 1913.96 0.71"
              style={{
                fill: "none",
                stroke: "#74e9fc",
                strokeMiterlimit: 10,
                strokeWidth: "2px",
                opacity: 0.5,
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
