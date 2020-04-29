import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import '../App.css'

function Nav(){
    return(
            <Navbar bg="light" className="header-container" fixed="top">
                <Navbar.Brand href="../">
                    <img
                        alt=""
                        src={require(`../images/logo-iossa-black.png`)}
                        width="194"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
            </Navbar>
    )
}

export default Nav