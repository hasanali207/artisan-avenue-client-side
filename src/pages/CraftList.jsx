import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';

const CraftList = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]); // Provide a default empty array


    useEffect(() => {
        if (user) { // Check if user is defined before making the fetch request
            fetch(`https://artisan-avenue-server-sigma.vercel.app/craftlist/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
                .catch(error => {
                    console.error('Error fetching craft list:', error);
                });
        }
    }, [user]); // Fetch items when user changes

const handleDelete = (_id) =>{
    
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
}

    return (
        <div className=''>
           <div className='w-full py-10 bg-slate-200 rounded-2xl my-3'>
            <Fade><h1 className='text-3xl text-center my-5'>My Art & Craft Item</h1></Fade>
            </div >

           {items.map((item) => (
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
