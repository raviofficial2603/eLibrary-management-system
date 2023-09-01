import React, { useEffect, useState } from 'react'
import MyNavbar from './MyNavbar'

import Books from './Books'
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function Home() {
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/isLoggedIn',
            
            }).then(response => {
              console.log(response.data);
              setIsLoggedIn(response.data===true)
            })
            
            .catch((error) => {
              console.error(error.response);
              
            });
    },[])
    return (
        <>
            
            <div>
                <img src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?cs=srgb&dl=pexels-ivo-rainha-1290141.jpg&fm=jpg" height={'625vh'} width={'100%'} alt="" />
                <hr />
                
                {isLoggedIn?<Books/>:<RegisterForm/>}
            </div>
        </>
    )
}

export default Home
