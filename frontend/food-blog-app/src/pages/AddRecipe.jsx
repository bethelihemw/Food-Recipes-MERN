import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddRecipe(){
    const [recipeData, setRecipeData ] = useState({})
    const navigate =useNavigate()
    const onHandleChange = (e) =>{
        console.log(e.target.files[0])
        let val = (e.target.name ==="ingredients")? e.target.value.split(","):(e.target.name ==="file") ? e.target.files[0] :  e.target.value
        setRecipeData(pre => ({...pre, [e.target.name]:val}))
    }
    const onHandleSubmit= async(e) =>{
        e.preventDefault()
        console.log(recipeData);
        await axios.post("http://localhost:5000/recipe",recipeData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(()=> navigate('/'))
    }
    return(
        <>
        <div className='container'>
            <form action="" className='form' onSubmit={onHandleSubmit}>
                <div className="form-control">
                    <label htmlFor=""> Title</label>
                    <input type="text" className='input' name='title' onChange={onHandleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor=""> Time</label>
                    <input type="text" className='input' name='time' onChange={onHandleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="">Ingredient</label>
                    <textarea type="text" className='input-textarea' name='ingredients' rows="5" onChange={onHandleChange} ></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor=""> Instruction</label>
                    <textarea type="text" className='input-textarea' name='instructions' rows ="5" onChange={onHandleChange} ></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor=""> Recipe Image</label>
                    <input type="file" className='input' name='file' onChange={onHandleChange} />
                </div>
                <button type='submit'>Add Recipe</button>
            </form>
        </div>
        </>
    )
}

