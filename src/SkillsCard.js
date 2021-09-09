import React from 'react';
import Grid from '@material-ui/core/Grid'

class SkillsCard extends React.Component {

  render(){
    return (
        <Grid className='skills-div' item xs={3}>
          <br/>{this.props.skillIcon}
        </Grid>
    )
  }
}

export default SkillsCard