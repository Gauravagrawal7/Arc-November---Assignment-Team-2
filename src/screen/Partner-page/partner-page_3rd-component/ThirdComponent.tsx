import "./third-component.css";
import './third-compo-res.css'
import Poster1 from "@/assets/image 30.png";
import Poster2 from "@/assets/image 30 (1).png";
import Poster3 from "@/assets/image 30 (2).png";

const ThirdComponent = () => {
  return (
    <div className="third-main-cont">
      <div className="third-cont-heading">Why Choose Us?</div>
      <div className="third-cont-blocks-content">
        <div className="third-block-content">
          <div className="block-upper-img">
            <img src={Poster1} className="third-block-image" alt="" />
          </div>
          <div className="block-lower-para">
            <div className="lower-para-heading">Fast MVP Development</div>
            <div className="lower-para-content">
              We develop the prototypes and MVP for the ERP System within a few
              months and optimise the final product based on its performance
              metrics and your feedback.
            </div>
          </div>
        </div>
        <div className="third-block-content">
          <div className="block-upper-img">
            <img src={Poster2} className="third-block-image" alt="" />
          </div>
          <div className="block-lower-para">
            <div className="lower-para-heading">Maintenance & Support</div>
            <div className="lower-para-content">
              Our work does not end with delivery. We offer complete support and
              maintenance post the launch of the ERP systems to ensure their
              smooth functioning.
            </div>
          </div>
        </div>
        <div className="third-block-content">
          <div className="block-upper-img">
            <img src={Poster3} className="third-block-image" alt="" />
          </div>
          <div className="block-lower-para">
            <div className="lower-para-heading">Smooth ERP Intergration</div>
            <div className="lower-para-content">
              We ensure smooth ERP integration with other business parts,
              including other ERPs, Salesforce, Office Suite, and IoT systems,
              for effective, seamless business operations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;
