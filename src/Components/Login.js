import React, { useState, useRef } from 'react'
import './Login.css'
import image from './linkedinImage.png'
import toast, { Toaster } from 'react-hot-toast'
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { auth, db } from './Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';


const Login = () => {


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const eyeref = useRef(null)

    const dispatch = useDispatch();

    const CreatenewAccount = () => {
        // console.log("clicked") 
        document.getElementById("create").style.color = "purple";
        document.getElementById("create").style.borderColor = "purple";
        if (email == "") {
            toast.error("email can't be empty!!")
            return;
        } else if (password == "") {
            toast.error("password can't be empty!!")
            return;
        } else if (password.length < 5) {
            toast.error("password must of atleast 5 length!!");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                dispatch(login({
                    email: userCredential.user.email,
                    uid: userCredential.user.uid
                }))
                toast.success("Account created Successfully!");
            })
            .catch((error) => {
                toast.error(error.message);
            })

    }

    const handlelogin = () => {
        if (email == "") {
            toast.error("email can't be empty!!")
            return;
        } else if (password == "") {
            toast.error("password can't be empty!!")
            return;
        } else if (password.length < 5) {
            toast.error("password must of atleast 5 length!!");
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential);
            dispatch(login({
                email: userCredential.user.email,
                uid: userCredential.user.uid
            }))
            toast.success("logIn Successfully!");
        })
    }
    const changeVisibility = () => {

    }
    return (
        <div className="login">
            <Toaster position='top-right' />
            <img src={image} className="login__image" style={{ height: '50px', width: '180px' }} />
            <div className="login__body">
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input type="email" id="my-input" aria-describedby="my-helper-text" onChange={e => setemail(e.target.value)} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <div className="login__password">
                        <Input ref={eyeref} type="password" id="my-input" style={{ width: '100%' }} aria-describedby="my-helper-text" onChange={e => setpassword(e.target.value)} />
                        <VisibilityIcon className='visibility__password' onClick={changeVisibility} />
                    </div>

                    <FormHelperText id="my-helper-text">We'll never share your Password.</FormHelperText>
                </FormControl>
                <p className='login__conditions'>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
                <Button variant="contained" className="login__button" onClick={handlelogin}>Agree and Join</Button>
                <div className="create__account">
                    <p className="Not__having__account">Don't Have an account ? </p>
                    <p className="create" id='create' onClick={CreatenewAccount}>Create one here</p>
                </div>
            </div>

        </div>
    )
}

export default Login