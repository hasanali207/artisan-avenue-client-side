import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCraftItem = () => {
    const items = useLoaderData()
    
    return (
        <div>
            <h1>Thi is Details of Every Sing Item</h1>
        </div>
    );
};

export default DetailsCraftItem;