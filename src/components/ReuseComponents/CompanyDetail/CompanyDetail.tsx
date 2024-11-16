import "./comp-detail.css";
import CompLogo from "@/assets/Rectangle 326.png";
import { FaAngleDoubleRight } from "react-icons/fa";

const CompanyDetail = () => {
  return (
    <div className="comp-detail-main-cont">
      <div className="comp-detail-cont">
        <div className="comp-detail-image-and-heading-part">
          <div className="comp-detail-image-part">
            <img src={CompLogo} className="comp-logo" alt="" />
          </div>
          <div className="comp-detail-heading-and-title-part">
            <div className="comp-detail-heading">Company Name</div>
            <br />
            <p className="comp-location">Company Location</p>
            <br />
            <div className="comp-specailse-heading">Specialised</div>
            <br />
            <p className="specialise-para">
              We proudly offer exclusive benefits to our partners who have
              consistently shown trust in our platform and
            </p>
          </div>
        </div>
        <div className="comp-detail-para">
          A trusted Software Development Company, delivering forward-thinking
          mobile, web, and app solutions. With 10+ years' experience and 700+
          projects completed, their team of 50+ developers prioritize innovation
          and transparent communication for profitable outcomes.
        </div>
        <br />
        <div className="comp-growth-and-team-part">
          <div className="date-team-growth-block">
            <div className="comp-specailse-heading">Specialised</div>
            <br />
            <p className="block-data">2013</p>
          </div>
          <div className="date-team-growth-block">
            <div className="comp-specailse-heading">Team Size</div>
            <br />
            <p className="block-data">59</p>
          </div>
          <div className="date-team-growth-block">
            <div className="comp-specailse-heading">Business Impact</div>
            <br />
            <p className="block-data">30% growth in annual revenue</p>
          </div>
        </div>
        <br />
        <div className="comp-specailse-heading">Journey</div>
        <br />
        <div className="comp-journey-detail-cont">
          <div className="journey-date-blocks">
            <p className="date-heading">Sept, 2021</p>
            <p className="journey-subtitle">Onboarded on our Platform</p>
          </div>
          <span className="journey-direction">
            <FaAngleDoubleRight />
          </span>
          <div className="journey-date-blocks">
            <p className="date-heading">Oct, 2021</p>
            <p className="journey-subtitle">First project closed</p>
          </div>
          <span className="journey-direction">
            <FaAngleDoubleRight />
          </span>
          <div className="journey-date-blocks">
            <p className="date-heading">June, 2022</p>
            <p className="journey-subtitle">First project delivered</p>
          </div>
          <span className="journey-direction">
            <FaAngleDoubleRight />
          </span>
          <div className="journey-date-blocks">
            <p className="date-heading">Feb, 2024</p>
            <p className="journey-subtitle">7 projects delivered so far</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
