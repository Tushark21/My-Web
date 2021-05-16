import React from 'react'
import { Media } from 'react-bootstrap'
import '../App.css';

class ReactangularCard extends React.Component {

    render() {
        return (
            <div className="card_class">
                <div style={{ flex: '1 1 auto' }}>
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
                        {this.props.dataObject.links.map((link,i) => <a key={i} href={link.link} target="_blank" rel="noopener noreferrer"><span className='ticket_class'>{link.text}</span></a>)}
                    </p>
                </div>

                <img
                    width={128}
                    height={128}
                    className="mr-3"
                    src={require('../assets/' + this.props.dataObject.src).default}
                    alt="logo"
                    className='row justify-content-md-end'
                    style={{ margin: '10px', flex: '1 1 128' }}
                />
            </div>
        );
    }
}

export default ReactangularCard;

