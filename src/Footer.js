import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa"

class Footer extends React.Component {

  render(){
    return (
        <Container textAlign='center' fluid>
          <Divider />
            <h1 className='lisa-footer'>
                   © Lisa McGerr 2021
            <a href='https://github.com/lisamcgerr' target='blank'><DiGithubBadge size={55}/></a>
            <a href='https://www.linkedin.com/in/lisamariemcgerr/' target='blank' ><FaLinkedin size={50} /></a>
            </h1>
            <br></br>
         
        </Container>
    )
  }
}

export default Footer
