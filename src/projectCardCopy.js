import React from 'react'
import Grid from '@material-ui/core/Grid'


class ProjectCard extends React.Component {

  render(){
    return (
      <> 
        <Grid item textAlign='center' xs={6}>
          <br></br>
            <h2 class='project-title'>Cooking with Friends</h2>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/WSbX3-Bpv0I" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
                <strong class='project-description'>A Ruby on Rails, React and Redux full stack app that allows users to virtually create cooking classes with other users</strong>
                  <ul>
                    <li class='cards'>Integrated JSON Web Tokens and localStorage to store encrypt and persist client-side information</li>
                    <li class='cards'>Built an API utilizing Rails Serializers to structure backend data</li>
                    <li class='cards'>Utilized Redux and React to store frontend state across components</li>
                    <li class='cards'>Incorporated Semantic UI for clean and organized styling</li>
                  </ul> 
        </Grid>
        
        <Grid item textAlign='center' xs={6}>
          <br></br>
            <h2 class='project-title'>Whirlpool</h2>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/1SaYnOCLOGQ" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
                <strong class='project-description'>A Ruby on Rails app that allows users to find community around games</strong> 
                  <ul>
                    <li class='cards'>Utilized session cookies and Bcrypt to store user data for secure log-in </li>
                    <li class='cards'>Implemented Active Storage to enable profile picture uploads</li>
                    <li class='cards'>Installed Active Record validations to ensure the validity of data stored to database and client-side</li>
                  </ul> 
        </Grid>
      </>
    )
  }
}

export default ProjectCard