import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../css/login.css'
import { auth, provider } from "../../firebase"
import { signInWithPopup } from 'firebase/auth'
import LoggedIn from './LoggedIn'
import { firestore } from '../../firebase'
import { addDoc, collection } from "@firebase/firestore"



export default function LoggedOut() {
  const ref = collection(firestore, "users")
  const [user, setUser] = useState('')
  const signIn = () => {

    signInWithPopup(auth, provider).then((data) => {

      setUser(data.user.email)
      localStorage.setItem("user", data.user.email)
      let obj = {
        userMail: data.user.mail
      }
      addDoc(ref, obj)
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
