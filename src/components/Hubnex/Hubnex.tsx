import "./hubnex.css";
import SlackLogo from "@/assets/Image.png";

const HubnexUser = () => {
  return (
    <div className="hubnex-user-main-cont">
      <div className="hub-user-container">
        <div className="happy-content-index">3940+ Happy Hubnex Labs Users</div>
        <br />
        <div className="hubnex-content-heading">
          Driving results for leaders across the globe
        </div>
        <div className="happy-detail-cont">
          <div className="happy-cont-left-part">
            <img src={SlackLogo} alt="" />
          </div>
          <div className="happy-cont-right-part">
            <div className="happy-cont-title-part">
              “People now recognise that having a good performance conversation
              means that something happens as a result.”
            </div>
            <br />
            <br />
            <div className="happy-cont-para-part">
              “With Landingfolio, the design team can now build design which
              identifies employees’ career aspirations and goals and from which
              we approach managers and check to see what is happening.”
            </div>
            <br />
            <br />
            <div className="company-part">
              <div className="company-name">Slack</div>

              <p className="company-title">Product Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubnexUser;
