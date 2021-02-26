import React from 'react';
import BlogCard from '../components/BlogCard';
import { Container, Row } from 'react-bootstrap';

class Me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageNum: 13,
            start: false,
            obstraction: false
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.changeImage(),
            150
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    changeImage() {

        if (!this.state.start && Math.floor(Math.random() * 80) % 79 === 0) {
            this.setState({
                start: true
            });
        }

        var num = this.state.imageNum;
        num++;

        if (!this.state.start) {
            num = num > 15 ? 13 : num;
        }

        else {
            if (Math.floor(Math.random() * 40) % 37 === 0) {
                this.setState({
                    obstraction: true
                });
            }

            if (this.state.obstraction) {
                num = num > 12 ? 1 : num;
            }
            else {
                num = num > 6 ? 1 : num;
            }

            if (num == 1) {
                this.setState({
                    obstraction: false
                });
            }
        }
        this.setState({
            imageNum: num
        });
        //console.log(require('../assets/' + this.state.imageNum + '.png').default);
    }

    render() {
        return (
            <Container>
                <div className='me' style={{ marginTop: '15px', fontSize: '20px', backgroundImage: 'url(' + require('../assets/' + this.state.imageNum + '.png').default + ')' }}>
                    <Row className="row justify-content-md" >
                        <p>Hi! I am Tushar Gautam, a Computer Science Student from Delhi, India.</p>
                    </Row>
                    <Row className="row justify-content-md" >
                        <ul>
                            {this.props.dataList.profiles.map((data) => <a key={data.key} href={data.link} target='_blank'>
                                <li style={{ listStyleType: 'none', fontSize: '16px', fontWeight: 'bold' }} className='ticket_class'>{data.text}</li>
                            </a>)}
                        </ul>
                    </Row>
                </div>
                <h2>Blogs & Snippets</h2>
                <hr></hr>
                <Row className="row justify-content-md-center">
                    {this.props.dataList.blogs.map((blog) => <BlogCard key={blog.key} dataObject={blog} />)}
                </Row>
            </Container >
        );
    }
}

export default Me;