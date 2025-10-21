import React from 'react';
import { useLocation } from 'react-router-dom';
import burger from '../assets/burger.jpg'
import { FaClock, FaRegHeart , FaEdit , FaTrash } from "react-icons/fa";
import {Link} from 'react-router-dom'
import EditRecipe from '../pages/EditRecipe';


export default function Recipeitems({ recipes = [] }){
    
    const allRecipes = recipes
    console.log(allRecipes)
    
    if (recipes.length === 0) {
       return <p>No recipes found.</p>;
    } 

    const isMyRecipesPage = location.pathname === '/myRecipe';

    
    return(
        
        <div className='card-container'>
            {allRecipes?.map((item,index) => {
                return ( 
                    <div key = {index} className='card'> 
                    <img src={`http://localhost:5000/images/${item.coverImage}`} width = "120px" height =" 100px" alt="" />
                    <div className='card-body'>
                        <div className='title'>{item.title}</div>
                        <div className = "icons">
                            <FaClock size={20} color="#111111ff" className='timer' />
                            <span className="time-text">{item.time}</span>
                            
                             {isMyRecipesPage ? (
                                <>
                                <Link to  = {`/editRecipe/${item._id}`} className="editIcon">
                                    <FaEdit size={22} color="#4CAF50" className="edit-icon"
                                        
                                        
                                    />
                                </Link>

                                
                                <FaTrash size={22} color="#f44336" className="delete-icon"
                                    // onClick={() => handleDelete(item._id)}
                                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                                />
                                </>
                            ) : (
                                <FaRegHeart size={24} color="gray" className="favourite" style={{ cursor: 'pointer' }}
                                />
                            )}
                        </div>
                    </div>
                    </div>
                )
     })}
        </div>
        
    )
}


{/* <FaRegHeart size={24} color="black" className ="favourite" /> */}
                            {/* {(!path) ?<FaRegHeart size={24} color="black" className ="favourite" />:
                            <div className='action'>
                                <FaEdit size={24}/>
                                <FaDelete size={24} />
                            </div>}
                            */}

                                // let path=window.location.pathname==="/myRecipe" ? true: false  