import "./CaseStudy.css";
import CardImg3 from "@/assets/image 301.png";
import Rightarrow from "@/assets/Vector.png";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "@/components/ui/Carousel/Carousel";

const CaseStudy = () => {
  const OPTIONS: EmblaOptionsType = { align: "start" };

  const SLIDES = [
    {
      img: CardImg3,
      header: "What is Ad Exposure and Why It Matters?",
      desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    },
    {
      img: CardImg3,
      header: "What is Ad Exposure and Why It Matters?",
      desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    },
    {
      img: CardImg3,
      header: "What is Ad Exposure and Why It Matters?",
      desc: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    },
  ];

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
        <div className="blog-card-cont">
          <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;