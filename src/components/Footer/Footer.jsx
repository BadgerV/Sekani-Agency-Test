import { CrawlingFooterSVG, FooterSVG } from "../common/FooterSVG";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--absolute">
        <FooterSVG />
        <CrawlingFooterSVG />
      </div>

      <div className="footer--pagination__container">
        <button>
          <ArrowLeftIcon />
        </button>

        <div className="footer--pagination__center">
          <span>Page:</span>
          <span className="page__number">20</span>
          <span className="total__pages">5656</span>
        </div>
        <button>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Footer;
