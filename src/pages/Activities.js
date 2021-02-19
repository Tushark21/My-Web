import React from 'react';
import Heading from '../components/Heading';

class Activities extends React.Component {
    render() {
        const items = this.props.dataList.map((data) => <Heading dataObject={data} />);
        return (
            <div>
                <h1>ACHIEVEMENTS & ACTIVITIES</h1>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12">
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Activities;