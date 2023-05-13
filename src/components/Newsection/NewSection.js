import React from "react";
import New_img from "../.././assets/cutBackgroundImage.png";
import paymentImg from "../.././assets/payments.png";
import scanAndPay from "../../assets/scanAndPay.png";
import btnLogo from "../../assets/montraFinal.png";
import appleLogo from "../../assets/appleLogo.png";
import googlePlay from "../../assets/googlePlay.png"

import leadingimg from "../../assets/leading.png"
import "../PaymentSection/PaymentSection.css";
function NewSection () {
    return   <div class="contaicontainer-fluidner">
        <div className='Newsection'>
        <div class="row">
            
        <div className='col-6 Left_sec'>
        <div className="Leading_spacing">
    <h6>Leading</h6>
<p className='download'><b>Compare the loan offers from our Le
nding Partners and </b>  get them disbursed instantly in your bank accounts</p>
</div>
<div className="download_button">
<a href="">
    <p className="download">Downoad</p>
    <img src={btnLogo}/>
    <img src={appleLogo}/>
    <img src={googlePlay}/>

</a>
</div>
        </div>
         <div className='col-6'>
      <img src={leadingimg}/>
     
       </div>
      
        </div>
        
        <div className='container card__box '>
                    <div class="row">
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Scan Pay</h4>
                            <div class="pay_sec"><p>Scan QR code of any Montra Merchant using Personal App & simply make payment directly</p></div>
                        </div>
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Fund Transfer</h4>
                            <div class="pay_sec"><p>Transfer Funds to any bank account directly from your bank accounts linked to your App</p></div>

                        </div>
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Chat Pay</h4>
                            <div class="pay_sec"><p>Chat with other Montra users & send or receive payments while chatting</p></div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Payment Marketplace</h4>

                            <div class="pay_sec"><p>Our payment Marketplace offers access to payment services such as buy Airtime, Data & DTH .</p></div>

                        </div>
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Transaction History</h4>

                            <div class="pay_sec"><p>Get an easy access to track all your transactions on your Personal Montra app.</p></div>

                        </div>
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Payment Reminders</h4>
                            <div class="pay_sec"><p>Get an easy access to track all your transactions on your Personal Montra app</p></div>
                        </div>
                    </div>
                </div>
            </div>
         
            </div>
           
}

export default NewSection   