import React from 'react';
import { useLoaderData} from 'react-router-dom';
import burger from '../assets/burger.jpg'
import { FaClock, FaStopwatch, FaRegHeart } from "react-icons/fa";


export default function Recipeitems(){
    const allRecipes = useLoaderData()
    console.log(allRecipes)
    
    return (
        
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
                            <FaRegHeart size={24} color="black" className ="favourite" />
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
        
    )
}