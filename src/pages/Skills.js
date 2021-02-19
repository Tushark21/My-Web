import React from 'react';
import SkillCard from '../components/SkillCard';

class Skills extends React.Component {
    render() {
        const items = this.props.dataList.map((data) => <SkillCard dataObject={data} />);
        return (
            <div>
                <h1>SKILLS & RESEARCH INTRESTES</h1>
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

export default Skills;