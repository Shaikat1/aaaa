import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        
            <div className="flex justify-center items-center h-[500px]">
                <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold my-auto">
                    No Data Found
                </h1>

                <div className="flex justify-center mt-6">
                <Link to={"/"}><button className="py-2 px-4 text-white text-xl font-semibold mt-4 bg-red-500 rounded-lg">Go Home</button></Link>
                </div>
                </div>
            </div>
       
    );
};

export default ErrorPage;