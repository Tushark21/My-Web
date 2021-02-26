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
                <div className="row justify-content-md-center">
                    {this.props.dataObject.skills.map((skill) => <div key={skill.key} style={{margin: '20px'}}><Col><SquareCard skillObject={skill} /></Col></div>)}
                </div>
            </div>
        );
    }
}

export default SkillCard;