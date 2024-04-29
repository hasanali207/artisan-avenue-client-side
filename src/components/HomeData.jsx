import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  useTypewriter , Cursor} from 'react-simple-typewriter'

const HomeData = () => {
    const [items, setItems] = useState([]); // Provide a default empty array
    const [text] = useTypewriter({
        words: ['Landscape Painting', 'Cartoon Drawing', 'Charcoal Painting', 'Oil painting', 'Watercolour Painting'],
        loop: true // Set loop to true to enable looping
      });
    //   const [text] = useTypewriter({
    //     words: ['Hello', 'From', 'Typewriter', 'Hook!'],
    //     loop: 0
    //   })
      
         
      

    useEffect(() => {
        // Check if user is defined before making the fetch request
            fetch(`https://artisan-avenue-server-sigma.vercel.app/data/homedata`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
                .catch(error => {
                    console.error('Error fetching craft list:', error);
                });
        },[]);

    return (
        <>
         <div>
         <h2 className="card-title text-xl py-10 lg:text-4xl text-slate-700">
              Category Of 
              <span style={{fontWeight: 'bold', color:'green'}}>{text}</span>
             
              <span style={{color:'red'}}> <Cursor></Cursor></span>
            </h2>
         </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#150B2B] '>
            {
                items.slice(0,6).map(item => <div key={item._id} className="glass bg-gradient-to-r from-slate-200 to-slate-400 rounded-xl py-3  w-full">
                {/* <figure><img src={items.image} alt="car!"/></figure> */}
                <div className="card-body ">
                    <h1 className='card-title'>{item.item_name}</h1>
                  <h2 className="text-xl ">{item.subcategory_name}</h2>
                  <p>{item.short_description}</p>
                    <div className=' flex justify-between items-center'>
                        <p>Rating:{item.rating}</p>
                        <p>Price:{item.price}</p>
                    </div>

                  <div className="card-actions justify-end">
                    <Link to={`/homedata/${item.subcategory_name}`}>

                    <button className="btn btn-outline hover:bg-slate-400">View More!</button>
                    </Link>
                  </div>
                </div>
              </div>)
            }


        </div>
        </>
    );
};

export default HomeData;