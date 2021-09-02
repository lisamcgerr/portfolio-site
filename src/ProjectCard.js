import React from 'react'
import './ProjectCard.css'

class ProjectCard extends React.Component {

  render(){
    return (
      <div className='project__container'> 
        <div className ='project__row'>
            <h2>Cooking with Friends</h2>
              <iframe className='project__image'
                src="https://www.youtube.com/embed/WSbX3-Bpv0I" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
                <strong className='project-description'>A Ruby on Rails, React and Redux full stack app that allows users to virtually create cooking classNamees with other users</strong>
                  <ul>
                    <li className='cards'>Integrated JSON Web Tokens and localStorage to store encrypt and persist client-side information</li>
                    <li className='cards'>Built an API utilizing Rails Serializers to structure backend data</li>
                    <li className='cards'>Utilized Redux and React to store frontend state across components</li>
                    <li className='cards'>Incorporated Semantic UI for clean and organized styling</li>
                  </ul> 
        </div>
        
        <div className ='project__row'>
            <h2>Whirlpool</h2>
              <iframe className='project__image'
                src="https://www.youtube.com/embed/1SaYnOCLOGQ" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
                <strong className='project-description'>A Ruby on Rails app that allows users to find community around games</strong> 
                  <ul>
                    <li className='cards'>Utilized session cookies and Bcrypt to store user data for secure log-in </li>
                    <li className='cards'>Implemented Active Storage to enable profile picture uploads</li>
                    <li className='cards'>Installed Active Record validations to ensure the validity of data stored to database and client-side</li>
                  </ul> 
        </div>
        <div className ='project__row'>
          <h2 >eCommerce Website</h2>
          <img className='project__image'
            src='https://user-images.githubusercontent.com/73184313/131748103-3e4eb8f1-f96c-455f-a626-e80b86d14760.png' 
            alt='screenshot of ecommerce website home page' />
          <strong className='project-description'>Coming Soon! A React eCommerce website utilizing Firebase for user authentication, and Stripe for payment processing</strong>
        </div>
      </div>
    )
  }
}

export default ProjectCard