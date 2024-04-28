import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailsCraftItem = () => {
    const items = useLoaderData()
    
    const {id} = useParams()
    console.log(id);
    
    return (
        <div>
            <h1>Thi is Details of Every Sing Item</h1>
        </div>
    );
};

export default DetailsCraftItem;