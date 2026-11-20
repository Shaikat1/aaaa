import { useEffect, useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = () => {
   
    // const blogs = useLoaderData()
    const [blogs, setBlogs] = useState([])

        useEffect( () => {
            fetch("/Blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
        },[])
        console.log(blogs)
    
    return (
        
        <div className="mx-auto max-w-[1300px] my-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
            {
                blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
            </div>
        </div>
    );
};

export default Blogs;