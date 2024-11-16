import "./footer.css";
import Rightarrow from "@/assets/Vector.png";
import HubnexLogo from "@/assets/hubnex logo.png";
import Twitter from "@/assets/logo-twitter 2.png";
import Facebook from "@/assets/2.png";
import Instagram from "@/assets/3.png";
import Github from "@/assets/4.png";

const Footer = () => {
  return (
    <div className="footer-main-cont">
      <div className="footer-cont">
        <div className="black-banner-cont">
          <div className="black-bann-heading">
            See all that you can accomplish with Hubnex Labs
          </div>
          <br />
          <button className="Footer-sales-btn">
            Connect Sales{" "}
            <span className="right-arrow">
              <img src={Rightarrow} alt="" />
            </span>
          </button>
          <br />
        </div>
        <div className="footer-heading-and-contact-part">
          <div className="footer-heading">
            Let’s grow 💪 <br />
            together with the faster ecosystem
          </div>
          <button className="contact-btn">
            Contact us{" "}
            <span className="right-arrow">
              <img src={Rightarrow} alt="" />
            </span>
          </button>
        </div>
        <hr className="break-line" />
        <img src={HubnexLogo} alt="" className="footer-logo-img" />
        <br />
        <div className="footer-all-detail-section">
          <div className="footer-about-portion">
            <div className="about-portion-heading">About Hubnex Labs</div>
            <br />
            <div className="about-portion-para">
              We are a leading IT consultancy with expertise in innovative
              solutions for modern challenges. Our client-centric approach
              enables us to design tailored solutions that keep businesses ahead
              in the ever-evolving digital landscape.
            </div>
            <br />
            <br />
            <div className="company-icons-cont">
              <img src={Twitter} alt="" />
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Github} alt="" />
            </div>
            <br />
          </div>

          <ul className="footer-list-sec">
            <li className="footer-list-heading">Company</li>

            <li className="footer-list-item">About Us</li>
            <li className="footer-list-item">Services</li>
            <li className="footer-list-item">Careers</li>
            <li className="footer-list-item">For Partners</li>
          </ul>
          <ul className="footer-list-sec">
            <li className="footer-list-heading">Help</li>

            <li className="footer-list-item">Grievance Redressal Policy</li>
            <li className="footer-list-item">Community</li>
            <li className="footer-list-item">Terms & Conditions</li>
            <li className="footer-list-item">Privacy Policy</li>
          </ul>
          <ul className="footer-list-sec">
            <li className="footer-list-heading">Resources</li>

            <li className="footer-list-item">Blogs</li>
            <li className="footer-list-item">Case Studies</li>
            <li className="footer-list-item">Insights</li>
            <li className="footer-list-item"></li>
          </ul>
        </div>
        <div className="copyright-part">
          © Copyright 2024, All Rights Reserved by Hubnex Labs
        </div>
      </div>
    </div>
  );
};

export default Footer;
