import React from 'react';
import { Link } from 'react-router-dom';

const CategorieCard = ({ catagorie }) => {
    const { image, product_name, condition, information, categoryId } = catagorie;
     
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full  h-60' src={image} alt="products image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <h2 className="  font bold">Condition :{condition}</h2>
                <p>{information}</p>
                <div className="card-actions justify-end">
                    <Link to={`/allproductcategoriesitems/${categoryId}`}>
                        <button className="btn btn-primary">sell all</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategorieCard;