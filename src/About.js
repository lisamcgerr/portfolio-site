import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

class About extends React.Component {

  render(){
    return (
      <div>
        <Container textAlign='left'>Left Aligned</Container>
        <Container textAlign='center'>Center Aligned</Container>
        <Container textAlign='right'>Right Aligned</Container>
        <Container textAlign='justified'>
            <b>About Me</b>
            <Divider />
            <p>
                An energetic Full Stack Software Developer emerging from a 10+ year 
                career in the customer service and hospitality industries. 
                Skilled with strong interpersonal communication, adaptability, 
                and attention to detail, allow me to collaborate with clients and 
                cross-functional teams to quickly resolve problems. Experienced in 
                Ruby on Rails, React, Redux, and JavaScript-based programming coupled 
                with a degree in psychology that invokes relentless interest in enhancing 
                the user experience. Excited to learn and grow in this ever-changing industry.   
            </p>
        </Container>
      </div>
    )
  }
}

export default About
