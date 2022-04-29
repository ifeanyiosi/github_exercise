import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Styled from "styled-components";
import {AiFillGithub} from 'react-icons/ai'
import { AuthContext } from "../App";
import { supabase } from "../client";
import './Login.scss'
import UserPage from "./containers/UserPage";


export default function Login() {

  

  const history = useHistory();

  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', function() {
      checkUser();
    });
  }, [])
  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: 'github'
    });
  }
  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }
  if (user) {
    return (
      <div className="App">
        <h1>Hello, {user.email}</h1>
        
        <button onClick={signOut}>Sign out</button>

        
      </div>
      
    )
  }
  return (
    <div>
      <section className="container">
        <div className="login__head" >
          <h1>Welcome</h1>
          <AiFillGithub />
          <span className="login__span1">Ifeanyi's Github OAUTH App </span>
          <span></span>
          <div className="login__container" >
            
              <div className="pol">
                {/* <div className="loader"></div> */}
                
              </div>
            
                <div>
                  
                  <span className="login__link" onClick={signInWithGithub}>Log In with Github</span>
                </div >
              
           
          </div>
        </div>
      </section>
    </div>
    
  );

 

  


}