import React from 'react'
import {Grid }from 'semantic-ui-react'
import ProjectCard from './ProjectCard'


class ProjectContainer extends React.Component {

  render(){
    return (
      <div >  
        <Grid class='project-container' container textAlign='center' style={{ height: '80vh' }} verticalAlign='top' >  
          <ProjectCard />
        </Grid>
      </div>
    )
  }
}

export default ProjectContainer