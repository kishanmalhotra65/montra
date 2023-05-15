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
            <div className='container-fluid h-400'>
                <div className='row mt-5'>
                    <div className='col-5 Home-Page-Heading '>
                        <h2>Simple, Transparent and Fair Pricing</h2>
                        <p>Best prices to suit small businesses, medium, and large organizations through variety of innovative payment options facilitating collection of both upfront payments & credit-based sales</p>
                    </div>
                    <div className='col-7 mt-4'>
                        <div className='row price-css'>
                            <div className='col-4'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 className="card-title">Local Payment
                                            Transactions</h5>
                                        <hr />
                                        <div className='card-subtitle card-subTitle-box '>
                                            <h3 className=' price subTitle'>1 %</h3>
                                            <span className='price__text'>Per Local Transactions</span>
                                        </div>
                                        <hr />

                                        <ul className='card__ul'>
                                            <li>No Setup Cost</li>
                                            <li>Accept Mastercard,visa,verve cards payments and bank transers</li>
                                            <li>Minimum fees of NGN 25 per transaction capped at NGN 2,000</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 className="card-title">International Payment
                                            Transaction</h5>
                                        <hr />
                                        <div className='card-subtitle card-subTitle-box'>
                                            <h3 className='subTitle'>3.8 %</h3>
                                            <span className="price__text">Per International Transactions</span>
                                        </div>
                                        <hr />

                                        <ul className='card__ul'>
                                            <li>No Setup Cost</li>
                                            <li>Accept Mastercard,visa,verve cards payments and bank transers</li>
                                            <li>Minimum fees of NGN 25 per transaction capped at NGN 2,000</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">All local Credit Payment
                                            Transaction</h5>

                                        <hr />
                                        <div className='card-subtitle card-subTitle-box'>
                                            <h3 className='subTitle'>2 %</h3>
                                            <span className="price__text">Per International Transactions</span>
                                        </div>
                                        <hr />
                                        <ul className='card__ul'>
                                            <li>No Setup Cost</li>
                                            <li>Accept Mastercard,visa,verve cards payments and bank transers</li>
                                            <li>Minimum fees of NGN 25 per transaction capped at NGN 2,000</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className='download_btn'><div className='col-6'>
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

                    </div></button> */}
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
        </div>
    )
}

export default HomePage