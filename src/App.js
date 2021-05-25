import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import SkillsContainer from './SkillsContainer'
import ProjectContainer from './ProjectContainer'
import { Image } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid'


class App extends React.Component {

  render(){
    return (
      <div>
        <Navbar />
          <Image className='cooking-image' src='https://user-images.githubusercontent.com/73184313/119523008-0851c580-bd42-11eb-94b8-38f3ea264b78.png' width='100%' paddingTop='10' />
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/projects' component={ProjectContainer} />
              <Route exact path='/skills' component={SkillsContainer} />
              <Route exact path='/' component={Home} />
            </Switch>   
              <Grid container spacing={3}>
                {/* <About />
                <SkillsContainer />
                <Contact /> */}
                <Footer />
              </Grid>
      </div>
    )
  }
}

export default App
