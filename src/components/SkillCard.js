import React from 'react';
import SquareCard from './SquareCard';
import { Row, Col, Container } from 'react-bootstrap';

class SkillCard extends React.Component {

    render() {
        return (
            <div>
                <h2 className='sub_heading_class'>
                    {this.props.dataObject.catogery}
                </h2>
                <hr></hr>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {this.props.dataObject.skills.map((skill,i) => <div key={i} style={{margin: '10px'}}><Col><SquareCard skillObject={skill} /></Col></div>)}
                </div>
            </div>
        );
    }
}

export default SkillCard;