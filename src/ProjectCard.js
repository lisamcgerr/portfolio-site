import React from 'react'
import { Card, Placeholder } from 'semantic-ui-react'
//import Grid from '@material-ui/core/Grid'


class ProjectCard extends React.Component {

  render(){
    return (
      <div>  
          <Card.Group itemsPerRow={3}>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Placeholder.Image rectangular />
                </Placeholder>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Placeholder.Image rectangular />
                </Placeholder>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Placeholder.Image rectangular />
                </Placeholder>
              </Card.Content>
            </Card>
          </Card.Group>
      </div>
    )
  }
}

export default ProjectCard