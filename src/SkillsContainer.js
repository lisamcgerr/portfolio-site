import React from 'react'
import SkillsCard from './SkillsCard'
import { DiRuby, DiReact, DiJavascript1, DiRor, DiVisualstudio, DiTerminal, DiSqllite, DiGithubBadge, DiCss3, DiBootstrap, DiHtml5 } from "react-icons/di"
import { SiRedux } from 'react-icons/si'
import { Grid } from 'semantic-ui-react'


class SkillsContainer extends React.Component {

  renderSkills = () => {
    const skills = [
      <DiRuby style={{color: '#cc0000'}} size={150} />,  
      <DiReact style={{color: '#61dbfb'}} size={150}  />,
      <SiRedux style={{color: '#764abc'}} size={150}  />,
      <DiJavascript1 style={{color: '#f0db4f'}} size={150}  />, 
      <DiRor style={{color: '#cc0000'}} size={150}  />, 
      <DiHtml5 style={{color: '#f06529'}} size={150}  />, 
      <DiSqllite style={{color: '#cc0000'}} size={150}  />, 
      <DiGithubBadge style={{color: '#4078c0'}} size={150}  />, 
      <DiCss3 style={{color: '2965f1'}} size={150}  />,
      <DiBootstrap style={{color: '#cc0000'}} size={150}  />,
      <DiVisualstudio style={{color: '#cc0000'}} size={150}  />, 
      <DiTerminal style={{color: '#cc0000'}} size={150}  />
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