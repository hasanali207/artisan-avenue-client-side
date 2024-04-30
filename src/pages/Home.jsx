import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCraftItem from "../components/SingleCraftItem";
import Slider from "../components/Slider";
import CauroselHome from "../components/CauroselHome";
import art1 from "../assets/Art.jpg";
import HomeData from "../components/HomeData";

const Home = () => {
  const items = useLoaderData();
  // const {photo, user_name, user_email, stock_status, processing_time, customization, rating, price, short_description, subcategory_name, item_name}= items
  return (
    <>
      <div className="mb-14 mt-10">
        <Slider></Slider>
      </div>

      <div>
        <h1 className="text-4xl text-center text-slate-700 font-semibold title">
          Art & Craft
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {items
          .slice(0, 6)
            .reverse()
             .map((item) => (
              <SingleCraftItem key={item._id} item={item}></SingleCraftItem>
            ))}
        </div>
      </div>

      <div>
        <CauroselHome></CauroselHome>
      </div>

      <div>
           
            <HomeData></HomeData>
            </div>

      <div>
        <div className=" mt-20 flex flex-col lg:flex-row justify-between items-center lg:card-side     mb-20">
          <div className="flex-1 py-10 lg:py-40 px-10">
            <h2 className="card-title text-xl  lg:text-4xl text-slate-700">
              WE WILL ART FOR YOU
            </h2>
            <p className="text-slate-500 my-3">
              Buying as a gift? Why not get it printed! We allow customers the
              option to have their illustration printed upon receiving their
              digital order.
            </p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" type="submit">
  About Us
</button>

          </div>

          <div className="flex-1">
            <figure>
              <img src={art1} className="w-full" alt="Album" />
            </figure>
          </div>
        </div>
      </div>

            
      
    </>
  );
};

export default Home;
