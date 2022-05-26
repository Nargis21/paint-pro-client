import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://desolate-garden-31913.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='bg-base-200'>
            <h1 className='text-5xl font-sarif text-primary text-center font-sarif pt-10'>Available Tools</h1>
            <div className=' py-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:pl-10  '>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;