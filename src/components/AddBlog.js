import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const AddBlog = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const navigate = useNavigate()

    const onClick = async()=>{
        const requst = await fetch('http://localhost:8080/api/v1/blog',{
        headers:{
            'Content-Type': 'application/json'
    },
    method:'POST',
    body:JSON.stringify({title,body})
        })
        if (requst.status===201){
            navigate('/')
        }
    }
    
  return (
    <>
     <input type="text" className="form-control my-3" placeholder="Enter your title "onChange={(e)=>setTitle(e.target.value)} />
     <textarea className="form-control my-3" placeholder="Enter comment here" onChange={(e)=>setBody(e.target.value)}></textarea>

      <button onClick={onClick} type="button" className="btn btn-primary w-100">
        add Blog
      </button>
    </>
   
  )

}
export default AddBlog