import "./blog-content.css";
import BlogBanner from "../../../assets/image 20.png";
import HubnexWhiteLogo from '../../../assets/white-logo.png'
import GreenArrow from '../../../assets/green-arrow.png'

const BlogPageContent = () => {
  return (
    <div className="blog-cont-main-container">
      <div className="blog-inner-contaienr">
        <div className="blog-business-cont-title-part">
          <div className="blog-hash-content">#Business</div>
          <div className="blog-heading-content">
            What is Delivery Management and Why Does It Matters?
          </div>
          <div className="blog-author-and-date-cont">
            July 19, 2024 | By <span className="dark-shade">Author Name</span>
          </div>
        </div>
        <br />
        <br />
        <div className="blog-banner-part">
          <img src={BlogBanner} alt="" className="banner-img" />
        </div>
        <br />
        <br />
        <div className="blog-info-container">
          <div className="blog-info-left-cont">
            <div className="blog-info-part-heading">Policy Details</div>
            <br />
            <p className="blog-info-para-part">
              You shall also receive an alphanumerical/numerical identification
              number for tracking your grievances with the customer care. We
              assure You that ExMyB will make all reasonable endeavours to
              address the grievance made by You at the latest within 60 (Sixty)
              days from the date of receipt of the grievance.
            </p>
            <br />
            <div className="blog-info-part-heading">Governance Framework</div>
            <p className="blog-info-para-part">
              You shall also receive an alphanumerical/numerical identification
              number for tracking your grievances with the customer care. We
              assure You that ExMyB will make all reasonable endeavours to
              address the grievance made by You at the latest within 60 (Sixty)
              days from the date of receipt of the grievance.
            </p>
            <br />
            <p className="blog-info-para-part">
              A grievance will be treated as closed if You communicate Your
              acceptance of the response received from the customer care team or
              where,
              <span className="dark-shade">
                You fail to respond to the response received from the customer
                care team within 7 (Seven) days.
              </span>
              <br />
              A grievance will be treated as closed if You communicate Your
              acceptance of the response received from the customer care team or
              where,
              <span className="dark-shade">
                You fail to respond to the response received from the customer
                care team within 7 (Seven) days.
              </span>
              <br />
              A grievance will be treated as closed if You communicate Your
              acceptance of the response received from the customer care team or
              where,
              <span className="dark-shade">
                You fail to respond to the response received from the customer
                care team within 7 (Seven) days.
              </span>
            </p>
          </div>
          <div className="blog-info-right-cont">
            <div className="blog-right-cont-upper-part">

            </div>
            <div className="blog-right-cont-lower-part">
              <div className="blog-lower-part-content">
                <img src={HubnexWhiteLogo} alt="" className="hub-white-logo"/>
                <div className="light-shade-title">
                  Work better, together
                </div>
                <div className="bold-shade-title">
                Get Evaluate Your Business Score!
                </div>
              </div>
              <br />
              <button className="check-now-btn">
                Check Now! <span className="right-arrow"><img src={GreenArrow} alt="" /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageContent;
