import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col test">
                        <div className="float-left">
                            <span className="text-muted mr-1">Logo</span><span className="text-muted">2019 Mobiotics. All Rights Reserved</span>
                        </div>
                        <div className="float-right terms">
                            <p className="text-muted ">About  Help  Terms and Conditons  Privacy Policy  Support</p>
                         </div>
                        
                        
                    </div>
                  </div>
                  <div className="row">
                     <div className="col raw">
                        <div className="float-left app-class">
                            <p className="text-muted">Our Apps</p>
                            <img src="https://www.neoncrm.com/wp-content/uploads/2017/06/appstore.png" height="34" width="100"></img>
                            <img src="https://www.codot.gov/safety/alcohol-and-impaired-driving/planahead/2011-assets/android-market-icon.png/image" height="40" width="100"></img>
                        </div>
                        <div className="float-right social-media">
                            <p className="text-muted">Connect with us <span><i className="fab fa-facebook mr-2"></i><i className="fab fa-pinterest mr-2"></i><i className="fab fa-twitter mr-2"></i><i className="fab fa-linkedin"></i></span></p>
                         </div>
                        
                        
                    </div>
                </div>

            </div>
        )
    }
}
export default Footer;