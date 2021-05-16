import React from 'react';
import PrimaryLayout from '../Layouts/PrimaryLayout';
import SkillCard from '../components/SkillCard';

class Skills extends React.Component {
    render() {
        const items = this.props.dataList.map((data,i) => <SkillCard key={i} dataObject={data} />);
        return (
            <PrimaryLayout heading={'🤹‍♂️ SKILLS'}>
                {items}
            </PrimaryLayout>
        );
    }
}

export default Skills;