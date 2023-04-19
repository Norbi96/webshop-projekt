import React, { useRef } from 'react'
import { firestore } from '../../firebase'
import { addDoc, collection } from "@firebase/firestore"



export default function LoggedIn() {

  // const messageRef = useRef();
  // const ref = collection(firestore, "messages")

  // const handleAdd = async (e) => {
  //   e.preventDefault();
  //   let data = {
  //     message: messageRef.current.value
  //   }
  //   try {
  //     addDoc(ref, data)
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // }
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className='logged'>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
