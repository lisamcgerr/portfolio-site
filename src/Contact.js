import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid'


class Contact extends React.Component {

  render(){

    return (
      <Grid item xs={12} spacing={3} textAlign='center' >  
          <h1>Let's Connect!</h1>
          <Form>
            <Form.Field>
              <label>Full Name:</label >
              <input placeholder='Full Name:' />
            </Form.Field>
            <Form.Field>
              <label>Email Address:</label>
              <input placeholder='Email Address:' />
            </Form.Field>
            <Form.TextArea label='Message:' placeholder='Message...' />
            <Button type='submit'>Submit</Button>
          </Form>
      </Grid>
    )
  }
}

export default Contact
