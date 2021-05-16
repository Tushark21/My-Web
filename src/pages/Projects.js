import React from 'react';
import PrimaryLayout from '../Layouts/PrimaryLayout';
import ProjectCard from '../components/ProjectCard';


class Projects extends React.Component {
    render() {
        return (
            <PrimaryLayout heading={'👨‍💻 PROJECTS'}>
                {this.props.dataList.map((project,i) => <ProjectCard key={i} dataObject={project} />)}
            </PrimaryLayout>
        );
    }
}

export default Projects;