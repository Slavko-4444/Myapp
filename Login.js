import React, { useState } from 'react';
import './Login.css';
import {Link, useNavigate } from 'react-router-dom'
//import axios from 'axios';
//import { useDispatch, useSelector } from 'react-redux';
//import { login, logout } from './redux/ducks/loginReducer';



const Login = (props) => {

    const usn=null;
    const id=null;

    //const dispatch=useDispatch();

    const [username,SetUsername]=useState('');
    const [password,SetPassword]=useState('');

    const history=useNavigate();

   const textChangedUs= (e)=>{
       const {value} = e.target;
        SetUsername(value);    
    }

    const textChangedPass= (e)=>{
        const {value} = e.target;
         SetPassword(value);    
     }

    //     const onClickHandler= ()=>{
    //         let data = {username:username, password:password};
    //         console.log(data);
    //         axios.post('/api/login', data).then(
    //         (response) => {
    //                 if(!response.data.idToken)
    //                     window.alert('Login failed');
    //                 else{ 
    //                     localStorage.setItem('token', response.data.idToken);
    //                     dispatch(login(response.data.username,response.data.id));
    //                     history.push('/profile');
    //                 }
    //                 // console.log(response.data.idToken);
    //                 // console.log(localStorage.getItem('token'));
    //         } ,
    //         (err) => window.alert('Login failed'));

    //  }

    return ( 
    <>  
        <div class="login-page">
            <div class="form">
                <div class="login-form">
                    {
                        !id? 
                        (   <>
                                <input type="text" placeholder="korisničko ime" name='user' value={username} onChange={textChangedUs} />

                                <input type="password" placeholder="šifra" name='pass' value={password} onChange={textChangedPass}/>
                                <button /*onClick={onClickHandler}*/>Prijava</button>

                                <p class="message">Niste registrovani? <Link to="/register">Napravite profil</Link></p>
                                
                            </>
                        )
                        :
                        (
                            <>
                                <button onClick={()=>{localStorage.removeItem('token');}}>Odjavite se sa {usn}</button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    </> );
}
 
export default Login;