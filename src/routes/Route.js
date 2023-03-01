import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/page/Home";
import AllProductcategoriesItems from "../pages/page/Home/productCategories/allProductcategoriesItems/AllProductcategoriesItems";

export const route=  createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allproductcategoriesitems/:id',
                element:<AllProductcategoriesItems></AllProductcategoriesItems>,
                loader: ({params}) => (fetch(`http://localhost:5000/categoriesItems/${params.id}`))
            },
             

        ]

    }

])