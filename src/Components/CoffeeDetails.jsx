import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CoffeeDetails = () => {
    const {_id} = useParams();
    const coffee = useLoaderData();
    if(!coffee){
        return(
            <div className=' text-center py-20'>
                <h2 className=' text-2xl font-bold'>Loading Coffee Details</h2>
            </div>
        );   
    }
    const {name, photo, quantity, supplier, taste, price, details} = coffee;

    return (
        <div className='max-w-3xl mx-auto my-16 bg-base-200 p-10 rounded-2xl shadow-lg'>
            <img src={photo} alt={name} className=' w-64 h-64 object-cover mx-auto rounded-xl border mb-6' />
            <h2 className=' text-4xl font-bold text-center mb-4'>{name}</h2>

            <div className="space-y-2 text-lg text-center">
                <p><span className="font-semibold">Supplier:</span> {supplier}</p>
                <p><span className="font-semibold">Quantity:</span> {quantity}</p>
                <p><span className="font-semibold">Taste:</span> {taste}</p>
                <p><span className="font-semibold">Price:</span> ${price}</p>
                <p><span className="font-semibold">Details:</span> {details}</p>
            </div>

            <div className="mt-8 text-center">
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
            
        </div>
    );
};

export default CoffeeDetails;