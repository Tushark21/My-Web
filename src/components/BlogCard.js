import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

class BlogCard extends React.Component {

    render() {
        return (
            <div style={{  display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#ffffff88', width: '18rem', margin: '10px', borderRadius: '10px' }}>
                <img style={{ width: '18rem', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} src={this.props.dataObject.src} />
                <div style={{ margin: '10px' }}>
                    <p style={{ fontWeight: 'bold' }}>{this.props.dataObject.title}</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>
                            <a href={this.props.dataObject.link} target='_blank'>Medium</a>
                        </div>
                        <div>
                            <a href={this.props.dataObject.link} target='_blank'>manishsundriyal.com</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogCard;


/*


            <Card bg="light" text="primary" style={{ width: '16rem', margin: '10px'}} >
                <Card.Img variant="top" src={require('../assets/'+this.props.dataObject.src).default} />
                <Card.Body variant="success">
                    <Card.Title>{this.props.dataObject.title}</Card.Title>
                    <a href={this.props.dataObject.link} target='_blank'><Button variant="primary">View</Button></a>
                </Card.Body>
            </Card>


            <Card style={{ width: '16rem', margin: '10px'}} class='card_class'>
                <Card.Img variant="top" src={require('../assets/'+this.props.dataObject.src).default} />
                <Card.Body>
                    <Card.Title>{this.props.dataObject.title}</Card.Title>
                    <a href={this.props.dataObject.link} target='_blank'><Button variant="primary">View</Button></a>
                </Card.Body>
            </Card>

            ////////////////

            <div style={{width: '250px', height: '320px', padding: '4px'}} className='card_class'>
                <img style={{width: '240px', height: '240px'}} src={require('../assets/'+this.props.dataObject.src).default}></img>
                <p>{this.props.dataObject.title}</p>
                <a href={this.props.dataObject.link} target='_blank'><Button variant="primary">View</Button></a>
            </div>
            */
