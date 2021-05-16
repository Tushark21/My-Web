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
                        <a className="header_link" href="/"> 🙋‍♂️ ME!</a>
                        <a className="header_link" href="/education"> 📚 Education </a>
                        <a className="header_link" href="/projects"> 👨‍💻 Projects </a>
                        <a className="header_link" href="/skills"> 🤹‍♂️ Skills </a>
                        <a className="header_link" href="/activities"> 🏆 Achievements & Activities </a>
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
                    <a href="/home">GITHUB</a>

                    <img width="32px" height='32px' href="/education" src={googleLogo} />
                    <a href="/education">GMAIL</a>

                    <img width="32px" height='32px' href="/projects" src={linkedinLogo}></img>
                    <a href="/projects">LINKEDIN</a>
                </Nav>

                */

