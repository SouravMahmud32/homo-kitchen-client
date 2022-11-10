import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <PhotoProvider>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoView><figure><img src={img} alt="" /></figure></PhotoView>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.length > 300 ? description.slice(0, 100) + '...' : description}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-warning">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
        </PhotoProvider>
    );
};

export default ServiceCard;