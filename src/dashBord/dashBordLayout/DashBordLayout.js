import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../shared/footer/Footer';
import Navbar from '../../shared/navbar/Navbar';

const DashBordLayout = () => {
    return (
        <div>
             <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="drawer-btn" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    {/* <label htmlFor="drawer-btn" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-btn" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content"> 
                    <li><Link to='/dashbord/dasbordinfo'>Profile</Link></li>
                        <li><Link to='/dashbord/myorder'>My Order</Link></li>
                        <li><Link to='/dashbord/myaddedproducts'>My Added Products</Link></li>
                        <li><Link to='/dashbord/addyourproduct'>Add Your Product</Link></li>
                        <li><Link to='/dashbord/allbuyer'>All Buyer</Link></li>
                        <li><Link to='/dashbord/allseller'>All Seller</Link></li>
                         
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBordLayout;