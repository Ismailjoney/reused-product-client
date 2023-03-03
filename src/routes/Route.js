import { createBrowserRouter } from "react-router-dom";
import AllBuyers from "../dashBord/adminPanel/AllBuyers";
import AllSellers from "../dashBord/adminPanel/AllSellers";
import BuyerOrder from "../dashBord/buyerOrder/BuyerOrder";
import AddMyProducts from "../dashBord/buyerOrder/sellerRoute/AddMyProducts";
import MyAddedProducts from "../dashBord/buyerOrder/sellerRoute/MyAddedProducts";
import DashBordInfo from "../dashBord/dashBordInfo/DashBordInfo";
import DashBordLayout from "../dashBord/dashBordLayout/DashBordLayout";
import Main from "../layout/Main";
import LogIn from "../pages/login/LogIn";
import Home from "../pages/page/Home";
import AllProductcategoriesItems from "../pages/page/Home/productCategories/allProductcategoriesItems/AllProductcategoriesItems";
import Regiestration from "../pages/regiestration/Regiestration";
import PrivetRoute from "./PrivetRoute";

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
                element:<PrivetRoute><AllProductcategoriesItems></AllProductcategoriesItems></PrivetRoute>,
                loader: ({params}) => (fetch(`http://localhost:5000/categoriesItems/${params.id}`))
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/singup',
                element:<Regiestration></Regiestration>
            }
             

        ]

    },
    {
        path:'/dashbord',
        element:<PrivetRoute><DashBordLayout></DashBordLayout></PrivetRoute>,
        children:[
            {
                path:'/dashbord/dasbordinfo',
                element:<DashBordInfo></DashBordInfo>
            },
            {
                path:'/dashbord/myorder',
                element:<BuyerOrder></BuyerOrder>
            },
            {
                path:'/dashbord/myaddedproducts',
                element: <MyAddedProducts></MyAddedProducts>
            },
            {
                path:'/dashbord/addyourproduct',
                element: <AddMyProducts></AddMyProducts>
            },
            {
                path:'/dashbord/allseller',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashbord/allbuyer',
                element: <AllBuyers></AllBuyers>
            }
        ]
    }

])