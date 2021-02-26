import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky='top'>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={require('../assets/icon1.png').default}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Tushar Gautam</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link href="/">ME!</Nav.Link>
                        <Nav.Link href="/education">Education</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/skills">Skills</Nav.Link>
                        <Nav.Link href="/activities">Achievements & Activities</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;

/*
<Nav className="justify-content-end">
                    <img width="32px" height='32px' href="/home" src={gitLogo} />
                    <Nav.Link href="/home">GITHUB</Nav.Link>

                    <img width="32px" height='32px' href="/education" src={googleLogo} />
                    <Nav.Link href="/education">GMAIL</Nav.Link>

                    <img width="32px" height='32px' href="/projects" src={linkedinLogo}></img>
                    <Nav.Link href="/projects">LINKEDIN</Nav.Link>
                </Nav>

                */

