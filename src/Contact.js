import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react'

class Contact extends React.Component {

  render(){

    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top' >  
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
    )
  }
}

export default Contact
