
import './component5-impact.css'
import Persent1 from '../../../assets/persent1.png'
import Persent2 from '../../../assets/persent2.png'
import Persent3 from '../../../assets/persent3.png'

const Impact = ()=> {

    return(
        <>
       <div className='Box-cont'>
        <h1>Impact</h1>
        <br />
        <p>We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles.</p>

       </div>
       <br />
           {/* box1 */}
       <div className='outer-box'>

       <div className='img-cont'>
       <img src={Persent1} alt="" />
       </div>
        
        <div className='inner-box' >

           <h2>Enhanced Patient Engagement:</h2>
            <p>We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles.</p>

        </div>

       </div>
       {/* box2 */}
        <div className='outer-box'>

        <div className='img-cont'>
       <img src={Persent2} alt="" />
       </div>

            <div className='inner-box'>
                <h2>Improved Treatment Adherence:</h2>
                
                <p>Positive feedback from healthcare providers regarding improved patient adherence to treatment plans and therapy sessions was facilitated through the mobile application, resulting in more effective therapy outcomes.</p>

            </div>
        </div>
        {/* box3 */}
        <div className='outer-box'>

        <div className='img-cont'>
       <img src={Persent3} alt="" />
       </div>
            <div className='inner-box'>
            <h2>Performance Scalability:</h2>
            
            <p>Seamless scalability and optimal performance of the mobile application, even during periods of peak user activity helped us ensure uninterrupted service availability and user satisfaction.
            </p>
            </div>
        </div>
        <br /><br />

        {/* conclution */}
        
        <div className='conclution'>
            <div>
            <h1>Conclution</h1>
            </div>
            <br />
            <p>We continue to deliver robust cybersecurity solutions to their team to mitigate cyber risks and enhance cyber resilience in the insurance industry. We hope leveraging our cybersecurity solution helps the client stand true to their commitment to their customers on delivering a secure and resilient digital future with them.
            </p>

        </div>



       </>
    )

}
export default Impact;