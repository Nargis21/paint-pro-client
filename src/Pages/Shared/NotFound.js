import React from 'react';
import notFound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='w-50 mx-auto w-50'>
            <img src={notFound} alt='' />
        </div>
    );
};

export default NotFound;