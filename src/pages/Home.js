import React, { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [blogList,setBlogList] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const getBlogs = async()=>{
            try {
                const requst = await fetch('http://localhost:8080/api/v1/blog')

                const data = await requst.json();
                setBlogList(data)

            } catch (error) {
                console.log("error in fitch data");
                navigate('*')
            }
            
        }
        getBlogs();
    },[])

    const onClick =()=>{
        navigate("/addBlog")
    }
  return (
    <>
      <BlogList blogList={blogList}/>
      <button
      onClick={onClick}
       type="button" className="btn btn-primary mt-3 w-100">
        Add Blogs
      </button>
    </>
  );
};

export default Home;
