import React from 'react';
import { Link } from 'react-router-dom';

const SingleCraftItem = ({item}) => {
    const {_id, photo, user_name, user_email, stock_status, processing_time, customization, rating, price, short_description, subcategory_name, item_name}=item
    
    
    return (
        
        <>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {item_name}
      <div className="badge badge-secondary">{subcategory_name}</div>
    </h2>
    <p>{short_description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
  <Link to={`items/${_id}`}><button className='btn btn-ghost'>View Details</button></Link>
</div>  
        </>
    );
};

export default SingleCraftItem;