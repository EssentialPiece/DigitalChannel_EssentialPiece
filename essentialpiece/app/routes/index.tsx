import { LinksFunction } from "@remix-run/node";

import homeStyles from "../styles/home/index.css";
import mainbanner from '~/assets/images/homeBanner.jpg';
import joinButton from '~/assets/images/btn_join.svg';

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: homeStyles }];
};

var heroStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${mainbanner}")`
}

var buttonStyle = {
  background: `url("${joinButton}") no-repeat;`
}

export default function Index() {
  return (
    <div className="hero-image" style={heroStyle}>
      <div className="hero-inner">
        <div className="hero-text">TIME TO PUT FITNESS FIRST</div>
        <button className="hero-button" style={buttonStyle}>Join Now</button>
      </div>
      <div className="hero-mobile-scroll">
        <span className="px-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg>
        </span>
        SCROLL DOWN</div>
    </div>
  );
}
