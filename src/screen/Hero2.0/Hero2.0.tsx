import "./Hero2.0.css";
import "./Hero2.0-res.css";
import NumberTicker from "@/components/ui/number-ticker";
import CaseStudy from "@/components/Reusecomponents/CaseStudy/CaseStudy";
import GlobleBlock from "@/components/Reusecomponents/GlobalBlock/GlobalBlock";
import Hubnex from "@/components/Reusecomponents/Hubnex/Hubnex";
import Advertising from "@/components/Reusecomponents/Advertising/AdvertisingBanner";
import SalesConnection from "@/components/Reusecomponents/SalesConnection/SalesConnection";
import boy from "@/assets/boy.png";
import Rightarrow from "@/assets/Vector.png";
import Rightarrowblack from "@/assets/blackarr.png";
import Stars from "@/assets/star 1.png";
import User1 from "@/assets/Ellipse 21.png";
import User2 from "@/assets/Ellipse 22.png";
import User3 from "@/assets/Ellipse 23.png";
import { useNavigate } from "react-router-dom";
import Benefits from "@/components/Reusecomponents/Benefits/Benefits";

import Choruslogo from "@/assets/Chorus logo.png";
import TCS from "@/assets/TCS-logo.png";
import Panteralogo from "@/assets/Pantera logo.png";
import Raddit from "@/assets/reddit.png";

function Heroscreen() {
  const navigate = useNavigate();
  const companiesName = [Choruslogo, TCS, Panteralogo, Raddit];

  const handleNavigate = () => {
    navigate("/contact-us"); // Redirect to the "contact-us" page
  };

  return (
    <>
      <div className="Hero-main-container">
        <div className="Hero-left-intro">
          <div className="Hero-left-intro_heading">
            SaaS growth with weekly tips.
          </div>
          <p className="Hero-left-intro_para">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your
            SaaS.Clarity gives you the blocks & components you Clarity gives you
            the blocks.
          </p>
          <div className="Hero-left-intro_button-grp">
            <button className="Hero-Contact-button" onClick={handleNavigate}>
              Contact Us
              <span className="right-arrow">
                <img src={Rightarrowblack} alt="" />
              </span>
            </button>
            <button className="Hero-join-btn">
              Join Us{" "}
              <span className="right-arrow">
                <img src={Rightarrow} alt="" />
              </span>
            </button>
          </div>
          <div className="Hero-left-intro_users-rating-part">
            <div className="Hero-left-intro-user-part">
              <div className="Hero-user-part">
                <div className="Hero-user-img">
                  <img src={User1} alt="" className="Hero-round-img" />
                  <img src={User2} alt="" className="Hero-round-img" />
                  <img src={User3} alt="" className="Hero-round-img" />
                </div>
                <span className="Hero-statistics-number">
                  <NumberTicker value={5910} />+
                </span>
              </div>
              <div className="Hero-user-para">
                Companies are using & it’s growing everyday
              </div>
            </div>

            <div className="Hero-left-intro-rating-part">
              <div className="Hero-rating-part">
                4.5/5
                <span className="Hero-rating-stars">
                  <img src={Stars} alt="" />
                  <img src={Stars} alt="" />
                  <img src={Stars} alt="" />
                  <img src={Stars} alt="" />
                  <img src={Stars} alt="" />
                </span>
              </div>
              <div className="Hero-rating-para">
                Trusted by the top companies worldwide
              </div>
            </div>
          </div>
        </div>

        <div className="Hero-right-image">
          <img src={boy} alt="" className="Hero-img" />
        </div>
      </div>

      {/* <!-- Company Logos Section --> */}

      <section
        className="company-logos"
        style={{ marginTop: "100px", textAlign: "center" }}
      >
        <p
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#667085",
            marginBottom: "2rem",
          }}
        >
          Join 4,000+ companies already growing
        </p>
        <div className="company-logos-img">
          {companiesName.map((company) => (
            <img src={company} alt="Choruslogo" />
          ))}
        </div>
      </section>
      <Benefits></Benefits>
      <GlobleBlock></GlobleBlock>
      <CaseStudy></CaseStudy>
      <SalesConnection></SalesConnection>
      <Hubnex></Hubnex>
      <Advertising></Advertising>
    </>
  );
}

export default Heroscreen;
