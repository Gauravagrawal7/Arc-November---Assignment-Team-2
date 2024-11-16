import "./SalesConnection.css";
import Rightarrow from "@/assets/blackarr.png";

function SalesConnection() {
  return (
    <>
      <div className="Sales-container ">
        <h5>We are big enough to deliver and small enough to care</h5>
        <p>Teams large and small rely on Hubnex Labs</p>

        <button className="Connect-Sales-btn">
          Connect Sales
          <span className="right-arrow">
            <img src={Rightarrow} alt="" />
          </span>
        </button>

        <div className="Container" style={{ display: "flex" }}>
          <div className="Block">
            <h4>40+</h4>
            <p>Integrations</p>
          </div>
          <div className="Block">
            <h4>40+</h4>
            <p>Integrations</p>
          </div>
          <div className="Block">
            <h4>40+</h4>
            <p>Integrations</p>
          </div>
          <div className="Block">
            <h4>40+</h4>
            <p>Integrations</p>
          </div>
          <div className="Block">
            <h4>40+</h4>
            <p>Integrations</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesConnection;
