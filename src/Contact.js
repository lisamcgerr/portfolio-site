import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa"
import { GrMedium } from 'react-icons/gr'
import { SiGmail } from 'react-icons/si'

class Contact extends React.Component {

  render(){

    return (
      <div>
        <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='top' >  
          <Grid.Column style={{ maxWidth: 550 }}>
            <br></br>
            <h1>Let's Connect!</h1>
            <Form>
              <Form.Field>
                <label>Full Name:</label >
                <input icon='user' placeholder='Full Name' />
              </Form.Field>
              <Form.Field>
                <label>Email Address:</label>
                <input icon='mail' placeholder='Email Address' />
              </Form.Field>
              <Form.TextArea label='Message:' placeholder='Message...' />
              <Button type='submit'>Submit</Button>
            </Form>
            </Grid.Column>
        </Grid>
          <p>
            <a href='https://github.com/lisamcgerr' target='blank'><DiGithubBadge size={55}/></a>
            <a href='https://www.linkedin.com/in/lisamariemcgerr/' target='blank' ><FaLinkedin size={50} /></a>
            <a href='https://lisamcgerr.medium.com/' target='blank'><GrMedium size={50} /></a>
            <a href='mailto:lisamarie.mcgerr@gmail.com' target='blank'><SiGmail size={50} /></a>
          </p>
      </div>
    )
  }
}

export default Contact
