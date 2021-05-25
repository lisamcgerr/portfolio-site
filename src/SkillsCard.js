import React from 'react';
import Grid from '@material-ui/core/Grid'

class SkillsCard extends React.Component {

  render(){
    return (
      <div>  
        <Grid textAlign='center' item xs={3}>
          <h1>{this.props.skillIcon}</h1>
        </Grid>
      </div>
    )
  }
}

export default SkillsCard