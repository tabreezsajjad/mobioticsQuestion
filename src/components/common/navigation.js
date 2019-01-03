import React, { Component } from 'react';


class Navigation extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="dropdown">
                        <div className="dropbtn navbar-toggler-icon"></div>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <a className="navbar-brand ml-1" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                        </ul>
                        <div className="my-2 my-lg-0">
                            <span><i className="fas fa-search"></i> <i className="fas fa-bell"></i> <i className="fas fa-globe-asia"></i></span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navigation;