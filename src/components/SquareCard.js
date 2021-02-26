import React from 'react';

class SquareCard extends React.Component {
    render() {
        return (
            <div className='square_class' style={{width: '130px', height: '105px'}}>
                <div className=''>
                    <p className='beat_class' style={{ textAlign: 'center',fontSize: '22px', lineHeight: '100px'}}>{' ' + this.props.skillObject.text}</p>
                </div>
            </div>
        );
    }
}
//style={{ display: "inline-block", padding:"10px", align: "top"}}
export default SquareCard;