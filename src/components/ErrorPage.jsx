import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Link to='/'>This is Wrong page Go to home</Link>
        </div>
    );
};

export default ErrorPage;