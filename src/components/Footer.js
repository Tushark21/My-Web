import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Router, Switch } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer_class'>
                <Container >

                    <Row className="row justify-content-md-end" >
                        {this.props.dataList.profiles.map((data) => <a key={data.key} href={data.link} target='_blank'>
                            <p style={{width: '100px', margin: '5px', padding: '4px', fontSize: '16px', backgroundColor: '#66b3ff', color: 'black' }}>{data.text}</p>
                        </a>)}

                    </Row>
                </Container>
            </div >
        );
    }
}

export default Footer;