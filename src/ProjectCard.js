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
                  src="https://user-images.githubusercontent.com/73184313/120459304-b0c4e280-c35d-11eb-8e95-b7c4ac02bd5e.png"
                  alt="Cooking with Friends Login page"
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
                  src="https://user-images.githubusercontent.com/73184313/120459478-d94cdc80-c35d-11eb-9688-599a12bcee65.png"
                  alt="Whirlpool home page"
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