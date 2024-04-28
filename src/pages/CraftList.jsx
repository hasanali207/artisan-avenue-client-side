import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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
              
        fetch(`http://localhost:5000/items/${_id}`, {
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
            }
        })
        }
      });
}

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
                           <Link to={`/items/update/${item._id}`}> <button className="btn btn-primary">Edit</button></Link>

                            <button onClick={() => handleDelete(item._id)} className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default CraftList;
