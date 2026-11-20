/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import  "../css/ServiceCard.css"

const ServiceCard = ({service}) => {
    const {eventName, image, description,id } = service
    return (
        <div className="max-w-[400px] card bg-[#f7f5ec] shadow-lg shadow-gray-500 mx-auto">
            <div className="card-img">
                <img src={image} alt="" className="w-full h-[260px]"/>
            </div>
            <div className="mt-6 space-y-3 text-center px-3">
                <h1 className="text-xl md:text-2xl font-medium">{eventName}</h1>
                <p className="text-gray-500 card-text">{description}</p>
            </div>
           <div className="w-full bg-[#1f7b76] btn-container mt-6 flex justify-center ">
               <Link to={`/services/${id}`}>
                <button className="text-white w-full border-0 h-12 font-semibold">
                    Details
                </button>
                </Link>
           </div>
        </div>
    );
};

export default ServiceCard;