import { LinksFunction } from "@remix-run/node";

import homeStyles from "../styles/home/index.css";
import mainbanner from '~/assets/images/homeBanner.jpg';
import joinButton from '~/assets/images/btn_join.svg';
import aboutUs from '~/assets/images/aboutUs.png';
import aboutButton from '~/assets/images/btn_learn_more.svg';

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: homeStyles }];
};

var heroStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${mainbanner}")`
}

var buttonStyle = {
  background: `url("${joinButton}") no-repeat`
}

var aboutStyle = {
  background: `url("${aboutButton}") no-repeat`
}

export default function Index() {
  return (
    <div>
      <div className="hero-image" style={heroStyle}>
        <div className="hero-inner">
          <div className="hero-text">TIME TO PUT FITNESS FIRST</div>
          <a href="/contact"><button className="hero-button" style={buttonStyle}>Join Now</button></a>
        </div>
        <div className="hero-mobile-scroll">
          <span className="px-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>
          </span>
          SCROLL DOWN</div>
      </div>
      <div className="about-welcome">WELCOME TO <br></br>ESSENTIAL PIECE</div>
      <div className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center about-hero">
        <div className="about-img-container">
          <img
            className="about-image"
            src={aboutUs}
            alt="About Us"
          />
        </div>
        <div className="about-text">
          <div className="about-title">About Us</div>
          <div>I have a strong commitment to providing excellent experiences for clients. I have always been playing one or multiple sports, starting with youth soccer and basketball. 
            When I was 13 my first weightlifting experience was at my high school weight room for football. I’ll never forget the atmosphere, environment, and life lessons I was taught.<br></br> <br></br>  
            During college, I was known for staying in the campus gym and sharing my knowledge and experiences with my friends, as well as playing Collegiate Rugby. <br></br><br></br>  I am now experienced 
            in personal training and group exercise instruction, with a certification from NASM as well as a B.S. in Exercise Science. I would absolutely love to be apart of your fitness 
            journey and your story.</div>
          <a href="/contact"><button className="about-button" style={aboutStyle}></button></a>
        </div>
      </div>
    </div>
  );
}
