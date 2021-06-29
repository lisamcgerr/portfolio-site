import React from 'react'

import Grid from '@material-ui/core/Grid'


class ProjectCard extends React.Component {

  render(){
    return (
      <> 
        <Grid item textAlign='center' xs={6}>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/WSbX3-Bpv0I" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
            <h3>Cooking with Friends</h3>
            <p>A Ruby on Rails, React and Redux full stack app that allows users to virtually create cooking classes with other users</p> 
        </Grid>
        
        <Grid item textAlign='center' xs={6}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/1SaYnOCLOGQ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>

            <h3>Whirlpool</h3>
            <p>A Ruby on Rails app that allows users to find community around games</p> 
        </Grid>
      </>
    )
  }
}

export default ProjectCard