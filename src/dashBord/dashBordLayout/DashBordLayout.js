import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Footer from '../../shared/footer/Footer';
import Navbar from '../../shared/navbar/Navbar';

const DashBordLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const[isBuyer] = useBuyer(user?.email)
    const[isSeller] = useSeller(user?.email)


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
                        {
                            user?.role === 'Buyer' &&
                            <li><Link to='/dashbord/myorder'>My Order</Link></li>
                        }
                       
                        
                        {
                            isBuyer &&
                            <li><Link to='/dashbord/myorder'>My Order</Link></li>
                        }
                        {/* seller */}
                        {
                            isSeller &&
                            <>
                             <li><Link to='/dashbord/myaddedproducts'>My Added Products</Link></li>
                             <li><Link to='/dashbord/addyourproduct'>Add Your Product</Link></li>
                            </>
                        }
                       
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashbord/allbuyer'>All Buyer</Link></li>
                                <li><Link to='/dashbord/allseller'>All Seller</Link></li>
                            </>
                        }


                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBordLayout;