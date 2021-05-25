import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa"
import { GrMedium } from 'react-icons/gr'
import { SiGmail } from 'react-icons/si'
import { Grid } from 'semantic-ui-react'

class Footer extends React.Component {

  render(){
    return (
      <Grid centered textAlign='center' style={{ height: '10vh' }} verticalAlign='top' >
        <Container textAlign='center' fluid>
          <Divider />
            <h1 className='lisa-footer'>
              Copyright © Lisa McGerr 2021. All Rights Reserved. 
            </h1>
            <h1>
              <a href='https://github.com/lisamcgerr' target='blank'><DiGithubBadge size={55}/></a>
              <a href='https://www.linkedin.com/in/lisamariemcgerr/' target='blank' ><FaLinkedin size={50} /></a>
              <a href='https://lisamcgerr.medium.com/' target='blank'><GrMedium size={50} /></a>
              <a href='mailto:lisamarie.mcgerr@gmail.com' target='blank'><SiGmail size={50} /></a>
            </h1>
            <br></br>
         
        </Container>
      </Grid>
    )
  }
}

export default Footer
