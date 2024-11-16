
import'./component3-screen.css'
import Industry from '../../../assets/Industry-Icon.png'
import Services from '../../../assets/service-icon.png'
import Company from '../../../assets/company-Icon.png'
import Casestudy from '../../../assets/casestudy.png'

const Screen = ()=>{
    return(

        <div className='main-container'>
            <div  className='box1-cont'>
            <h1><b>How cybersecurity solutions helped an insurance company</b></h1>
            <p>Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.landing page or admin panel for your SaaS.landing page. </p>
            <br />
            <div className="row">
                <div className="col-4">
                    <div className='img-text-cont'>
                    <div className='img-cont'>
                <span> <img src={Industry} alt="" /></span>
                </div>
                <div className='text-cont'>
                    <h2 className='header-color'>Softwar</h2>
                    <h3>Industry</h3>
                 </div> 
                 </div>   
                </div>
                <div className="col-4">
                
                   <h2 className='header-color'>Cybersecurity Solution</h2>
                   <span> <img src={Services} alt="" /></span>
                   <h3>Service Provide</h3>

                </div>
                <div className="col-4">
               
                 <h2 className='header-color'>200-500</h2>
                  <span> <img src={Company} alt="" /></span>
                  <h3>Company Size</h3>
                </div>
                

            </div>
            <br />

            <div className="row">
                <div className="col-4 box">
                    <h1 className='col-count'>78.6%</h1>
                    <h3>Batter</h3>
                    <h3> Data Protection</h3>
                    
                </div>
                <div className="col-4 box">
                <h1 >50.6%</h1>
                <h3>Improvement In</h3>
                <h3> regulatory Compliance</h3>
                 

                </div>
                <div className="col-4 box">
                <h1>25.6%</h1>
                <h3>Phishing</h3>
                <h3>Mitigation</h3>
                
                </div>

            </div>
            </div >
          <div className='box2-cont'>
            <img src={Casestudy} alt="" />
            </div>
        </div>
    )

    
}
export default Screen;