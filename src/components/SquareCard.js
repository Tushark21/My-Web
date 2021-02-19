import React from 'react';

class SquareCard extends React.Component {

    render() {
        return (
            <div className='card_class'>
                <img width='128px' height='128px' src={require('../assets/' + this.props.skillObject.src).default}></img>
                <p style={{textAlign:'center', fontSize: '22px',}}>{' '+this.props.skillObject.text}</p>
            </div>
        );
    }
}
//style={{ display: "inline-block", padding:"10px", align: "top"}}
export default SquareCard;