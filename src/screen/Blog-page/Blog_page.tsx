import "./blog-page.css";
import Chevronright from "../../assets/chevron-right.png";
import BlogPageContent from "./blog-page-content/BlogPageContent";
import AdvertisingBanner from "@/components/Advertising/AdvertisingBanner";
import HubnexUser from "@/components/Hubnex/Hubnex";
import CaseStyCont from "@/components/CaseStudy/CaseStudy";

const Blog_page = () => {
  return (
    <div className="blog-page-container">
      <div className="blog-page-nav-portion">
        <span className="shade">Home</span>
        <img src={Chevronright} alt="" />
        <span className="shade">Blogs</span>
        <img src={Chevronright} alt="" />
        What is Delivery Management and Why Does It Matter?
      </div>
      <BlogPageContent />
      <CaseStyCont />
      <HubnexUser />
      <AdvertisingBanner />
    </div>
  );
};

export default Blog_page;
