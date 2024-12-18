import "./component4-Business.css";
import Num1 from "@/assets/num 1.png";
import Num2 from "@/assets/num2.png";
import Num3 from "@/assets/num3.png";
import Num4 from "@/assets/num3.png";

const Business = () => {
  return (
    <>
      <div className="container">
        <h1>
          <b>Business Challenge</b>
        </h1>
        <br />

        <p>
          One major problem they identified was the heightened risks of data
          breaches and unauthorized access to sensitive customer information,
          including personal and financial data. This was further exaggerated by
          the possibilities of increasingly sophisticated phishing and social
          engineering attacks targeting employees and customers, posing risks of
          credential theft and fraud. Another threat looming over the business
          was the growing prevalence of ransomware and malware attacks that had
          the potential to disrupt business operations and compromise data
          integrity and availability.
        </p>
      </div>

      <div className="container">
        <h1>
          <b>Our Solution</b>
        </h1>
        <br />
        <p>
          After a detailed discussion of the brands concerns we understood the
          critical importance of implementing cybersecurity measures in
          safeguarding sensitive customer data, maintaining regulatory
          compliance, and preserving brand reputation.
        </p>
      </div>
      <br />
      <br />
      <div className="main-container-box">
        {" "}
        {/*  main container    */}
        {/* <div className="Box1">
          <div className="Box2">
            <img src={Num1} alt="" />
          </div>
          <h1>Endpoint Security</h1>
          <div className="inner-cont">
            <p>
              Our team deployed advanced endpoint protection solutions to
              safeguard desktops, laptops, and mobile devices from malware,
              ransomware, and other cyber threats.
            </p>
          </div>
        </div>
        <div className="Box11">
          <div className="Box2">
            <img src={Num2} alt="" />
          </div>
          <h1>Network Security</h1>
          <div className="inner-cont">
            <p>
              We implemented robust network security measures, including
              firewalls, intrusion detection systems (IDS), and secure VPN
              (Virtual Private Network) connections, to protect against
              unauthorised access and network-based attacks.
            </p>
          </div>
        </div>
        <div className="Box11">
          <div className="Box2">
            <img src={Num3} alt="" />
          </div>
          <h1>Security Awareness Training</h1>
          <div className="inner-cont">
            <p>
              We provided comprehensive security awareness training programs for
              employees, focusing on cybersecurity best practices, phishing
              awareness, and incident response protocols.
            </p>
          </div>
        // </div>
        <div className="Box11">
          <div className="Box2">
            <img src={Num4} alt="" />
          </div>
          <h1>Incident Response and Forensics</h1>
          <div className="inner-cont">
            <p>
              Our data experts also took care of incident response and forensics
              capabilities to detect, respond to, and recover from cybersecurity
              incidents effectively, minimising the impact on business
              operations and data integrity.
            </p>
          </div>
        </div> */}
        <div className="box-main-cont">
          <div className="box-cont select">
            <img src={Num1} width={25} height={25} />
            <div className="box-Heading">Endpoint Security</div>
            <div className="box-para ">
              <p>
                Our team deployed advanced endpoint protection solutions to
                safeguard desktops, laptops, and mobile devices from malware,
                ransomware, and other cyber threats.
              </p>
            </div>
          </div>

          <div className="box-cont">
            <img src={Num2} width={25} height={25} />
            <div className="box-Heading">Network Security</div>
            <div className="box-para">
              We implemented robust network security measures, including
              firewalls, intrusion detection systems (IDS), and secure VPN
              (Virtual Private Network) connections, to protect against
              unauthorised access and network-based attacks.
            </div>
          </div>

          <div className="box-cont">
            <img src={Num3} width={25} height={25} />
            <div className="box-Heading">Security Awareness Training</div>
            <div className="box-para">
              We provided comprehensive security awareness training programs for
              employees, focusing on cybersecurity best practices, phishing
              awareness, and incident response protocols.
            </div>
          </div>

          <div className="box-cont">
            <img src={Num4} width={25} height={25} />
            <div className="box-Heading">Incident Response and Forensics</div>
            <div className="box-para">
              Our data experts also took care of incident response and forensics
              capabilities to detect, respond to, and recover from cybersecurity
              incidents effectively, minimising the impact on business
              operations and data integrity.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Business;
