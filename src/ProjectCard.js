import React from 'react'
import { Grid } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'


class ProjectCard extends React.Component {

  render(){
    return (
      <div>  
        <Grid textAlign='center' style={{height: "60vh"}} verticalAlign='top'>
          <Grid.Column style={{ maxWidth: 550 }} >
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/73184313/119858466-1d615c80-beda-11eb-8de2-89b3edee48d1.png"
                  alt="First slide"
                  width="1000px"
                />
                <Carousel.Caption>
                  <h3>Cooking with Friends</h3>
                  <p>A Ruby on Rails, React and Redux full stack app that allows users to virtually create cooking classes with other users</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/73184313/120422746-8a3b8300-c32e-11eb-9418-d807f3e8bcde.png"
                  alt="Whirlpool"
                  width="1000px"
                />

                <Carousel.Caption>
                  <h3>Whirlpool</h3>
                  <p>A Ruby on Rails app that allows users to find community around games</p>
                </Carousel.Caption>
              </Carousel.Item>
            
            </Carousel>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default ProjectCard