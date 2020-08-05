import React from 'react';
import { Button, Navbar, Nav} from 'react-bootstrap';
import '../App.css'

function TheNav(){
    return(
        <Navbar bg="light" className="header-container" fixed="top">
            <Navbar.Brand href="../">
                <img
                    alt=""
                    src={require(`../images/logo-iossa-black.png`)}
                    width="155"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="https://forum.iosoccer-sa.bid">Foro</Nav.Link>
                <Nav.Link href="https://stats.iosoccer-sa.bid">Estadísticas</Nav.Link>
                <Nav.Link href="https://anzaldoivan.github.io/profile/">Perfiles</Nav.Link>
                <Nav.Link href="https://anzaldoivan.github.io/squad-builder/">Squad Builder</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default TheNav