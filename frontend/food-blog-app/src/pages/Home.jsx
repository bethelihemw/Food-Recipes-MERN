import React , {useState} from 'react';
import healthy from '../assets/healthy.webp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Recipeitems from '../components/Recipeitems';
import{ useNavigate, useLocation} from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/inputForm';
import { useLoaderData } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
// const recipes = <useLo />
    const recipes = useLoaderData();
    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

    // Only show the intro section on the home page, not on myRecipe or favRecipe pages
    const isHomePage = location.pathname === '/';

  return (
    <> 
      {isHomePage && (
        <section className='home'>
          <div className='right'>
            <img src={healthy} alt="Delicious Food" />
          </div>
          <div className='left'>
            <h2>Delicious Recipes</h2>
            <h5>Discover, cook, and share recipes you’ll love! From comfort classics to global favorites, explore inspiring dishes and make your kitchen the heart of flavor and creativity.</h5>
            <button onClick={addRecipe}>Add Your Recipe</button>
          </div>
          
        </section>
      )}
      {/* <div className ="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffbf3f" fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </div> */}
      


      {(isOpen) && <Modal onClose={()=> setIsOpen(false)}> <InputForm setIsOpen ={ ()=> setIsOpen(false)} /> </Modal>}
      
      <div className='recipe'>
        <Recipeitems  recipes={recipes} />
      </div>
    </>
)}