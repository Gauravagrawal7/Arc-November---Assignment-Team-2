import BenifitsBlock from "@/components/benifitsBlock";
import Blogs from "@/components/Blogs";
import CaseStudy from "@/components/caseStudy";
import GlobleBlock from "@/components/globleBlock";
import Hubnex from "@/components/HubNex";
import PurpleBand from "@/components/PurpleBand";
import SalesConnection from "@/components/SalesConnection";

function Heroscreen() {
  return (
    <>
      {/* <!-- Main Content Section --> */}
      <section className="main-content">
        {/* <!-- Text Content --> */}
        <div className="text-content">
          <h1>SaaS growth with weekly tips.</h1>
          <p>
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your SaaS.
            Clarity gives you the blocks & components you Clarity gives you the
            blocks.
          </p>
          <div className="buttons">
            <a href="#" className="contact-btn">
              Contact Us
            </a>
            <a href="#" className="join-btn">
              Join Us →
            </a>
          </div>
          <div className="stats">
            <div>
              <img src="https://via.placeholder.com/32" alt="User image" />
              <span>
                5,910+
                <br />
                Companies are using & it's growing everyday
              </span>
            </div>
            <div>
              <span>
                4.5/5 ★★★★★
                <br />
                Trusted by the top companies worldwide
              </span>
            </div>
          </div>
        </div>

        {/* <!-- Image Placeholder (replace with actual image URL) --> */}
        <div className="image-content">
          <img
            src="https://via.placeholder.com/350x350"
            alt="Person using laptop"
            width="350"
            height="350"
          />
        </div>
      </section>

      {/* <!-- Company Logos Section --> */}
      <section className="company-logos">
        <p>Join 4,000+ companies already growing</p>
        <img src="../assets/Chorus logo.png" alt="Chorus logo" />
        <img src="../assets/TCS-logo.png" alt="TCS logo" />
        <img src="" alt="Pantera logo" />
        <img src="" alt="Reddit logo" />
        <img src="" alt="Chorus logo" />
      </section>
      <BenifitsBlock></BenifitsBlock>
      <GlobleBlock></GlobleBlock>
      <CaseStudy></CaseStudy>
      <SalesConnection></SalesConnection>
      <Hubnex></Hubnex>
      <PurpleBand></PurpleBand>
      <Blogs></Blogs>
    </>
  );
}

export default Heroscreen;
