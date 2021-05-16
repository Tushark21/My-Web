import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../App.css';
import LinkIcon from '@material-ui/icons/Link';

class ProjectCard extends React.Component {

    render() {
        return (
            <div className='card_class'>
                <Row>
                    <Col>
                        <h2>{this.props.dataObject.project}</h2>
                        <ul>
                            {this.props.dataObject.points.map((point,i) => <li key={i} >{point.text}</li>)}
                        </ul>
                        <div>
                            {this.props.dataObject.techStack.map((tech,i) => 
                                <span key={i} className='ticket_class'> {' ' + tech} </span>)
                            }
                        </div>
                    </Col>
                    <Col md='auto' style={{ marginTop: '10px' }}>
                        <img width="100%" height="100%" src={require('../assets/' + this.props.dataObject.src).default} alt="project-demo" />
                    </Col>
                </Row>
                <p style={{ margin: '10px' }} className="row justify-content-md-center">
                {this.props.dataObject.links.map((linkObj)=>
                    <a href={linkObj.link} target="_blank" rel="noopener noreferrer">
                        <span className='ticket_class'>
                            <LinkIcon style={{marginBottom:"3px"}}/>
                            {' '+linkObj.text}
                        </span>
                    </a>
                    )}
                </p>
            </div>
        );
    }
}

export default ProjectCard;