
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { Fade } from "react-awesome-reveal";

const AddItem = () => {

    const { user} = useContext(AuthContext);
    
    const handleAddItem = (e) =>{
        e.preventDefault()
        const form = e.target
        const photo = form.image.value
        const item_name = form.item_name.value
        const subcategory_name = form.subcategory_name.value
        const short_description = form.short_description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processing_time = form.processing_time.value
        const stock_status = form.stock_status.value
        const user_email = form.user_email.value
        const user_name = form.user_name.value

        const newItem ={photo, user_name, user_email, stock_status, processing_time, customization, rating, price, short_description, subcategory_name, item_name, };
                

                
        fetch('https://artisan-avenue-server-sigma.vercel.app/items', {
            method : 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)

        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                title: "Craft Item Added?",
                text: "Craft Item Data is Added this!",
                icon: "success",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Okay!"
              })

            }
        )
        
    }


    return (
        <>
            <div className='w-full py-10 bg-slate-200 rounded-2xl my-3'>
            <Fade><h1 className='text-3xl text-center my-5'>Add Craft Item</h1></Fade>
            </div >
            <form className='mb-10' onSubmit={handleAddItem}>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
            <div class="form-group">
    <label for="image">Image URL:</label>
    <input type="text" id="image" name="image" required/>
</div>
<div class="form-group">
    <label for="item_name">Item Name:</label>
    <input type="text" id="item_name" name="item_name" required/>
</div>
<div class="form-group">
    <label for="subcategory_name">Subcategory Name:</label>
    <input type="text" id="subcategory_name" name="subcategory_name" required/>
</div>
<div class="form-group">
    <label for="short_description">Short Description:</label>
    <textarea id="short_description" name="short_description" required></textarea>
</div>
<div class="form-group">
    <label for="price">Price:</label>
    <input type="number" id="price" name="price" required/>
</div>
<div class="form-group">
    <label for="rating">Rating:</label>
    <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" required/>
</div>
<div class="form-group">
    <label for="customization">Customization:</label>
    <select id="customization" name="customization">
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>
<div class="form-group">
    <label for="processing_time">Processing Time:</label>
    <input type="text" id="processing_time" name="processing_time" required/>
</div>
<div class="form-group">
    <label for="stock_status">Stock Status:</label>
    <select id="stock_status" name="stock_status">
        <option value="in_stock">In Stock</option>
        <option value="made_to_order">Made to Order</option>
    </select>
</div>
<div class="form-group">
    <label for="user_email">User Email:</label>
    <input type="email" id="user_email" disabled defaultValue={user?.email} name="user_email" required/>
</div>
<div class="form-group">
    <label for="user_name">User Name:</label>
    <input type="text" id="user_name" disabled defaultValue={user?.displayName} name="user_name" required/>
</div>

   </div>
   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mt-3" type="submit">
  Add Item
</button>

</form>

        </>
    );
};

export default AddItem;