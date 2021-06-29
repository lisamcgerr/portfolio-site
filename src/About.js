import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

class About extends React.Component {

  render(){
    return (
      <div>
        <Container fluid textAlign='center' style={{ height: '80vh' }} >
          <br></br>
            <h1>About Me</h1>
            <Divider />
              <h2>Let's build something great together!</h2>
            <iframe textAlign='center' width="800" height="450" src="https://www.youtube.com/embed/cJh1kPJiEp8" title="About Lisa McGerr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <br></br>
              <ul>
                <li></li>
              </ul>
        </Container>
      </div>
    )
  }
}

export default About
