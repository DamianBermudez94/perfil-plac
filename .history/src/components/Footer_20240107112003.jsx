import Logo from "../Assets/PerfilPlac (2).png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
          <div className="footer-logo-container">
            <img src={Logo} alt="" className="logo-footer" />
          </div>
          <div className="footer-legal__text">
            <p>@2024 Perfil-Plac innovación</p>
            <span>Hecho por DB|WEB &#169;</span>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
