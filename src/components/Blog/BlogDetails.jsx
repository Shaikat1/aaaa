import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const BlogDetails = () => {
    const {id} = useParams();
    const blogs= useLoaderData();
    // const [blogs, setBlogs] = useState([])

    //     useEffect( () => {
    //         fetch("/public/blog.json")
    //         .then(res => res.json())
    //         .then(data => setBlogs(data))
    //     },[])
    //     console.log(blogs)
    const blog = blogs.find(blog => blog.id === parseInt(id));
    const {images,longDetails,} = blog
    return (
        <div className="mx-auto max-w-[1300px] my-14 ">
           <div className="flex justify-center flex-col items-center">
           <div>
                <img src={images} alt="" />
            </div>
            <div className="flex justify-center my-5">
                <h1 className="text-center font-medium lg:text-xl">
                    {longDetails}
                </h1>
            </div>
           </div>
        </div>
    );
};

export default BlogDetails;