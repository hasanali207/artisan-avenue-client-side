import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ArtCraft = () => {
  const items = useLoaderData();

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={item.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.item_name}
                <div className="badge badge-secondary">{item.stock_status}</div>
              </h2>
              <p>{item.short_description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{item.subcategory_name}</div>
              </div>
            </div>
            <Link to={`/items/${item._id}`}>
  <button className="btn btn-accent">View Details</button>
</Link>

          </div>
        ))}
      </div>
    </>
  );
};

export default ArtCraft;
