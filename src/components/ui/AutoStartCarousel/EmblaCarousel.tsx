import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    autoplay.play();
    // setIsPlaying(autoplay.isPlaying());
    // emblaApi
    //   .on("autoplay:play", () => setIsPlaying(true))
    //   .on("autoplay:stop", () => setIsPlaying(false))
    //   .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="AutoStartembla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((name, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <img src={name} alt="Choruslogo" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons"></div>

        {/* <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? "Stop" : "Start"}
        </button> */}
      </div>
    </div>
  );
};

export default EmblaCarousel;
