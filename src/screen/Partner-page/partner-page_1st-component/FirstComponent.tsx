import "./first-component.css";
import Rightarrow from "@/assets/Vector.png";
import Rightarrowblack from "@/assets/blackarr.png";
import Stars from "@/assets/star 1.png";
import Image52 from "@/assets/image 52.png";
import User1 from "@/assets/Ellipse 21.png";
import User2 from "@/assets/Ellipse 22.png";
import User3 from "@/assets/Ellipse 23.png";
import { useNavigate } from "react-router-dom";

const FirstComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact-us"); // Redirect to the "contact-us" page
  };
  return (
    <div className="Partner-main-container">
      <div className="Partner-left-intro">
        <div className="Partner-left-intro_heading">
          Join Your Partner Network
        </div>
        <p className="Partner-left-intro_para">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your.
        </p>
        <div className="Partner-left-intro_button-grp">
          <button className="Partner-Contact-button" onClick={handleNavigate}>
            Contact Us
            <span className="right-arrow">
              <img src={Rightarrowblack} alt="" />
            </span>
          </button>
          <button className="Partner-join-btn">
            Join Us{" "}
            <span className="right-arrow">
              <img src={Rightarrow} alt="" />
            </span>
          </button>
        </div>
        <div className="Partner-left-intro_users-rating-part">
          <div className="Partner-left-intro-user-part">
            <div className="Partner-user-part">
              <div className="Partner-user-img">
                <img src={User1} alt="" className="Partner-round-img" />
                <img src={User2} alt="" className="Partner-round-img" />
                <img src={User3} alt="" className="Partner-round-img" />
              </div>
              5,910+
            </div>
            <div className="Partner-user-para">
              Companies are using & it’s growing everyday
            </div>
          </div>

          <div className="Partner-left-intro-rating-part">
            <div className="Partner-rating-part">
              4.5/5
              <span className="Partner-rating-stars">
                <img src={Stars} alt="" />
                <img src={Stars} alt="" />
                <img src={Stars} alt="" />
                <img src={Stars} alt="" />
                <img src={Stars} alt="" />
              </span>
            </div>
            <div className="Partner-rating-para">
              Trusted by the top companies worldwide
            </div>
          </div>
        </div>
      </div>

      <div className="Partner-right-image">
        <img src={Image52} alt="" className="Partner-img" />
      </div>
    </div>
  );
};

export default FirstComponent;
