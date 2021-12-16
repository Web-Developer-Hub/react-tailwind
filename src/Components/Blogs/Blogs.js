import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Blogs = () => {
    const [cooks, setCooks] = useState([])
    const [reasult, setResult] = useState('');

    const searchHandler = (event) => {
        const inputValue = event.target.value;
        setResult(inputValue)
    }

    useEffect(() => {
        const API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${reasult}`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                if (data.drinks === null) {
                    return;
                    // return alert('Not Found Your Search Result...')
                }
                setCooks(data.drinks)
            })
    }, [reasult])

    return (
        <section>
            <div className=' text-center'>
                <input onChange={searchHandler} className=' w-1/3 mt-10 border-2 h-7 p-5 text-xl' placeholder='Search your favorite drink here....' type="text" />
            </div>
            <div className='grid grid-cols-4 gap-4 max-w-7xl m-auto p-12 pb-12'>
                {
                    cooks.map((cook) => <Food cook={cook}></Food>)
                }
            </div>
        </section>
    );
};

export default Blogs;