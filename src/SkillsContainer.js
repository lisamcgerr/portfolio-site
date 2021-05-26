import React from 'react'
import SkillsCard from './SkillsCard'
import { DiRuby, DiReact, DiJavascript1, DiRor, DiVisualstudio, DiTerminal, DiSqllite, DiGithubBadge, DiCss3, DiBootstrap, DiHtml5 } from "react-icons/di"
import { SiRedux } from 'react-icons/si'
import { Grid } from 'semantic-ui-react'


class SkillsContainer extends React.Component {

  renderSkills = () => {
    const skills = [
      <DiRuby style={{color: 'red'}} size={150} />,  
      <DiReact size={150} />,
      <SiRedux size={150} />,
      <DiJavascript1 size={150} />, 
      <DiRor size={150} />, 
      <DiHtml5 size={150} />, 
      <DiSqllite size={150} />, 
      <DiGithubBadge size={150} />, 
      <DiCss3 size={150} />,
      <DiBootstrap size={150} />,
      <DiVisualstudio size={150} />, 
      <DiTerminal size={150} />
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
        <Grid centered textAlign='center' style={{ height: '100vh' }} verticalAlign='top' >
          <Grid centered item textAlign='center' xs={12}><br></br></Grid>
            {this.renderSkills()}
        </Grid>
    )
  }
}

export default SkillsContainer