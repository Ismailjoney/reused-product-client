import { createBrowserRouter } from "react-router-dom";
import AllBuyers from "../dashBord/adminPanel/AllBuyers";
import AllSellers from "../dashBord/adminPanel/AllSellers";
import BuyerOrder from "../dashBord/buyerOrder/BuyerOrder";
import AddMyProducts from "../dashBord/buyerOrder/sellerRoute/AddMyProducts";
import MyAddedProducts from "../dashBord/buyerOrder/sellerRoute/MyAddedProducts";
import DashBordInfo from "../dashBord/dashBordInfo/DashBordInfo";
import DashBordLayout from "../dashBord/dashBordLayout/DashBordLayout";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LogIn from "../pages/login/LogIn";
import Blog from "../pages/page/Blog/Blog";
import Home from "../pages/page/Home";
import AllProductcategoriesItems from "../pages/page/Home/productCategories/allProductcategoriesItems/AllProductcategoriesItems";
import Regiestration from "../pages/regiestration/Regiestration";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivetRoute from "./PrivetRoute";
import SellerRoute from "./SellerRoute";

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
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/allproductcategoriesitems/:id',
                element:<PrivetRoute><AllProductcategoriesItems></AllProductcategoriesItems></PrivetRoute>,
                loader: ({params}) => (fetch(`https://reused-product-server.vercel.app/categoriesItems/${params.id}`))
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/singup',
                element:<Regiestration></Regiestration>
            },
            {
                path:'*',
                element : <ErrorPage></ErrorPage>
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
                element: <BuyerRoute><BuyerOrder></BuyerOrder></BuyerRoute>
               
            },
            {
                path:'/dashbord/myaddedproducts',
                element: <SellerRoute><MyAddedProducts></MyAddedProducts></SellerRoute>
            },
            {
                path:'/dashbord/addyourproduct',
                element:<SellerRoute><AddMyProducts></AddMyProducts></SellerRoute>
            },
            {
                path:'/dashbord/allseller',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashbord/allbuyer',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            }
        ]
    }

])