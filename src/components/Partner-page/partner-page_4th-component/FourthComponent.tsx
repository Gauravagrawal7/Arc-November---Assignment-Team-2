import "./fourth-component.css";
import './fourth-compo-res.css'
import { FaAngleDoubleRight } from "react-icons/fa";
import Signup from "../../../assets/icons8-sign-up-40 1.png";
import Folder from "../../../assets/icons8-folder-48 1.png";
import Setup from "../../../assets/icons8-project-setup-48 1.png";
import Verify from "../../../assets/icons8-verify-48 1.png";

const FourthComponent = () => {
  return (
    <div className="fourth-main-container">
      <div className="fourth-heading">How to get on board with us</div>

      <div className="fourth-blocks-container">
        <div className="white-block-content">
          <span className="forward-right">
            <FaAngleDoubleRight />
          </span>
          <div className="white-img-part">
            <img src={Signup} alt="" />
          </div>
          <div className="curve-steps-block">Step 1</div>
          <div className="white-block-heading">Free sign-up</div>
          <div className="white-block-para">
            Register on our Partner Dashboard and have your contact details
            verified instantly.
          </div>
        </div>
        <div className="white-block-content">
          <span className="forward-right">
            <FaAngleDoubleRight />
          </span>
          <div className="white-img-part">
            <img src={Setup} alt="" />
          </div>
          <div className="curve-steps-block">Step 2</div>
          <div className="white-block-heading">Profile setup</div>
          <div className="white-block-para">
            Access your personalised dashboard to complete your profile.
          </div>
        </div>
        <div className="white-block-content">
          <span className="forward-right">
            <FaAngleDoubleRight />
          </span>
          <div className="white-img-part">
            <img src={Folder} alt="" />
          </div>
          <div className="curve-steps-block">Step 3</div>
          <div className="white-block-heading">Showcase your work</div>
          <div className="white-block-para">
            Upload your portfolio and past work examples to attract clients to
            your profile.
          </div>
        </div>
        <div className="white-block-content">
          <span className="forward-right">
            <FaAngleDoubleRight />
          </span>
          <div className="white-img-part">
            <img src={Verify} alt="" />
          </div>
          <div className="curve-steps-block">Step 4</div>
          <div className="white-block-heading">Start Working</div>
          <div className="white-block-para">
            Get verified by our team and easily manage your work through our
            Partner Dashboard.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthComponent;
