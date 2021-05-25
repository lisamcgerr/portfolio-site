import React from 'react'
import Grid from '@material-ui/core/Grid'
import SkillsCard from './SkillsCard'
import { DiRuby, DiReact, DiJavascript1, DiRor, DiVisualstudio, DiTerminal, DiSqllite, DiGithubBadge, DiCss3, DiBootstrap, DiHtml5 } from "react-icons/di"
import { SiRedux } from 'react-icons/si'

class SkillsContainer extends React.Component {

  renderSkills = () => {
    const skills = [
      <DiRuby />,  
      <DiReact />,
      <SiRedux />,
      <DiJavascript1 />, 
      <DiRor />, 
      <DiVisualstudio />, 
      <DiTerminal />, 
      <DiSqllite />, 
      <DiGithubBadge />, 
      <DiCss3 />,
      <DiHtml5 />, 
      <DiBootstrap />,
    ]
    return skills.map(skillIcon => (
        <SkillsCard 
          key={skillIcon.index} 
          skillIcon={skillIcon}  
        />
    ))
  }  

  render(){
    return (
      <div>
        <h1>Skills</h1>
        <Grid container spacing={3} textAlign='center'>
          {this.renderSkills()}
        </Grid>
      </div>
    )
  }
}

export default SkillsContainer