import React from 'react'
import Heading from '../components/Heading';

class Education extends React.Component {

    render() {
        const items = this.props.dataList.map((data) => <Heading dataObject={data} />);
        return (
            <div>
                <h1>EDUCATION</h1>
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

export default Education;