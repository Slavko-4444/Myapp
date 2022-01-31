import React, { useEffect } from 'react';
import './Login.css';
import {Link} from 'react-router-dom'
//import axios from 'axios';
import { useNavigate } from 'react-router';


const Register = (props) => {

    const [username,SetUsername]=React.useState('');
    const [pass,SetPass]=React.useState('');
    const [pass2,SetPass2]=React.useState('');
    const [mail, SetMail] = React.useState('');

    const history= useNavigate();

    // useEffect(()=>{
    //     if(id){
    //         console.log('hehe');
    //         history.push('/login');
    //     }
    // },[]);

    // const OnClickHandler =()=>{
    //     let data = {username:username, password:pass,password2:pass2};
    //         console.log(data);
    //         axios.post('/api/register', data).then(
    //         (response) => {
    //                 if(response.data.msg!=='Succesfull registration, u can login now')
    //                     window.alert(response.data.msg);
    //                 else{ 
    //                     window.alert(response.data.msg);
    //                     history.push('/login');
    //                 }
    //         } ,
    //         (err) => window.alert('Registration error'));
    // }
   

    return (
        <>
        <div class="login-page">
            <div class="form">
                <div class="register-form">
                    <input type="mail" placeholder='mejl' value={mail} onChange={(e)=>{SetMail(e.target.value)}}/>
                    <input type="text" placeholder="korisničko ime" value={username} onChange={(e)=>{SetUsername(e.target.value)}}/>
                    <input type="password" placeholder="šifra" value={pass} onChange={(e)=>{SetPass(e.target.value)}}/>
                    <input type="password" placeholder="potvrdite šifru" value={pass2} onChange={(e)=>{SetPass2(e.target.value)}}/>
                    <button /*onClick={OnClickHandler}*/>napravi profil</button>
                    <p class="message">Već ste registrovani? <Link to="/login">Prijava</Link></p>
                </div>
            </div>
        </div>
        </>
      );
}
 
export default Register;