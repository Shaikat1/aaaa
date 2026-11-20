/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";


const Services = () => {
        const [services, setServices] = useState([])

        useEffect( () => {
            fetch("/Services.json")
            .then(res => res.json())
            .then(data => setServices(data))
        },[])

    return (
        <div className="mx-auto px-2 lg:px-0">
            <div className="mt-20 mb-10 text-3xl font-semibold text-center">
                Our services
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1300px]">
            {
                services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;