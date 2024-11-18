import "./GlobalBlock.css";
import Earth from "@/assets/image 5.png";
import Dailyhunt from "@/assets/image 34.png";
import Toi from "@/assets/image 36.png";
import HindustanT from "@/assets/image 37.png";

const GlobalInfoPart = () => {
  return (
    <div className="global-info-main-cont">
      <div className="global-info-cont">
        <div className="global-info-text-part">
          <div className="heading-info">Unleash the full power of data</div>
          <div className="para-info-part">
            We guide global businesses through the challenges of developing
            purposeful technology that addresses their needs and advances their
            growth. We have established offices in India, the UAE, and the USA.
          </div>
          <div className="global-info-number-part">
            <div className="info-num-part">
              <div className="num-part">40+</div>
              <div className="num-text-part">Integration</div>
            </div>
            <div className="info-num-part mid">
              <div className="num-part">600%</div>
              <div className="num-text-part">Return on investment</div>
            </div>
            <div className="info-num-part">
              <div className="num-part">4k+</div>
              <div className="num-text-part">Global customers</div>
            </div>
          </div>
          <div className="global-info-feature-part">
            <span className="feature">Featured in</span>
            <img src={Dailyhunt} alt="" />
            <img src={Toi} alt="" />
            <img src={HindustanT} alt="" />
          </div>
        </div>
        <div className="global-info-image-part">
          <img src={Earth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GlobalInfoPart;
