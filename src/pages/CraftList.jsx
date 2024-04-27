import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const CraftList = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]); // Provide a default empty array

    useEffect(() => {
        if (user) { // Check if user is defined before making the fetch request
            fetch(`http://localhost:5000/craftlist/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
                .catch(error => {
                    console.error('Error fetching craft list:', error);
                });
        }
    }, [user]); // Fetch items when user changes

    return (
        <div className=''>
           

           {items.map((item) => (
                <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={item.photo} alt="Craft Item" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.item_name}</h2>
                        <p>{item.short_description}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default CraftList;
