import React from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa"
//import Grid from '@material-ui/core/Grid'


class Footer extends React.Component {

  render(){
    return (
      <Grid centered textAlign='center'verticalAlign='top' >
        <Container fluid>
          <Divider fluid />
            <h1>
                   © Lisa McGerr 2021
            <a href='https://github.com/lisamcgerr' target='blank'><DiGithubBadge size={55}/></a>
            <a href='https://www.linkedin.com/in/lisamariemcgerr/' target='blank' ><FaLinkedin size={50} /></a>
            </h1>
        </Container>
      </Grid>

    )
  }
}

export default Footer
