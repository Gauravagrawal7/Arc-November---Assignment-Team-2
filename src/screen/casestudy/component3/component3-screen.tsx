
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
               {/* 1 row container */}

            <div className=' main-row-cont'>
                {/* 1 col */}
                <div className='col-cont'> 

                    <div className='img-cont'>
                        <img src={Industry} alt="" />
                    </div>

                    <div className='text-cont'>
                        <h2>Sofeware</h2>
                        <br />
                        <h3>Industry</h3>
                    </div>
                </div>
                {/* 2 col */}

                <div className='col-cont'>

                    <div className='img-cont'> 
                        <img src={Services} alt="" />
                    </div>
                    <div className='text-cont'>
                        <h2>Cybersecurity Solution</h2>
                        <br />
                        <h3> Service Provided</h3>
                    </div>

                </div>
               {/* 3 col */}
               <div className='col-cont'>

                    <div className='img-cont'>
                        <img src={Company} alt="" />
                    </div>
                    <div className='text-cont'>
                        <h2>200-500</h2>
                        <br />
                        <h3>Company Size</h3>
                    </div>

                </div>

            </div>
            {/* 2 row container */}

            <div className=' main-row-cont'>

                <div className='col-cont'>
                    <div className='head'>
                    <h1>78.6%</h1>
                    </div>
                    <div  className='col-cont1'>
                    <h2> <b>Better</b></h2>
                    <h2><b>Data Protect</b></h2>
                    </div>
                </div>

                <div className='col-cont'>
                    <div className='head'>
                    <h1>50.6%</h1>
                    </div>
                    <div className='col-cont1'>
                    <h2><b>Improvement In</b></h2>
                    <h2> <b>Regulatory Compliance</b></h2>
                    </div>
                </div>

                <div className='col-cont'>
                    <div className='head'>
                    <h1>25.6%</h1>
                    </div>
                    <div className='col-cont1'>
                    <h2> <b>Phishing</b></h2>
                    <h2> <b>Mitigation </b></h2>
                    </div>
                </div>

            </div>

        </div> 
        {/* second container */}
        <div className='box2-cont'>
            <img src={Casestudy} alt="" />

        </div>

    </div>
               
                



         
    )

    
}
export default Screen



