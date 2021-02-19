import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../App.css';

class ProjectCard extends React.Component {

    render() {
        return (
            <Container>
                <div className='card_class'>
                    <Row>
                        <Col>
                            <h2>{this.props.dataObject.project}</h2>
                            <p style={{textAlign: 'left'}}>
                                <ul>
                                    {this.props.dataObject.points.map((point) => <li>{point}</li>)}
                                </ul>
                            </p>
                            <div>
                                {this.props.dataObject.techStack.map((tech) => <span className='ticket_class'>
                                    {' ' + tech}
                                </span>)}
                            </div>

                        </Col>

                        <Col md='auto' style={{ marginTop: '10px' }}>
                            <img width="100%" height="100%" src={require('../assets/' + this.props.dataObject.src).default} alt="project-demo" />
                        </Col>
                    </Row>
                    <p style={{ margin: '10px' }} className="row justify-content-md-center">
                        <a href={this.props.dataObject.link} target="_blank">
                            <span className='ticket_class'>
                                <img width='24px' height='24px' src={require('../assets/link-logo.png').default}></img>
                                {this.props.dataObject.project}
                            </span>
                        </a>
                    </p>
                </div>
            </Container>
        );
    }
}

export default ProjectCard;