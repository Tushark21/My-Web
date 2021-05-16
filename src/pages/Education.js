import React from 'react'
import ReactangularCard from '../components/RectangularCard';
import PrimaryLayout from '../Layouts/PrimaryLayout';

class Education extends React.Component {

    render() {
        const items = this.props.dataList.map((data,i) => <ReactangularCard key={i} dataObject={data} />);
        return (
            <PrimaryLayout heading={'📚 EDUCATION'}>
                {items}
            </PrimaryLayout>
        );
    }
}

export default Education;