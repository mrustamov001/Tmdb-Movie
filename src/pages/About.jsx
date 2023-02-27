import React from 'react'
import Carusel from '../components/about/carusel';
import PopularList from '../components/about/PopularList';


const About = () => {






  return (
    <div className='about'>
      <div className="container mx-auto pt-36 pb-20">
        <Carusel />
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto">
          <PopularList />
        </div>
      </div>
    </div>
  )
}

export default About