import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <div className="form-container">
        <img src="" alt="side-img" style={{ width: "25%" }} />
        <div
          style={{ width: "75%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "70%" }}>
            <h2>Let's Talk- Contact Our Experts</h2>
            <p>
              Tell us a little bit about yourself and your queries. Our customer
              experience team will reach out to you within 24 hours.
            </p>
            <div>
              <form>
                <label>Name*</label>
                <input />
                <label>Business Name*</label>
                <input />
                <label>Business Email*</label>
                <input />
                <label>Contact Number*</label>
                <input />
                <label>Reason for contact request*</label>
                <textarea></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Our Locations</h2>
        <div>location wise address</div>
      </div>
    </>
  );
}

export default ContactUs;
