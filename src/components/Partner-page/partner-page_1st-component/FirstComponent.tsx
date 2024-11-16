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
    <div className="fc_main-container">
      <div className="fc_left-intro">
        <div className="left-intro_heading">Join Your Partner Network</div>
        <p className="left-intro_para">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your.
        </p>
        <div className="left-intro_button-grp">
          <button className="contact-button" onClick={handleNavigate}>
            Contact Us
            <span className="right-arrow">
              <img src={Rightarrowblack} alt="" />
            </span>
          </button>
          <button className="join-btn">
            Join Us{" "}
            <span className="right-arrow">
              <img src={Rightarrow} alt="" />
            </span>
          </button>
        </div>
        <div className="left-intro_users-rating-part">
          <div className="left-intro-user-part">
            <div className="user-part">
              <div className="user-img">
                <img src={User1} alt="" className="round-img" />
                <img src={User2} alt="" className="round-img" />
                <img src={User3} alt="" className="round-img" />
              </div>
              5,910+
            </div>
            <div className="user-para">
              Companies are using & it’s growing everyday
            </div>
          </div>

          <div className="left-intro-rating-part">
            <div className="rating-part">
              4.5/5
              <span className="rating-stars">
                <img src={Stars} alt="" />
                <img src={Stars} alt="" />
                <img src={Stars} alt="" />
                <img src={Stars} alt="" />
                <img src={Stars} alt="" />
              </span>
            </div>
            <div className="rating-para">
              Trusted by the top companies worldwide
            </div>
          </div>
        </div>
      </div>

      <div className="fc_right-image">
        <img src={Image52} alt="" className="fc-img" />
      </div>
    </div>
  );
};

export default FirstComponent;
