import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa"
import { GrMedium } from 'react-icons/gr'
import { SiGmail } from 'react-icons/si'

class Footer extends React.Component {

  render(){
    return (
        <Container textAlign='center' fluid>
          <Divider />
            <p className='lisa-footer'>Copyright © Lisa McGerr 2021. All Rights Reserved.</p>
              <p>
                <a className='links' href='https://github.com/lisamcgerr' target='blank'><DiGithubBadge size={55} /></a>
                <a className='links' href='https://www.linkedin.com/in/lisamariemcgerr/' target='blank' ><FaLinkedin size={50} /></a>
                <a className='links' href='https://lisamcgerr.medium.com/' target='blank'><GrMedium size={50} /></a>
                <a className='links' href='mailto:lisamarie.mcgerr@gmail.com' target='blank'><SiGmail size={50} /></a>
              </p>
        </Container>
    )
  }
}

export default Footer
