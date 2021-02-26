import React from 'react';
import ReactangularCard from '../components/RectangularCard';
import PrimaryLayout from '../Layouts/PrimaryLayout';

class Activities extends React.Component {
    render() {
        const items = this.props.dataList.map((data) => <ReactangularCard key={data.key} dataObject={data} />);
        return (
            <PrimaryLayout heading={'ACHIEVEMENTS & ACTIVITIES'} >
                {items}
            </PrimaryLayout>
        );
    }
}

export default Activities;