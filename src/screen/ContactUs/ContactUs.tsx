// import { Contact } from "lucide-react";
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
            <h1>Let's Talk- Contact Our Experts</h1>
            <p>
              Tell us a little bit about yourself and your queries. Our customer
              experience team will reach out to you within 24 hours.
            </p>
            <div>
              <form className="contact-form">
                <div className="row">
                  <div className="form-group">
                    <label htmlFor="name">Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="business-name">Business Name*</label>
                    <input
                      type="text"
                      id="business-name"
                      name="business-name"
                      placeholder="Business Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Business Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Contact Number*</label>
                  <div className="phone-input">
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="1234567890"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="reason">Reason for Contact Request*</label>
                  <textarea
                    id="reason"
                    name="reason"
                    placeholder="Enter your message here..."
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
              </form>
              {/* <form>
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
              </form> */}
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
