import React ,{useEffect, useState}from 'react';
import { useLocation ,useLoaderData} from 'react-router-dom';
import burger from '../assets/burger.jpg'
import { FaClock, FaRegHeart , FaEdit , FaTrash } from "react-icons/fa";
import {Link} from 'react-router-dom'
import EditRecipe from '../pages/EditRecipe';
import axios from 'axios';


export default function Recipeitems(){
    
    const user = JSON.parse(localStorage.getItem("user"));
    const favKey = `fav_${user?._id || 'guest'}`; // unique per user
    let favItems = JSON.parse(localStorage.getItem(favKey)) || [];

    
//    let favItems= JSON.parse(localStorage.getItem("fav")) ?? []
    const recipes = useLoaderData();
    const [allRecipes, setAllRecipes]= useState()
    const [isFavRecipe, setIsFavRecipe]= useState(false)
    console.log(allRecipes)
    useEffect(()=>{
        setAllRecipes(recipes)

    }, [recipes])


    const isMyRecipesPage = location.pathname === '/myRecipe';

    const onDelete=async(id)=>{
        await axios.delete(`http://localhost:5000/recipe/${id}`).then((res)=>console.log(res))
        setAllRecipes(recipes=>recipes.filter(recipe=>recipe._id !==id))
        let filterItem = favItems.filter(recipe => recipe._id !== id)
        localStorage.setItem("fav",JSON.stringify(filterItem))
    }

    // const favRecipe = (item)=>{
    //     let filterItem = favItems.filter(recipe => recipe._id !== item._id)
    //     favItems = favItems.filter(recipe => recipe._id !== item.id).length=== 0 ? [...favItems,item] : filterItem
    //     localStorage.setItem("fav",JSON.stringify(favItems))
    //     setIsFavRecipe(pre=>!pre)
    // }

    const favRecipe = (item) => {
    
        const alreadyFav = favItems.some(recipe => recipe._id === item._id);

    if (alreadyFav) {
        favItems = favItems.filter(recipe => recipe._id !== item._id);
    } else {
        favItems = [...favItems, item];
    }

    localStorage.setItem(favKey, JSON.stringify(favItems));
    setIsFavRecipe(prev => !prev);
    };

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
                                    onClick={() => onDelete(item._id)}
                                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                                />
                                </>
                            ) : (
                                <FaRegHeart size={24} className="favourite"  onClick={()=>favRecipe(item)}  style={{ color : (favItems.some(res => res._id === item._id)) ? "red " : "" }}
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



                                 // const allRecipes = recipes
    // console.log(allRecipes)
    
    // if (recipes.length === 0) {
    //    return <p>No recipes found.</p>;
    // } 

    // { recipes = [] }