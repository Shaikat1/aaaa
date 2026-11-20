import { useLoaderData, useParams } from "react-router-dom";
import { TbCurrencyTaka } from 'react-icons/tb';
import { useEffect, useState } from "react";

const ServiceDetails = () => {
    const {id} = useParams();
    const services= useLoaderData();
    // const [services, setServices] = useState([])

        // useEffect( () => {
        //     fetch("/services.json")
        //     .then(res => res.json())
        //     .then(data => setServices(data))
        // },[])
    const service = services?.find(service => service.id === parseInt(id));

    const {details,price,image,eventName} = service

    return (
        <div className="mx-auto max-w-[1300px] my-14">
            <div className="flex gap-2 md:gap-3 lg:gap-6">
                <div className="">
                    <img src={image} alt="" className="w-full h-full"/>
                </div>
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-semibold">
                        {eventName}
                    </h1>
                    <p className="text-gray-600">
                        {details}
                    </p>

                    <h1 className="text-2xl font-bold flex items-center">
                       <TbCurrencyTaka className="inline"></TbCurrencyTaka>{price}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;