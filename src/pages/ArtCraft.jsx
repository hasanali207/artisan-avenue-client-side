import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ArtCraft = () => {
  const items = useLoaderData();

  return (
    <>
      <table className="border-collapse border-slate-400  w-full my-20">
  <thead>
    <tr className="border border-slate-400 ">
      <th className="border border-slate-400  py-2">Index</th>
      <th className="border border-slate-400  py-2">Item Name</th>
      <th className="border border-slate-400  py-2">Description</th>
      <th className="border border-slate-400  py-2">Subcategory</th>
      <th className="border border-slate-400  py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item, idx) => (
      <tr key={idx} className="border">
        <td className="border border-slate-400 py-2 text-center">{idx + 1}</td>
        <td className="border border-slate-400  py-2 text-center">{item.item_name}</td>
        <td className="border border-slate-400  py-2 text-center">{item.short_description}</td>
        <td className="border  border-slate-400 py-2 text-center">{item.subcategory_name}</td>
        <td className="border border-slate-400  py-2 text-center">
          <Link to={`/items/${item._id}`}>
            <button className="bg-slate-300 py-2 px-4 font-medium rounded-2xl my-4">
              Details
            </button>
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

       
    </>
  );
};

export default ArtCraft;
