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
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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