import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(
        Array.isArray(initialCoffees) ? initialCoffees : []
    );
    console.log('coffees:', coffees);

    if (!Array.isArray(coffees) || coffees.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No coffees available.</p>;
  } 

    return (
        <div>

            <nav>
    <h1 className="text-4xl font-bold text-center my-8">Our Coffee Collection</h1>
            </nav>


            <div className=' flex gap-3 '>
                <button className=' border-2'>Add coffee</button>
                <button className=' border-2'>Users</button>
                <button className=' border-2'>SignIn</button>
                <button className=' border-2'>SignUp</button>
            </div>


            <div className=' mt-5 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
                coffees.map(coffee => <CoffeeCard 
                    key={coffee._id} 
                    coffees = {coffees}
                    setCoffees = {setCoffees}
                    coffee ={coffee}
                    ></CoffeeCard>)
            }
        </div>
        </div>
    );
};

export default Home;