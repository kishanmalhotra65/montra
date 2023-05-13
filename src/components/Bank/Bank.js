import React from 'react'
import bankingImage from "../../assets/banking.png"
function Bank() {
    return (
        <div className='banking'>
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-6'></div>
                    <div className='col-6'>
                        <img src={bankingImage} alt="" srcset="" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'></div>
                    <div className='col-6'></div>
                </div>
            </div>
        </div>
    )
}

export default Bank;