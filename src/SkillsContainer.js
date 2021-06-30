import React from 'react'
import SkillsCard from './SkillsCard'
import { DiRuby, DiReact, DiJavascript1, DiRor, DiVisualstudio, DiTerminal, DiSqllite, DiGithubBadge, DiCss3, DiBootstrap, DiHtml5 } from "react-icons/di"
import { SiRedux } from 'react-icons/si'
import { Grid } from 'semantic-ui-react'


class SkillsContainer extends React.Component {

  mouseHover = () => {

  }

  renderSkills = () => {
    const skills = [
      <DiRuby className='ruby' style={{color: '#cc0000'}} size={150}pacity={.7} onMouseOver={this.mouseHover} />,  
      <DiReact className='hoverReact' style={{color: '#61dbfb'}} size={150} onMouseOver={this.mouseHover} />,
      <SiRedux className='hover' style={{color: '#764abc'}} size={150} onMouseOver={this.mouseHover} />,
      <DiJavascript1 className='hover' style={{color: '#f0db4f'}} size={150}  onMouseOver={this.mouseHover} />, 
      <DiRor className='hover' style={{color: '#cc0000'}} size={150} onMouseOver={this.mouseHover}  />, 
      <DiHtml5 className='hover' style={{color: '#f06529'}} size={150} onMouseOver={this.mouseHover} />, 
      <DiSqllite className='hover' style={{color: '#3c3c5a'}} size={150} onMouseOver={this.mouseHover} />, 
      <DiGithubBadge className='hover' style={{color: '#4078c0'}} size={150} onMouseOver={this.mouseHover} />, 
      <DiCss3 className='hover' style={{color: '2965f1'}} size={150}  onMouseOver={this.mouseHover} />,
      <DiBootstrap className='hover' style={{color: '#944dff'}} size={150} onMouseOver={this.mouseHover} />,
      <DiVisualstudio className='hover' style={{color: '#0078d7'}} size={150} onMouseOver={this.mouseHover} />, 
      <DiTerminal className='hover' style={{color: '#4d4d4d'}} size={150} onMouseOver={this.mouseHover} />
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
        <Grid centered textAlign='center' style={{ height: '100vh' }} verticalAlign='top' class='projects' >
          <Grid class='projects' centered item textAlign='center' xs={12}><br></br></Grid>
            {this.renderSkills()}
        </Grid>
    )
  }
}

export default SkillsContainer