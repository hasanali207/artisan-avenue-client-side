import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsHomeData = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`https://artisan-avenue-server-sigma.vercel.app/data/sigledata/${id}`); // Update the URL with your API endpoint
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error('Error fetching item details:', error);
            }
        };

        fetchItem();
    }, [id]);

    return (
        <div>
            {item ? (
                <div>
                    <h1>{item.item_name}</h1>
                    <p>Subcategory: {item.subcategory_name}</p>
                    <p>Description: {item.short_description}</p>
                    <p>Price: {item.price}</p>
                    <p>Rating: {item.rating}</p>
                    {/* Add additional details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailsHomeData;
