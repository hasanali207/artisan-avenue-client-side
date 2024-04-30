import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';

const CraftList = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [sortCriterion, setSortCriterion] = useState(null);
    const [customizationFilter, setCustomizationFilter] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`https://artisan-avenue-server-sigma.vercel.app/craftlist/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
                .catch(error => {
                    console.error('Error fetching craft list:', error);
                });
        }
    }, [user]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"    
          }).then((result) => {
            if (result.isConfirmed) {
                  
            fetch(`https://artisan-avenue-server-sigma.vercel.app/items/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                       Swal.fire({
                title: "Deleted!",
                text: "Your Item has been deleted.",
                icon: "success"
              });
    
              fetch(`https://artisan-avenue-server-sigma.vercel.app/craftlist/${user.email}`)
              .then(res => res.json())
              .then(data => {
                setItems(data);
              })
              .catch(error => {
                console.error('Error fetching craft list:', error);
              });
    
                }
            })
            }
          });
    };

    const handleCustomizationFilter = (customization) => {
        setCustomizationFilter(customization);
    };

    const filteredItems = customizationFilter !== null
        ? items.filter(item => item.customization.toLowerCase() === customizationFilter.toLowerCase())
        : items;

    
    return (
        <div className=''>
            <div className='w-full py-10 bg-slate-200 rounded-2xl my-3'>
                <Fade><h1 className='text-3xl text-center my-5'>My Art & Craft Item</h1></Fade>
            </div>
            <div>
            <div className="dropdown dropdown-bottom flex justify-end ">
  <div tabIndex={0} role="button"  className="btn m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mt-3">Sort: Customization</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  
                
                <li><button onClick={() => handleCustomizationFilter('Yes')}>Yes</button></li>
                <li><button onClick={() => handleCustomizationFilter('No')}>No</button></li>
  </ul>
</div>
            </div>
            {filteredItems.map((item) => (
                <div key={item._id} className=" mb-3 p-6 flex flex-col lg:flex-row gap-5 border">
                    <figure className="px-10">
                        <img src={item.photo} alt="Craft Item" className="rounded-xl" />
                    </figure>
                    <div className=" flex flex-col lg:flex-row  gap-6">
                       <div className='flex-1 space-y-3'>
                            <h2 className="card-title">{item.item_name}</h2>
                            <p>{item.short_description}</p>
                            <p>Price: {item.price}</p>
                            <p>Rating: {item.rating}</p>
                            <p>Process Time: {item.processing_time}</p>
                            <p>Customization: {item.customization}</p>
                       </div>
                        <div className="flex justify-center items-center gap-4">
                           <Link to={`/items/update/${item._id}`}> <button className="btn btn-primary btn-outline">Edit</button></Link>
                            <button onClick={() => handleDelete(item._id)} className="btn btn-primary btn-outline">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CraftList;
