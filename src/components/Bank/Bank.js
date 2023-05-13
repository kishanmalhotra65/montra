import React from 'react'
import bankingImage from "../../assets/banking.png";
import agentBanking from "../../assets/agencyBanking.png";
import "./Bank.css"
function Bank() {
    return (
        <div className='banking'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <div class="">
                            <h4>Banking</h4>
                            <p>Open a bank account instantly with our partner banks and operate through our Agent Network</p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src={bankingImage} alt="" srcset="" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <img src={agentBanking} alt="agentBanking" srcset="" />
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div class="col-6">
                                <h4 className='card__box__title'>Account Opening</h4>
                                <div class="pay_sec"><p>Customers can open a bank account instantly with any of our parner banks</p></div>
                            </div>
                            <div class="col-6">
                                <h4 className='card__box__title'>KYC</h4>
                                <div class="pay_sec"><p>Customers can submit documents and complete kyc through Montra personal app for the newly opened account</p></div>

                            </div>
                        </div>
                        <div className='row'>
                            <div class="col-6">
                                <h4 className='card__box__title'>Agency Banking</h4>
                                <div class="pay_sec"><p>Scan QR code of any Montra Merchant using Personal App and simply make payment directly from any of your bank Accounts</p></div>
                            </div>
                            <div class="col-6">
                                <h4 className='card__box__title'>Agency  Banking Statement</h4>
                                <div class="pay_sec"><p>Scan QR code of any Montra Merchant using Personal App and simply make payment directly from any of your bank Accounts</p></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bank;