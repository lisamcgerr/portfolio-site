import React from 'react';
import Grid from '@material-ui/core/Grid'

class SkillsCard extends React.Component {

  render(){
    return (
        <Grid textAlign='center' item xs={3}>
          {this.props.skillIcon}
        </Grid>
    )
  }
}

export default SkillsCard