import React from 'react'
import {Grid }from 'semantic-ui-react'
import ProjectCard from './ProjectCard'


class ProjectContainer extends React.Component {

  render(){
    return (
      <div >  
        <Grid container textAlign='center' style={{ height: '70vh' }} verticalAlign='top' >  
          <ProjectCard />
        </Grid>
      </div>
    )
  }
}

export default ProjectContainer