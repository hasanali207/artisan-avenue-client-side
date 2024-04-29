
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
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
            <h1 className='text-3xl text-center my-5'>Add Craft Item</h1>
            <form onSubmit={handleAddItem}>
            <div className='grid grid-cols-3 gap-6'>
    <div>
        <label>Image URL:</label>
        <input type="text" name="image" required/>
    </div>
    <div>
        <label >Item Name:</label>
        <input type="text" name="item_name" required/>
    </div>
    <div>
        <label >Subcategory Name:</label>
        <input type="text" name="subcategory_name" required/>
    </div>
    <div>
        <label >Short Description:</label>
        <textarea name="short_description" required></textarea>
    </div>
    <div>
        <label>Price:</label>
        <input type="number" name="price" required/>
    </div>
    <div>
        <label>Rating:</label>
        <input type="number" name="rating" min="0" max="5" step="0.1" required/>
    </div>
    <div>
        <label>Customization:</label>
        <select name="customization">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
    </div>
    <div>
        <label>Processing Time:</label>
        <input type="text" name="processing_time" required/>
    </div>
    <div>
        <label >Stock Status:</label>
        <select name="stock_status">
            <option value="in_stock">In Stock</option>
            <option value="made_to_order">Made to Order</option>
        </select>
    </div>
    <div>
        <label >User Email:</label>
        <input type="email"  disabled defaultValue={user?.email} name="user_email" required/>
    </div>
    <div>
        <label >User Name:</label>
        <input type="text" disabled defaultValue={user?.displayName}  name="user_name" required/>
    </div>
   </div>
    <button className='btn btn-secondary' type="submit">Add</button>
</form>

        </>
    );
};

export default AddItem;