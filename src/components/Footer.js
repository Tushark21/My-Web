import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Router, Switch } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer_class'>
                <Container >
                    
                    <Row bg='dark' className="row justify-content-end" style={{marginTop: '48px'}}>
                        
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Footer;