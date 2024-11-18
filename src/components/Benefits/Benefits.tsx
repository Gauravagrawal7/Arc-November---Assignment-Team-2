import "./benefit.css";

import on from "@/assets/on.png";
import image24 from "@/assets/image 24.png";
import image100 from "@/assets/image 100.png";
import icon2 from "@/assets/bulb.png";
import icon1 from "@/assets/Onn.png";
import icon3 from "@/assets/clock.png";
import icon4 from "@/assets/customer.png";
import icon5 from "@/assets/Escrow.png";
import RetroGrid from "../ui/retro-grid";

const Benefits = () => {
  return (
    <div className="benefit-main-cont">
      <div className="benefit-cont-heading">Benefits to Join Hubnex Labs</div>
      <div className="benefit-card-container">
        <div className="benefit-card-part">
          <div className="benefit-card-lg">
            <img src={on} alt="" className="benefit-image" />
            <div className="benefit-text-cont">
              <img src={icon1} alt="icon" />
              <h6>On time delivery</h6>
              <p>lorem ipsumlorem ipsum lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="benefit-card-part seprate">
          <div className="benefit-card-sm">
            <div className="benefit-text-cont">
              <img src={icon2} alt="icon" />
              <h6>Dedicated Project Manager</h6>
              <p>lorem ipsumlorem ipsum lorem ipsum</p>
            </div>
          </div>
          <div className="benefit-card-md">
            <img src={image24} alt="" className="benefit-image" />
            <div className="benefit-text-cont">
              <img src={icon3} alt="icon" />
              <h6>24x7 round the clock support</h6>
              <p>lorem ipsumlorem ipsum lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="benefit-card-part seprate">
          <div className="benefit-card-md">
            <img src={image100} alt="img4" className="benefit-image" />
            <div className="benefit-text-cont">
              <img src={icon4} alt="icon" />
              <h6>100% customer satisfaction</h6>
              <p>lorem ipsumlorem ipsum lorem ipsum</p>
            </div>
          </div>
          <div className="benefit-card-sm">
            <div className="benefit-text-cont">
              <img src={icon5} alt="icon" />
              <h6>Escrow account keeping your money safe</h6>
              <p>lorem ipsumlorem ipsum lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
      <RetroGrid />
    </div>
  );
};

export default Benefits;
