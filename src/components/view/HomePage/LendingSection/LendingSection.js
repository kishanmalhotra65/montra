import React from "react"
import './LendingSection.css';
import lennding from '../../../../assets/lennding.png';
import btnLogo from '../../../../assets/logo.png';
import appleLogo from '../../../../assets/appleLogo.png';
import googlePlay from '../../../../assets/googlePlay.png';
function LendingSection(){
     return(
        <div className="Lending">
          <div className='container-fluid LendingConatainer'>
            <div className='row'>
              <div className="col-1"></div>
              <div className="col-5 mt-5">
                 <div className="LendingContent">
                     <p>Lending</p>
                     <h3><strong>Compare the loan offers from our Lending Partners </strong> and get them disbursed instantly in your bank accounts</h3>
                     <div className='row btn__main '>
                            <div className='col-4'>
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
                        </div>
                    </div>
                </div>
              <div className="col-5 mt-5">
              <img className="lenndingImage" src={lennding} alt="" srcset="" />
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
     )
}
export default LendingSection