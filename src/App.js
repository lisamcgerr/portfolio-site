import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'

class App extends React.Component {

  render(){
    return (
      <div>   
        <Navbar />
        This is the app component
        <About />
        <Footer />
      </div>
    )
  }
}

export default App
