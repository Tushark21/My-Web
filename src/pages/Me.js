import React from 'react';
import BlogCard from '../components/BlogCard';
import { Container, Row } from 'react-bootstrap';

class Me extends React.Component {

    render() {
        return (
            <Container>
                <div className=''>
                <Row className="row justify-content-md" >
                    <p style={{marginTop: '15px', fontSize: '20px'}}>Hi! I am Tushar Gautam, a Computer Science Student from Delhi, India.</p>
                </Row>
                <Row className="row justify-content-md" >
                    <ul>
                        {this.props.dataList.profiles.map((data) => <a href={data.link} target='_blank'>
                            <li style={{ listStyleType: 'none', fontSize: '16px', fontWeight: 'bold'}} className='ticket_class'>{data.text}</li>
                        </a>)}
                    </ul>
                </Row>
                </div>
                <h2>My Blogs</h2>
                <hr></hr>
                <Row className="row justify-content-md-center">
                    {this.props.dataList.blogs.map((blog) => <BlogCard dataObject={blog} />)}
                </Row>
            </Container >
        );
    }
}

export default Me;