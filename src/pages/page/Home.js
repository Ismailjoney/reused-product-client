import React from 'react';
import Advertisment from './Home/Advartisment/Advertisment';
import Banner from './Home/banner/Banner';
import ProductCategories from './Home/productCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisment></Advertisment>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;