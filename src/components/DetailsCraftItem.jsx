import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailsCraftItem = () => {
    const items = useLoaderData()
   const {photo, user_name, user_email, stock_status, processing_time, customization, rating, price, short_description, subcategory_name, item_name, } = items
    
    
    
   
    
    return (
        <div className="max-w-md mx-auto my-10 bg-white shadow-md rounded-md overflow-hidden">
  
  <img  className="w-full h-64 object-cover" src={photo} alt="Product" />

  <div className="p-6">
    
    <h2 className="text-xl font-semibold text-gray-800">{item_name}</h2>

    
    <p className="text-sm text-gray-600">Subcategory: {subcategory_name}</p>

    
    <p className="text-gray-700 mt-2">{short_description}</p>

    
    <p className="text-gray-800 font-semibold mt-2">Price: ${price}</p>

    
    <p className="text-gray-800 font-semibold mt-2">Rating: {rating}</p>

   
    <p className="text-gray-800 font-semibold mt-2">Customization: {customization}</p>

    
    <p className="text-gray-800 font-semibold mt-2">Processing Time: {processing_time}</p>

    
    <p className="text-gray-800 font-semibold mt-2">Stock Status: {stock_status}</p>
  </div>
</div>

    );
};

export default DetailsCraftItem;