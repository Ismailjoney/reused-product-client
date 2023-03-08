import React from 'react';
import Advertisment from './Home/Advartisment/Advertisment';
import Banner from './Home/banner/Banner';
import Faq from './Home/Faq/Faq';
import ProductCategories from './Home/productCategories/ProductCategories';
import TopSeller from './Home/topSeller/TopSeller';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSeller></TopSeller>
            <Advertisment></Advertisment>
            <ProductCategories></ProductCategories>
            <Faq></Faq>
        </div>
    );
};

export default Home;