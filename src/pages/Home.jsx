import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCraftItem from '../components/SingleCraftItem';

const Home = () => {

    const items = useLoaderData()
    // const {photo, user_name, user_email, stock_status, processing_time, customization, rating, price, short_description, subcategory_name, item_name}= items
    return (
        <>
            
            <div className='grid grid-cols-3 gap-6'>
                {
                    items.slice(0,6).map(item => <SingleCraftItem key={item._id} item={item}></SingleCraftItem>)
                }
            </div>
        </>
    );
};

export default Home;