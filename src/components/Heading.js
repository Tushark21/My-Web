import React from 'react'
import { Media } from 'react-bootstrap'
import '../App.css';
//<a href="https://nfcvigyanvihar.kvs.ac.in/">

class Heading extends React.Component {

    render() {
        return (
            <div className="card_class">
                <Media>

                    <Media.Body>
                        <h2>{this.props.dataObject.title}</h2>
                        <h4>
                            {this.props.dataObject.subTitle}
                        </h4>
                        <p>
                            <i>
                                {this.props.dataObject.info}
                            </i>
                        </p>
                        <p>
                            {this.props.dataObject.links.map((link) => <a href={link.link} target="_blank"><span className='ticket_class'>{link.text}</span></a>)}
                        </p>

                    </Media.Body>
                    <img
                        width={128}
                        height={128}
                        className="mr-3"
                        src={require('../assets/' + this.props.dataObject.src).default}
                        alt="logo"
                    />
                </Media>
            </div>
        );
    }
}

export default Heading;

