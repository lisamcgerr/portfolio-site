import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa"
import Grid from '@material-ui/core/Grid'


class Footer extends React.Component {

  render(){
    return (
      <div> 
        <Container textAlign='justified'>
            <Divider />
            <h1>
            © Lisa McGerr 2021
            <a href='https://github.com/lisamcgerr' target='blank'><DiGithubBadge /></a>
            <a href='https://www.linkedin.com/in/lisamariemcgerr/' target='blank' ><FaLinkedin /></a>

            </h1>
        </Container>
      </div>
    )
  }
}

export default Footer
