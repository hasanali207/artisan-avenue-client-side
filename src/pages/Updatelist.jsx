import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Fade } from "react-awesome-reveal";

const Updatelist = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetch(`https://artisan-avenue-server-sigma.vercel.app/items/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;

    const newItem = {
      photo,
      user_name,
      user_email,
      stock_status,
      processing_time,
      customization,
      rating,
      price,
      short_description,
      subcategory_name,
      item_name,
    };

    fetch(`https://artisan-avenue-server-sigma.vercel.app/updateItem/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Update",
          text: "You won't be able to Updated this!",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sure!"
        })        
      });
  };

  return (
    <div>
      <div className='w-full py-10 bg-slate-200 rounded-2xl my-3'>
            <Fade><h1 className='text-3xl text-center my-5'>Add Craft Item</h1></Fade>
            </div >
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label>Image URL:</label>
            <input type="text" defaultValue={item.photo} name="image" required />
          </div>
          <div>
            <label>Item Name:</label>
            <input type="text" name="item_name" defaultValue={item.item_name} required />
          </div>
          <div>
            <label>Subcategory Name:</label>
            <input type="text" name="subcategory_name" defaultValue={item.subcategory_name} required />
          </div>
          <div>
            <label>Short Description:</label>
            <textarea name="short_description"  defaultValue={item.short_description}required></textarea>
          </div>
          <div>
            <label>Price:</label>
            <input type="number"  name="price" defaultValue={item.price} required />
          </div>
          <div>
            <label>Rating:</label>
            <input
              type="number"
              name="rating"
              defaultValue={item.rating}
              min="0"
              max="5"
              step="0.1"
              required
            />
          </div>
          <div>
            <label>Customization:</label>
            <select name="customization" defaultValue={item.customization}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label>Processing Time:</label>
            <input type="text" name="processing_time"  defaultValue={item.processing_time}required />
          </div>
          <div>
            <label>Stock Status:</label>
            <select name="stock_status" defaultValue={item.stock_status}>
              <option value="in_stock">In Stock</option>
              <option value="made_to_order">Made to Order</option>
            </select>
          </div>
          <div>
            <label>User Email:</label>
            <input
              type="email"
              disabled
              defaultValue={user?.email}
              name="user_email"
              required
            />
          </div>
          <div>
            <label>User Name:</label>
            <input
              type="text"
              disabled
              defaultValue={user?.displayName}
              name="user_name"
              required
            />
          </div>
        </div>
        <button className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" type="submit">
  Update 
</button>
      </form>
    </div>
  );
};

export default Updatelist;
