import React from 'react';
import "./NewPayment.css";
import PayImg from "../../../assets/Group.png";

import PayRightig from "../../../assets/Group 5 1.png";

function NewPayment() {
    
    return (
        <div className='paymentSection'>
         <div className="container">

            <div className="row ">
           
                <div className="col-6 col-sm-12 col-md-6 paymenttext"><div className="PayRow"><h2>Get Paid Instantly with Payment Links </h2>
              
              
                <p>Sell online without a website or mobile app. Create a payment link in easy steps & share the link with your customers no coding required.</p>
                <h6>Sign-in on your Montra app / merchant portal</h6>
                <p>New users can Download Montra app to sign-up for Montra Business account. If you are a registered user, sign-in on your Montra app or Montra Merchant Portal</p>
                <h6>Create a Payment Link</h6>
                <p>Create a Payment Link to offer the product or service you are selling</p>
                <h6>Share Payment Link and get paid</h6>
                <p>Share the Payment Link through SMS, Email, WhatsApp etc. with the customer to make payment</p>
                </div>
                </div>
                <div className="col-6 col-sm-12 col-md-6"><div className="PayRow"><img src={PayImg} alt="" /></div></div>
            </div>
            
         </div>
         <div className="container SecondSection">
            <div className="row">
                <div className="col-6 leftsection "> <h2>Why Montra Payment Gateway</h2> <div class="column" >
                <h6>Accept All payment Modes</h6>
                <p>With Domestic and International Credit and Debit cards,Escrow Pay, Payment Links,Pay with Montra and net banking with most of the banks, Montra provides the most extensive set of payment methods</p>
                </div>
                <div class="column" >
                <h6>Accept All payment Modes</h6>
                <p>With Domestic and International Credit and Debit cards,Escrow Pay, Payment Links,Pay with Montra and net banking with most of the banks, Montra provides the most extensive set of payment methods</p>

                </div>
                <div class="column" >
                <h6>Accept All payment Modes</h6>
                <p>With Domestic and International Credit and Debit cards,Escrow Pay, Payment Links,Pay with Montra and net banking with most of the banks, Montra provides the most extensive set of payment methods</p>

                </div>
                <div class="column" >
                <h6>Accept All payment Modes</h6>
                <p>With Domestic and International Credit and Debit cards,Escrow Pay, Payment Links,Pay with Montra and net banking with most of the banks, Montra provides the most extensive set of payment methods</p>

                </div>
                <div class="column" >
                <h6>Accept All payment Modes</h6>
                <p>With Domestic and International Credit and Debit cards,Escrow Pay, Payment Links,Pay with Montra and net banking with most of the banks, Montra provides the most extensive set of payment methods</p>

                </div>
                </div>
                <div className="col-6 rightimage"><img src={PayRightig} alt="" /></div>
                </div>
         </div>
        </div >
        
        


    )
}

export default NewPayment