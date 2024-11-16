import "./second-component.css";
import Compp from "@/assets/icons8-computing-64 1.png";
import Backk from "@/assets/icons8-backend-development-100 1.png";
import Cloud from "@/assets/icons8-cloud-print-48 1.png";
import Conn from "@/assets/icons8-connectivity-48 1.png";
import Protocols from "@/assets/icons8-protocols-64 1.png";
import Webann from "@/assets/icons8-web-analytics-48 1.png";
import Oper from "@/assets/icons8-operating-system-48 1.png";

const SecondComponent = () => {
  return (
    <div className="sc_main-container">
      <div className="technologies-part">
        <div className="tp-left-text-part">Technologies We Use!</div>
        <div className="tp-right-block-part">
          <div className="tp-blocks-grp">
            <div className="tp-upper-blocks">
              <div className="tp-white-block">
                <div className="block-img">
                  <img src={Compp} alt="" />
                </div>
                <div className="block-para">Edge Computing</div>
              </div>
              <div className="tp-white-block">
                <div className="block-img">
                  <img src={Conn} alt="" />
                </div>
                <div className="block-para">Connectivity</div>
              </div>
              <div className="tp-white-block">
                <div className="block-img">
                  <img src={Cloud} alt="" />
                </div>
                <div className="block-para">Cloud Platforms</div>
              </div>
              <div className="tp-white-block">
                <div className="block-img">
                  <img src={Protocols} alt="" />
                </div>
                <div className="block-para">Protocols and Standards</div>
              </div>
              <div className="tp-white-block">
                <div className="block-img">
                  <img src={Backk} alt="" />
                </div>
                <div className="block-para">
                  Development Tools and Platforms
                </div>
              </div>
              <div className="tp-white-block">
                <div className="block-img">
                  <img src={Webann} alt="" />
                </div>
                <div className="block-para">Data Analytics and AI</div>
              </div>
              <div className="tp-white-block">
                <div className="block-img">
                  <img src={Oper} alt="" />
                </div>
                <div className="block-para">Operating Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
