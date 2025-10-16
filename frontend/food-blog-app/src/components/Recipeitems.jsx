import React from 'react';
import { useLoaderData} from 'react-router-dom';
import burger from '../assets/burger.jpg'

export default function Recipeitems(){
    const allRecipes = useLoaderData()
    console.log(allRecipes)
    
    return (
        
        <div className='card-container'>
            {allRecipes?.map((item,index) => {
                return (
                    <div key = {index} className='card'> 
                    <img src={burger} width = "120px" height =" 100px" alt="" />
                    <div className='card-body'>
                        <div className='title'>{item.title}</div>
                        <div className = "icons"></div>
                    </div>
                    </div>
                )
            })}
        </div>
        
    )
}