import "./ad-banner.css";
import Crown from "@/assets/icons8-crown-48 1.png";
import Rightarrow from "@/assets/Vector.png";

const AdvertisingBanner = () => {
  return (
    <div className="ad-banner-main-cont">
      <div className="ad-banner-cont">
        <div className="ad-banner-left">
          <div className="ad-banner-icon-part">
            <img src={Crown} alt="" />
          </div>
          <div className="ad-banner-title-part">
            <div className="ad-banner-upper-title">Work better, together</div>
            <div className="ad-banner-lower-title">
              Get Evaluate Your Business Score for Free!
            </div>
          </div>
        </div>
        <div className="ad-banner-right">
          <button className="check-btn">
            Check Now!{" "}
            <span className="right-arrow">
              <img src={Rightarrow} alt="" />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBanner;
