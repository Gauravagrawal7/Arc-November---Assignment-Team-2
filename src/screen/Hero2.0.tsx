import BenifitsBlock from "@/components/benifitsBlock/benifitsBlock";
import Blogs from "@/components/Blogs/Blogs";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import GlobleBlock from "@/components/GlobalBlock/GlobalBlock";
import Hubnex from "@/components/Hubnex/Hubnex";
import Advertising from "@/components/Advertising/AdvertisingBanner";
import SalesConnection from "@/components/SalesConnection/SalesConnection";
import boy from "@/assets/boy.png";
import Rightarrow from "@/assets/Vector.png";
import Rightarrowblack from "@/assets/blackarr.png";
import Stars from "@/assets/star 1.png";
import User1 from "@/assets/Ellipse 21.png";
import User2 from "@/assets/Ellipse 22.png";
import User3 from "@/assets/Ellipse 23.png";
import Choruslogo from "@/assets/Chorus logo.png";
import TCS from "@/assets/TCS-logo.png";
import Panteralogo from "@/assets/Pantera logo.png";
import Raddit from "@/assets/reddit.png";
import AutoStartCarousel from "@/components/ui/AutoStartCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

function Heroscreen() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [Choruslogo, TCS, Panteralogo, Raddit];

  return (
    <>
      <div className="fc_main-container">
        <div className="fc_left-intro">
          <div className="left-intro_heading">
            SaaS growth with weekly tips.
          </div>
          <p className="left-intro_para">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your
            SaaS.Clarity gives you the blocks & components you Clarity gives you
            the blocks.
          </p>
          <div className="left-intro_button-grp">
            <button className="contact-button">
              Contact Us{" "}
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
          <img
            src={boy}
            alt=""
            className="fc-img"
            style={{ width: "500px", height: "500px" }}
          />
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
        <AutoStartCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <BenifitsBlock></BenifitsBlock>
      <GlobleBlock></GlobleBlock>
      <CaseStudy></CaseStudy>
      <SalesConnection></SalesConnection>
      <Hubnex></Hubnex>
      <Advertising></Advertising>
      <Blogs></Blogs>
    </>
  );
}

export default Heroscreen;
