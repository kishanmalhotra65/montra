import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import './business.css';
import businessMobile from "../../assets/business-mobile.png";
import buttonMontra from "../../assets/button-montra.png";
import businessApple from "../../assets/business-apple.png";
import businessFrame from "../../assets/businessFrame.png";
import Vector from "../../assets/Vector.png";
import VectorSlash from "../../assets/Vector-slash.png";
import Withdrawl from "../../assets/withdrawl.png";
import bankIcon from "../../assets/bank-icon.png";
import userIcon from "../../assets/user-icon.png";
import agencies from "../../assets/agencies.png";


// import dashboard from '../../../assets/dashboard.png'


function BusinessPage() {
    return (   
        <div className="Home-Page">
                <SubHeader/>
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col"> 
                        <p id="title">Banking</p>  
                        <p id ="sub-title">Accept payments online with ease and grow your business with Montra for Business app</p>
                        <div className="button"><img src={businessApple} alt="" srcset="" id ="businessApple"/><img src={buttonMontra} alt="" srcset="" id ="businessmobile"/><botton id ="business-mobile"> Download </botton></div>
                        <div class="under-row">
                            <div class="under-column" >
                            <div class ="vc-img"><img src={Vector} alt="" srcset="" id ="vector-img"/>  <img src={VectorSlash} alt="" srcset="" id ="VectorSlash"/></div>
                                    <p id ="custom-cont">| Accept Payments</p>
                                    <p class ="vc-paragraph">Register on Montra for Business App to get personalized QR code issued which can be shared as well as printed for Customers to Scan the some to make payment. Merchants con also show this on the phone screen for accepting payments</p>
                                </div>
                                <div class="under-column">
                                <div class ="vc-img"><img src={Vector} alt="" srcset="" id ="vector-img"/>  <img src={VectorSlash} alt="" srcset="" id ="VectorSlash"/></div>
                                    <p id ="custom-cont">| Manage multiple Ti s</p>
                                    <p class ="vc-paragraph">Merchants con odd multiple Tills in the some store or multiple in Tills in multiple Stores. Ti s would accept payments into the collection account odder by the merchant. Tills hove limited access to the Business append con only use the opp for collection while Merchant con access oll features</p>
                                </div>
                                <div class="under-column" >
                                <div class ="vc-img"><img src={Vector} alt="" srcset="" id ="vector-img"/>  <img src={VectorSlash} alt="" srcset="" id ="VectorSlash"/></div>
                                    <p id ="custom-cont">| Collection statement</p>
                                    <p class ="vc-paragraph">Merchonts con view the doily, weekly,monthly collection stotements besides viewing the some for customized dote ronge</p>
                                </div>
                        </div>
                        
                        </div>
                        <div class="col">
                        <img src={businessFrame} alt="" srcset="" />
                        <img src={businessMobile} alt="" srcset="" id ="businessmobile"/>
  
                        </div>
                    </div>
                </div>

                 {/* Second part */}

                 <div class="container text-center second">
                    <div class="row align-items-start">
                        <div class="col">
                            <div class ="withdrw-img">
                                <img src={businessFrame} alt="" srcset="" />
                                <img src={Withdrawl} alt="" srcset="" id ="businesswithdrawl"/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="under_div">
                            <p id="title-banking"> <img src={bankIcon} alt="" class ="banking" srcset="" /> Payment</p> 
                            <p id ="withdrawl-title">Merchants can earn incremental income by offering the Agency Banking Services offered on Mantra for Business app</p>
                            <div className="button"><img src={businessApple} alt="" srcset="" id ="businessApple"/><img src={buttonMontra} alt="" srcset="" id ="businessmobile"/><botton id ="business-mobile"> Download </botton></div>
                            <div class="under-row">
                                <div class="agencies-column">
                                <div class ="user-img"><img src={userIcon} alt="" srcset="" id ="user-img"/></div>
                                    <p id ="custom-cont">| Agency Banking</p>
                                    <p class ="vc-paragraph">Merchants can Accept & Pay Cash to customer through Montra for Business opp & earn commission for facilitating cash withdrawer or deposited request for customers</p>
                                </div>
                                <div class="agencies-column">
                                <div class ="user-img"><img src={agencies} alt="" srcset="" id ="user-img"/></div>
                                <p id ="custom-cont">| Agency Banking Statement</p>
                                <p class ="vc-paragraph">Merchant can view all Agency Banking transactions in their Agency Banking statement on Montra for Business app</p>
                                </div>
                            </div>
                            
                            </div>


                            
                       
                        </div>
                    </div>
                    </div>


              

        </div>
     )
}

export default BusinessPage
