import "./CaseStudy.css";
import "./CaseStudy-ref.css";
import Rightarrow from "@/assets/Vector.png";
import bannerImg from "@/assets/finance.png";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "@/components/ui/Carousel/Carousel";
import { useNavigate } from "react-router-dom";

const CaseStudy = () => {
  const OPTIONS: EmblaOptionsType = { align: "start" };

  const SLIDES = [
    {
      tagName: "Finance",
      img: bannerImg,
      header: "What is Ad Exposure and Why It Matters?",
      desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    },
    {
      tagName: "Business",
      img: bannerImg,
      header: "What is Ad Exposure and Why It Matters?",
      desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    },
    // {
    //   img: CardImg3,
    //   header: "What is Ad Exposure and Why It Matters?",
    //   desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    // },
  ];
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/case-study"); // Redirect to the "About" page
  };
  return (
    <div className="case-study-main-cont">
      <div className="case-study-container">
        <div className="case-study-heading">Case Study</div>
        <br />
        <div className="case-study-title">
          We guide global businesses through the challenges of developing
          purposeful technology that addresses their needs and advances their
          growth. We have established offices in India, the UAE, and the USA.
        </div>
        <br />
        <button className="view-btn" onClick={handleNavigate}>
          View All
          <span className="right-arrow">
            <img src={Rightarrow} alt="" />
          </span>
        </button>
        <br />
        <br />
        <div className="case-study-card-cont">
          <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
