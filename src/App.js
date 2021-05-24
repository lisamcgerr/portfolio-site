import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'

class App extends React.Component {

  render(){
    return (
      <div>   
        <Navbar />
        This is the app component
        <About />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
