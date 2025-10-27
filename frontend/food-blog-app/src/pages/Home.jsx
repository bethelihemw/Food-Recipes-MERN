import React , {useState} from 'react';
import Sausage from '../assets/Sausage.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Recipeitems from '../components/Recipeitems';
import{ useNavigate} from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/inputForm';
import { useLoaderData } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate()
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


  return (
    <> 
    
      <section className='home'>
        <div className='left'>
          <h2>🍳 Delicious Recipes</h2>
          <h5>Welcome to your culinary paradise! Explore thousands of mouth-watering recipes from around the world. Whether you're craving comfort food classics, exotic international dishes, or healthy meal prep ideas, we've got recipes to satisfy every palate. From appetizing appetizers to decadent desserts, discover cooking inspiration that will transform your kitchen into a food lover's haven. Join our community of passionate home chefs and share your culinary creations!
          </h5>
          <button onClick={addRecipe}>🥘 Share Your Recipe</button>

          
        </div>
        <div className='right'>
          <img src={Sausage} width="320px" height="200px" alt="Delicious Food" />
        </div>
      </section>
      {/* <div className ="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffbf3f" fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </div> */}
      


      {(isOpen) && <Modal onClose={()=> setIsOpen(false)}> <InputForm setIsOpen ={ ()=> setIsOpen(false)} /> </Modal>}
      
      <div className='recipe'>
        <Recipeitems  recipes={recipes} />
      </div>
    </>
)}