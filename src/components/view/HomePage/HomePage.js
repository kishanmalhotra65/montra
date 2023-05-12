import React from 'react';
import SubHeader from '../../SubHeader/SubHeader';
import './HomePage.css';
import HomepageMoblieImg from '../../../assets/HomepageMoblieImg.png';
import dashboard from '../../../assets/dashboard.png'

function HomePage() {
    return (   
        <div className="Home-Page">
                <SubHeader/>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-3 Home-Page-Heading mt-5'>
                        <h2>Powering Digital Payments Lending for Everyone</h2>
                        <p>Marketplaces for multiparty payments, Lending, Insurance Investment Products</p>
                        <button>Download</button>
                    </div>
                    <div className='col-9'>
                        <div>
                          <img src={HomepageMoblieImg} alt='HomepageMoblieImg'/>
                         <img src={dashboard} alt='dashboard'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}

export default HomePage