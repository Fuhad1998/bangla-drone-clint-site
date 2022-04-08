import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`https://murmuring-hollows-61224.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => setServices(data?.slice(0, 9)))
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='p-2'>Services</h1>
                    {
                        services.map(service =><Service
                        key={service.id}
                        service={service}
                        ></Service>)
                    }
            </div>
        </div>
    );
};

export default Services;