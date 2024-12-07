import "./CaseStudy.css";
import Rightarrow from "@/assets/Vector.png";

const CaseStudy = () => {
  return (
    <div className="blog-main-cont">
      <div className="blog-container">
        <div className="blog-heading">Case Study</div>
        <br />
        <div className="blog-title">
          We guide global businesses through the challenges of developing
          purposeful technology that addresses their needs and advances their
          growth. We have established offices in India, the UAE, and the USA.
        </div>
        <br />
        <button className="view-btn">
          View All
          <span className="right-arrow">
            <img src={Rightarrow} alt="" />
          </span>
        </button>
        <br />
        <br />
        <div className="blog-card-cont"></div>
      </div>
    </div>
  );
};

export default CaseStudy;
