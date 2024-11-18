import React from "react";
import { EmblaOptionsType } from "embla-carousel";
// import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import DiagonalArrow from "@/assets/north-west-white.png";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowBtn";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.css";
type PropType = {
  slides: {
    img: string;
    header: string;
    desc: string;
    tagName: string;
  }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  //   const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //     useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((obj, index) => (
            <div className="embla__slide" key={index}>
              <div className="card-container">
                <div className="tag-container">
                  <div className="tag">{obj.tagName}</div>
                </div>

                <img src={obj.img} alt="" />

                <div className="card-title">{obj.header}</div>

                <div className="card-para">{obj.desc}</div>

                <div className="visit-part">
                  Read Full Article
                  <span className="right-arrow">
                    <img src={DiagonalArrow} alt="" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="controls-embla">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Carousel;
