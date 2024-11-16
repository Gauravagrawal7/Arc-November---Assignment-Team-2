import "./fifth-component.css";
import Image32 from "@/assets/image 32.png";
import Rightarrow from "@/assets/Vector.png";

const FifthComponent = () => {
  return (
    <div className="fifth-main-cont">
      <div className="fifth-left-img-part">
        <img src={Image32} className="PosterImg" alt="" />
      </div>
      <div className="fifth-right-text-part">
        <div className="fifth-text-area">
          <div className="fifth-text-part-heading">
            Join our Preferred Partners Programme
          </div>
          <div className="fifth-para-part">
            We proudly offer exclusive benefits to our partners who have
            consistently shown trust in our platform and delivered outstanding
            work.These privileges are designed to ensure business stability and
            promise up to 3x returns to our partners.
          </div>
        </div>
        <div className="fifth-sales-btn">
          <button className="sales-btn">
            Connect Sales{" "}
            <span className="right-arrow">
              <img src={Rightarrow} alt="" />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FifthComponent;
