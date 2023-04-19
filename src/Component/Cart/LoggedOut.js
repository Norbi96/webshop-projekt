import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../../css/login.css'
import { auth, provider } from "../../firebase"
import { signInWithPopup } from 'firebase/auth'
import LoggedIn from './LoggedIn'
import { userContext } from '../User/UserContext'



export default function LoggedOut() {
  const { user, setUser } = useContext(userContext)
  const signIn = () => {

    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user.email)
      localStorage.setItem("user", data.user.email)

    })
  }

  useEffect(() => {
    setUser(localStorage.getItem('user'))
  })
  return (
    <div className='login'>
      {user ? <LoggedIn /> :
        <div className='sgnbtn' onClick={signIn}>SIGN IN</div>}
    </div>
  )
}
