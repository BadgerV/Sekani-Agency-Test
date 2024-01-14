import "./FooterSVG.css";

export const FooterSVG = () => {
  return (
    <div className="footer__svg">
      <div>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 54.58"
        >
          <title>circuit line 2</title>
          <polyline
            points="0 39.97 335.47 39.97 374.44 1 1139.91 1 1192.48 53.58 1411.98 53.58 1442.03 23.52 1920 23.52"
            style={{
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
              stroke: "#15588d",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export const CrawlingFooterSVG = () => {
  return (
    <div className="footer__svg">
      <div>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 54.58"
          className="footer__svg--second"
        >
          <title>circuit line 2</title>
          <polyline
            points="0 39.97 335.47 39.97 374.44 1 1139.91 1 1192.48 53.58 1411.98 53.58 1442.03 23.52 1920 23.52"
            style={{
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
              stroke: "#74e9fc",
            }}
          />
        </svg>
      </div>
    </div>
  );
};
