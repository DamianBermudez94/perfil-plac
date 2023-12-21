import Logo from "../Assets/logo-footer-3.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-section-one">
      <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
        <div className="footer-logo-container">
          <img src={Logo} alt="" className="logo-footer" />
        </div>
        <div className="footer-">
          <p>@2023 por Perfil-Plac innovación</p>
          <span>Creado por DB|WEB &#169;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
