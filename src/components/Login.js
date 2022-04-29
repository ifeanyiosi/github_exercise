import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import {AiFillGithub} from 'react-icons/ai'
import { AuthContext } from "../App";
import './Login.scss'


export default function Login() {
  

  return (
    <div>
      <section className="container">
        <div className="login__head" >
          <h1>Welcome</h1>
          <span className="login__span1" >Ifeanyi Osi-Okeke</span>
          <span className="login__span2" >{data.errorMessage}</span>
          <div className="login__container">
            {data.isLoading ? (
              <div className="loader__container">
                <div className="loader"></div>
              </div>
            ) : (
              <>
                {
                  // Link to request GitHub access
                }
                <a
                  className="login__link"
                  href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                  onClick={() => {
                    setData({ ...data, errorMessage: "" });
                  }}
                >
                  <AiFillGithub/>
                  <span>Login with GitHub</span>
                </a>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}