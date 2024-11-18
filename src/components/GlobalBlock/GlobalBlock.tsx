import "./GlobalBlock.css";
import Earth from "@/assets/image 5.png";
import Dailyhunt from "@/assets/image 34.png";
import Toi from "@/assets/image 36.png";
import HindustanT from "@/assets/image 37.png";
import NumberTicker from "../ui/number-ticker";

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

          <div className="statistics-global-info">
            <div className="statistics-item">
              <div className="num-part">
                <NumberTicker value={40} className="number-ticker" />+
              </div>
              <div className="description">Integrations</div>
            </div>
            <div className="statistics-item mid">
              <div className="num-part">
                <NumberTicker value={600} className="number-ticker" />%
              </div>
              <div className="description">Return on Investment</div>
            </div>
            <div className="statistics-item">
              <div className="num-part">4K+</div>
              <div className="description">Global Customers</div>
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
