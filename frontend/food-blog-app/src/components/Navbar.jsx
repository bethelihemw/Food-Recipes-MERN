import React, { useEffect } from 'react'
import { FaHome, FaUserAlt } from "react-icons/fa"
import {useState} from 'react';
import Modal from './Modal';
import InputForm  from './inputForm';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
  const [isOpen , setIsOpen] = useState(false)
  let token = localStorage.getItem("token")
  const [isLogin , setIsLogin] = useState(token ? false : true)
  let user = JSON.parse(localStorage.getItem("user"))
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=>{
    setIsLogin(token ? false: true)
  }, [token])

  const checkLogin =()=>{

    if(token){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setIsLogin(true)
    }
    else{
      setIsOpen(true)
    }
    
  }


  return (
    <> 
       <header>
        
        <h2>Recipes Palace</h2>
        <button
          className={"menu-toggle" + (menuOpen ? " open" : "")}
          aria-label="Toggle navigation"
          onClick={()=> setMenuOpen(prev=> !prev)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={"nav-links" + (menuOpen ? " open" : "")}
            onClick={()=> setMenuOpen(false)}>
            <li> <NavLink to='/'>  Home</NavLink></li>
            <li onClick={()=> isLogin && setIsOpen(true)}> <NavLink to={!isLogin ? '/myRecipe' : "/"}>  My Recipe</NavLink></li>
            <li onClick={()=> isLogin && setIsOpen(true)}> <NavLink to={!isLogin ? '/favRecipe': "/"}>  Favourtes </NavLink></li>
            <li onClick={checkLogin}> <p className="login" >{ (isLogin) ?  "Login" : "Logout"}{ user?.email ? `(${user?.email})` :" "}</p></li>
        </ul>
       </header>
       {(isOpen) && <Modal onClose={()=> setIsOpen(false)}> <InputForm setIsOpen ={ ()=> setIsOpen(false)} /> </Modal>}
    </>
  )
}