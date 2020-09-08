import React from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
import logo from './logo.svg'
export default function Header() {
    return (
        <Navbar dark expand="md">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <img src={logo} width="65" alt=""/>
                            &nbsp;
                            <h3>Post Generator</h3>
                        </div>
                        
                        <a href="https://github.com/dsc-jss-noida" className="text-decoration-none text-white" target="_blank">
                            <i className="fa fa-github fa-3x mr-3"></i>
                        </a>
                        
                        
                    </div>
        </Navbar>  
 
    )
}
