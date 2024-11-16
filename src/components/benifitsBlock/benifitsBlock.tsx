import "./benifitsBlock.css";
import on from "@/assets/on.png";
import image24 from "@/assets/image 24.png";
import image100 from "@/assets/image 100.png";
import icon2 from "@/assets/bulb.png";
import icon1 from "@/assets/Onn.png";
import icon3 from "@/assets/clock.png";
import icon4 from "@/assets/customer.png";
import icon5 from "@/assets/Escrow.png";
import RetroGrid from "../ui/retro-grid";

function BenifitsBlock() {
  return (
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <div className="benfits-container">
          <div className="benfits-fade-effect"></div>
          <h3>Benefits to Join Hubnex Labs</h3>
          <section id="photos">
            <div className="columns-3">
              {/* <BlurFade delay={0.25 + 1 * 0.05} inView> */}
              <div className="Benifit-Block">
                <img className="main-img" src={on} alt="img1" />
                <div className="details">
                  <img src={icon1} alt="icon" />
                  <h6>On time delivery</h6>
                  <p>lorem ipsumlorem ipsum lorem ipsum</p>
                </div>
              </div>
              {/* </BlurFade> */}
              {/* <BlurFade delay={0.25 + 1 * 0.05} inView> */}
              <div className="Benifit-Block">
                <div className="details">
                  <img src={icon2} alt="icon" />
                  <h6>Dedicated Project Manager</h6>
                  <p>lorem ipsumlorem ipsum lorem ipsum</p>
                </div>
              </div>
              {/* </BlurFade> */}
              {/* <BlurFade delay={0.25 + 1 * 0.05} inView> */}
              <div className="Benifit-Block">
                <img className="main-img" src={image24} alt="img3" />
                <div className="details">
                  <img src={icon3} alt="icon" />
                  <h6>24x7 round the clock support</h6>
                  <p>lorem ipsumlorem ipsum lorem ipsum</p>
                </div>
              </div>
              {/* </BlurFade> */}
              {/* <BlurFade delay={0.25 + 1 * 0.05} inView> */}
              <div className="Benifit-Block">
                <img className="main-img" src={image100} alt="img4" />
                <div className="details">
                  <img src={icon4} alt="icon" />
                  <h6>100% customer satisfaction</h6>
                  <p>lorem ipsumlorem ipsum lorem ipsum</p>
                </div>
              </div>
              {/* </BlurFade> */}
              {/* <BlurFade delay={0.25 + 1 * 0.05} inView> */}
              <div className="Benifit-Block">
                <div className="details">
                  <img src={icon5} alt="icon" />
                  <h6>Escrow account keeping your money safe</h6>
                  <p>lorem ipsumlorem ipsum lorem ipsum</p>
                </div>
              </div>
              {/* </BlurFade> */}
            </div>
            <RetroGrid />
          </section>
        </div>
      </div>
    </>
  );
}

export default BenifitsBlock;
