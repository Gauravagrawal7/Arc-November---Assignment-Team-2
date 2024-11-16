import "./benifitsBlock.css";
import on from "@/assets/on.png";
import image24 from "@/assets/image 24.png";
import image100 from "@/assets/image 100.png";
import bulb from "@/assets/bulb.png";

function BenifitsBlock() {
  return (
    <div className="benfits-container">
      <h3>Benefits to Join Hubnex Labs</h3>
      <div className="Contanier">
        <div className="Benifit-Block">
          <img src={on} alt="img1" />
          <h6>On time delivery</h6>
          <p>lorem ipsumlorem ipsum lorem ipsum</p>
        </div>
        <div className="Benifit-Block">
          <img src={bulb} alt="img2" />
          <h6>On time delivery</h6>
          <p>lorem ipsumlorem ipsum lorem ipsum</p>
        </div>
        <div className="Benifit-Block">
          <img src={image24} alt="img3" />
          <h6>On time delivery</h6>
          <p>lorem ipsumlorem ipsum lorem ipsum</p>
        </div>
        <div className="Benifit-Block">
          <img src={image100} alt="img4" />
          <h6>On time delivery</h6>
          <p>lorem ipsumlorem ipsum lorem ipsum</p>
        </div>
        <div className="Benifit-Block">
          <img alt="img5" />
          <h6>On time delivery</h6>
          <p>lorem ipsumlorem ipsum lorem ipsum</p>
        </div>
      </div>
    </div>
  );
}

export default BenifitsBlock;
