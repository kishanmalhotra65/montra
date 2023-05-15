import React from 'react';
import SubHeader from "../../SubHeader/SubHeader"
import './HomePage.css';
import btnLogo from "../../../../assets/montraFinal.png";
import appleLogo from "../../../../assets/appleLogo.png";
import googlePlay from "../../../../assets/googlePlay.png"
// import HomepageMoblieImg from '../../../assets/HomepageMoblieImg.png';
// import dashboard from '../../../assets/dashboard.png'

function HomePage() {
    return (
        <div className="Home-Page">
            <SubHeader />
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-5 Home-Page-Heading '>
                        <h2>Simple, Transparent and Fair Pricing</h2>
                        <p>Best prices to suit small businesses, medium, and large organizations through variety of innovative payment options facilitating collection of both upfront payments & credit-based sales</p>
                        {/* <div className='row btn__main '>
                            <div className='col-6'>
                                <p className='download'>Download</p>
                            </div>
                            <div className='col-4 '>
                                <img className="btnLogo" src={btnLogo} alt="" srcset="" />
                            </div>
                            <div className='col-1'>
                                <img className="googleLogo"
                                    src={appleLogo} alt="" srcset="" />
                            </div>
                            <div className='col-1'>
                                <img className="googleLogo" src={googlePlay} alt="" srcset="" />

                            </div>
                        </div> */}
                    </div>
                    <div className='col-7'>
                        <div>
                            {/* <img src={HomepageMoblieImg} alt='HomepageMoblieImg' />
                            <img src={dashboard} alt='dashboard' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage