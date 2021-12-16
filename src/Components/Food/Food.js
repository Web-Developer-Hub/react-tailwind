import React from 'react';

const Food = (props) => {
    const { strDrinkThumb, strCategory, strInstructions, strIngredient2, dateModified } = props.cook;


    return (
        <div className=' bg-gray-100 p-3  rounded'>
            <section className=' text-gray-600 li leading-7'>
                <div className=' flex justify-center'>
                    <img src={strDrinkThumb} alt="drink" />
                </div>
                <h3>Name: {strIngredient2}</h3>
                <p>Category: {strCategory}</p>
                <p>Expired date: {dateModified}</p>
                <p>{strInstructions.slice(0, 100)}</p>
            </section>
        </div>
    );
};

export default Food;