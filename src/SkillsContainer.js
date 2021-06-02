import React from 'react'
import SkillsCard from './SkillsCard'
import { DiRuby, DiReact, DiJavascript1, DiRor, DiVisualstudio, DiTerminal, DiSqllite, DiGithubBadge, DiCss3, DiBootstrap, DiHtml5 } from "react-icons/di"
import { SiRedux } from 'react-icons/si'
import { Grid } from 'semantic-ui-react'


class SkillsContainer extends React.Component {

  renderSkills = () => {
    const skills = [
      <DiRuby className='hover' style={{color: '#cc0000'}} size={150} />,  
      <DiReact className='hover' style={{color: '#61dbfb'}} size={150}  />,
      <SiRedux className='hover' style={{color: '#764abc'}} size={150}  />,
      <DiJavascript1 className='hover' style={{color: '#f0db4f'}} size={150}  />, 
      <DiRor className='hover' style={{color: '#cc0000'}} size={150}  />, 
      <DiHtml5 className='hover' style={{color: '#f06529'}} size={150}  />, 
      <DiSqllite className='hover' style={{color: '#3c3c5a'}} size={150}  />, 
      <DiGithubBadge className='hover' style={{color: '#4078c0'}} size={150}  />, 
      <DiCss3 className='hover' style={{color: '2965f1'}} size={150}  />,
      <DiBootstrap className='hover' style={{color: '#944dff'}} size={150}  />,
      <DiVisualstudio className='hover' style={{color: '#0078d7'}} size={150}  />, 
      <DiTerminal className='hover' style={{color: '#4d4d4d'}} size={150}  />
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