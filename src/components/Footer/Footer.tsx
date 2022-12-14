import "./Footer.scss";

import TwitterLogo from "../../assets/social/twitter.svg";
import FacebookLogo from "../../assets/social/facebook.svg";
import LinkedinLogo from "../../assets/social/linkedin.svg";
import InstagramLogo from "../../assets/social/instagram.svg";

function Footer(): JSX.Element {
  return (
    <footer>
      <nav className="footer__nav">
        <a href="#">Kontakta oss</a>
        <a href="#">Donera</a>
        <a href="#">Vad är Rescue Rabbits?</a>
      </nav>
      <section className="footer__adress">
        <p>Adress:</p>
        <p>Hundkattvägen 33</p>
        <p>663 78 Djurbo</p>
      </section>
      <section className="footer__social">
        <div className="socialWrapper">
          <p>Social media</p>
        </div>
        <div className="logoWrapper">
          <a href="#">
            <img src={TwitterLogo} alt="" />
          </a>
          <a href="#">
            <img src={FacebookLogo} alt="" />
          </a>
          <a href="#">
            <img src={LinkedinLogo} alt="" />
          </a>
          <a href="#">
            <img src={InstagramLogo} alt="" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
