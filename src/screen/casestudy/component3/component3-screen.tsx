// import "./component3-screen.css";
// import Industry from "../../../assets/Industry-Icon.png";
// import Services from "../../../assets/service-icon.png";
// import Company from '../../../assets/company-Icon.png'
// import Casestudy from "../../../assets/casestudy.png";
// import { div } from "framer-motion/client";

// const Screen = () => {
//   return (

//     <div className="main-container">
//       <div className="box1-cont">
//         <h1>
//           <b>How cybersecurity solutions helped an insurance company</b>
//         </h1>
//         <br />
//         <p>
//           Clarity gives you the blocks & components you need to create a truly
//           professional website, landing page or admin panel for your
//           SaaS.landing page or admin panel for your SaaS.landing page.{" "}
//         </p>
//         <br />
//         {/* 1 row container */}

//         <div className=" main-row-cont">
//           {/* 1 col */}
//           <div className="col-cont">
//             <div className="img-cont">
//               <img src={Industry} alt="" />
//             </div>

//             <div className="text-cont text-color">
//               <p>
//                 <b>Software</b>
//               </p>
//               <br />
//              <p>Industry</p>
//             </div>
//           </div>
//           {/* 2 col */}
//           <div className="col-cont  textsize1">
//             <div className="img-cont">
//               <img src={Services} alt="" />
//             </div>

//             <div className="text-cont  ">
//               <p><b>Cybersecurity Solutions</b></p>
//               <br />
//               <p>Service Provided</p>
//             </div>
//           </div>

//           {/* 3 col */}
//           <div className="col-cont textsize2">
//             <div className="img-cont">
//               <img src={Company} alt="" />
//             </div>
//             <div className="text-cont">
//               <p>
//                 <b>200-500</b>
//               </p>
//               <br />
//               <p>Company Size</p>
//             </div>
//           </div>
//         </div>

//         {/* 2 row container */}

//                 {/* <div className='col-cont'>
//                     <div className='head'>
//                     <h1>50.6%</h1>
//                     </div>
//                     <div className='col-cont1'>
//                     <h2><b>Improvement In</b></h2>
//                     <h2> <b>Regulatory Compliance</b></h2>
//                     </div>
//                 </div> */}

//                 {/* <div className='col-cont'>
//                     <div className='head'>
//                     <h1>25.6%</h1>
//                     </div>
//                     <div className='col-cont1'>
//                     <h2> <b>Phishing</b></h2>
//                     <h2> <b>Mitigation </b></h2>
//                     </div>
//                 </div> */}
//      </div>
//               </div>

//       {/* second container */}
//       <div className="box2-cont">
//         <img src={Casestudy} alt="" />
//       </div>

//     </div>

//   )
// }
// export default Screen;

import "./component3-screen.css";
import Industry from "../../../assets/Industry-Icon.png";
import Services from "../../../assets/service-icon.png";
import Company from "../../../assets/company-Icon.png";
import Casestudy from "../../../assets/casestudy.png";

const Screen = () => {
  return (
    <div className="main-container">
      <div className="box1-cont">
        <h1>
          <b>How cybersecurity solutions helped an insurance company</b>
        </h1>
        <p>
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your
          SaaS.landing page or admin panel for your SaaS.landing page.
        </p>
        <br />
        {/* 1 row container */}
        <div className=" main-row-cont">
          {/* 1 col */}
          <div className="col-cont">
            <div className="img-cont">
              <img src={Industry} alt="" />
            </div>

            <div className="text-cont text-color">
              <p>
                <b>Software</b>
              </p>
              <br />
              <p>Industry</p>
            </div>
          </div>
          {/* 2 col */}
          <div className="col-cont  textsize1">
            <div className="img-cont">
              <img src={Services} alt="" />
            </div>

            <div className="text-cont  ">
              <p>
                <b>Cybersecurity Solutions</b>
              </p>
              <br />
              <p>Service Provided</p>
            </div>
          </div>

          {/* 3 col */}
          <div className="col-cont textsize2">
            <div className="img-cont">
              <img src={Company} alt="" />
            </div>
            <div className="text-cont">
              <p>
                <b>200-500</b>
              </p>
              <br />
              <p>Company Size</p>
            </div>
          </div>
        </div>

        {/* 2 row container */}
        <div className=" main-row-cont">
          <div className="col-cont1">
            <div className="persent-cont">
              <h1>76.6%</h1>
            </div>
            <div className="persent-text">
              <p>Better </p>
              <p>Data Protection</p>
            </div>
          </div>

          <div className="col-cont1 persentsize">
            <div className="persent-cont">
              <h1>50.6%</h1>
            </div>
            <div className="persent-text innerper">
              <p> Improvement in </p>  
              <p> Regulatory Compliance</p>
            </div>
          </div>

          <div className="col-cont1">
            <div className="persent-cont">
              <h1>25.6%</h1>
            </div>
            <div className="persent-text">
              <p>Phishing </p>
              <p>Mitigation</p>
            </div>
          </div>
        </div>
      </div>
      {/* second container */}
      <div className="box2-cont">
        <img src={Casestudy} alt="" />
      </div>
    </div>
  );
};
export default Screen;
