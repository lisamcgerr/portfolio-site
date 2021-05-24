import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

class About extends React.Component {

  render(){
    return (
      <div>
        <Container textAlign='justified'>
            <h1>Who am I?</h1>
            <Divider />
            <h3>
                Let's build something great together!
            </h3>
            <p>
                An energetic Full-Stack Software Developer emerging from a 10+ year 
                career in the customer service and hospitality industries. 
                Skilled with strong interpersonal communication, adaptability, 
                and attention to detail, which allow me to collaborate with clients and 
                cross-functional teams to quickly resolve problems. Experienced in 
                Ruby on Rails, React, Redux, and JavaScript-based programming coupled 
                with a degree in psychology that invokes relentless interest in enhancing 
                the user experience. Excited to learn and grow in this ever-changing industry.   
            </p>
            <iframe textAlign='center' width="800" height="450" src="https://www.youtube.com/embed/cJh1kPJiEp8" title="About Lisa McGerr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Container>
      </div>
    )
  }
}

export default About
