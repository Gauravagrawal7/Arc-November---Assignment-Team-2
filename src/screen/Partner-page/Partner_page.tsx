import "./partner-page.css";
import Chevronright from "../../assets/chevron-right.png";

import AdvertisingBanner from "@/components/Advertising/AdvertisingBanner";
import BlogCont from "@/components/Blogs/Blogs";
import CompanyDetail from "./CompanyDetail/CompanyDetail";
import GlobalInfoPart from "@/components//GlobalBlock/GlobalBlock";
import HubnexUser from "@/components/Hubnex/Hubnex";
import FirstComponent from "./partner-page_1st-component/FirstComponent";
import SecondComponent from "./partner-page_2nd-component/SecondComponent";
import ThirdComponent from "./partner-page_3rd-component/ThirdComponent";
import FourthComponent from "./partner-page_4th-component/FourthComponent";
import FifthComponent from "./partner-page_5th-component/FifthComponent";

const Partner_page = () => {
  return (
    <div className="partner-page-container">
      <div className="partner-page-nav-portion">
        <span className="shade">Home</span>
        <img src={Chevronright} alt="" />
        Partner Page
      </div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <GlobalInfoPart />
      <FourthComponent />
      <FifthComponent />
      <HubnexUser />
      <CompanyDetail />
      <AdvertisingBanner />
      <BlogCont />
    </div>
  );
};

export default Partner_page;
