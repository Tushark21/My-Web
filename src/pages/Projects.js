import React from 'react';
import ProjectCard from '../components/ProjectCard';


class Projects extends React.Component {
    render() {
        return (
            <div>
                <h1>PROJECTS</h1>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12">
                            {this.props.dataList.map((project) => <ProjectCard dataObject={project} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;