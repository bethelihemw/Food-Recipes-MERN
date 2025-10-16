import React from 'react';
import Sausage from '../assets/Sausage.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Recipeitems from '../components/Recipeitems';


export default function Home(){
  return (
    <> 
    
      <section className='home'>
        <div className='left'>
          <h2>Food Recipe</h2>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt consectetur, in maxime quisquam quam quis dolor, mollitia cupiditate earum a voluptas eveniet perspiciatis quae nobis voluptatem ipsum obcaecati impedit.
          </h5>
          <button>share your recipe</button>
          
        </div>
        <div className='right'>
          <img src={Sausage} width="320px" height="200px" alt="" />
        </div>
      </section>
      <div className ="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </div>
      <div className='recipe'>
        <Recipeitems/>
      </div>
    </>
)}