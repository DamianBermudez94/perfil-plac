
import BannerBackground from "../Assets/pexels-max-rahubovskiy-6238608.jpg";

import Navbar from "../components/NavBar";
import { FiArrowRight } from "react-icons/fi";

const Inicio = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
        
        </div>
      </div>
    </div>
  );
};

export default Inicio;
