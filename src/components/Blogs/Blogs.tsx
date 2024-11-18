import "./blogs.css";
import DiagonalArrow from "@/assets/north_west.png";
import CardImg1 from "@/assets/image 24.png";
import CardImg2 from "@/assets/image 14.png";
import CardImg3 from "@/assets/image 301.png";
import Rightarrow from "@/assets/Vector.png";
import { NextButton, PrevButton } from "../ui/Carousel/EmblaCarouselArrowBtn";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/blogs"); // Redirect to the "About" page
  };
  return (
    <div className="blog-main-cont">
      <div className="blog-container">
        <div className="blog-heading">Blogs</div>
        <br />
        <div className="blog-title">Explore the impact we've delivered</div>
        <br />
        <button className="view-btn" onClick={handleNavigate}>
          View All
          <span className="right-arrow">
            <img src={Rightarrow} alt="" />
          </span>
        </button>
        <br />
        <br />
        <div className="blog-card-cont">
          <div className="blog-card">
            <img src={CardImg1} alt="" />
            <br />
            <button className="marketing-btn">Marketing</button>
            <br />
            <div className="blog-card-title">
              What is Ad Exposure and Why It Matters?
            </div>
            <br />
            <div className="blog-card-para">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsum.
            </div>
            <br />
            <div className="blog-visit-part">
              Read Full Article
              <span className="right-arrow">
                <img src={DiagonalArrow} alt="" />
              </span>
            </div>
          </div>
          <div className="blog-card">
            <img src={CardImg2} alt="" />
            <br />
            <button className="marketing-btn">Marketing</button>
            <br />
            <div className="blog-card-title">
              What is Ad Exposure and Why It Matters?
            </div>
            <br />
            <div className="blog-card-para">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsum.
            </div>
            <br />
            <div className="blog-visit-part">
              Read Full Article
              <span className="right-arrow">
                <img src={DiagonalArrow} alt="" />
              </span>
            </div>
          </div>
          <div className="blog-card">
            <img src={CardImg3} alt="" />
            <br />
            <button className="marketing-btn">Marketing</button>
            <br />
            <div className="blog-card-title">
              What is Ad Exposure and Why It Matters?
            </div>
            <br />
            <div className="blog-card-para">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsum.
            </div>
            <br />
            <div className="blog-visit-part">
              Read Full Article
              <span className="right-arrow">
                <img src={DiagonalArrow} alt="" />
              </span>
            </div>
          </div>
        </div>

        <div className="controls-embla">
          <div className="embla__buttons">
            <PrevButton />
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
