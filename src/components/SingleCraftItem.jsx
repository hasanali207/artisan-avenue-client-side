
import { Link } from 'react-router-dom';

const SingleCraftItem = ({item}) => {
    const {_id, photo, user_name, user_email, stock_status, processing_time, customization, rating, price, short_description, subcategory_name, item_name}=item
    
    
    return (
        
        <>
          <div className="card text-[#150B2B]  shadow-xl border-2 border-slate-100 ">
  <figure><img className='w-full hover:scale-105 duration-300 ease-in-out' src={photo} alt="Shoes" /></figure>
  <div className="card-body bg-slate-200 ">
    <h2 className="card-title">
     {item_name}
      
    </h2>
    <div className="badge bg-orange-400 text-white">{subcategory_name}</div>
    <p>{short_description}</p>
    <div className="flex justify-between">
      <div className="badge badge-outline">Price:{price}</div> 
      <div className="badge badge-outline">Rating:{rating}</div> 
      <div className="badge badge-outline">{stock_status}</div>
    </div>
  </div>
  <Link to={`items/${_id}`}><button className='rounded-b-2xl bg-gradient-to-r from-purple-700 to-purple-800 py-3 text-white w-full '>View Details</button></Link>
</div>  
        </>
    );
};

export default SingleCraftItem;