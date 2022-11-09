import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
        <div>
      <div className="text-center mb-4 pt-5">
        <h2 className="text-5xl font-bold text-pink-500">Our Services</h2>
        <p className="py-2">
        Homo Kitchen is a place where you can find the highest quality Bengali food originating in Bangladesh, and you can order from anywhere in the Bangladesh. <br />
        We are also provides so many services to help the people and our customers.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
    );
};

export default AllServices;