import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/ContextProvider';
// import { format } from 'date-fns'

const AddMyProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user } = useContext(AuthContext)
    const imageKey = process.env.REACT_APP_imagebb;
    const data = new Date()
    const date = format(data, 'PP')
    const navigate = useNavigate('')

    const handleAddaProduct = data => {
        const image = data.image[0]
        console.log(data.image[0])
        
        const formData = new FormData();

        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`


        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if(imgData.success){
                    const sellerInfo = {
                        image: imgData.data.url,
                        seller: data.sellername,
                        email: data.email,
                        product_name: data.productname,
                        condition: data.condition,
                        cid: data.categorie,
                        used_time: data.usedtime,
                        market_price: data.marketprice,
                        selling_price: data.sellingprice,
                        information: data.information,
                        sellerNumber: data.sellernumber,
                        sellerLocation: data.sellerlocation,
                        date: date,
                    }
                    console.log(sellerInfo)

                    fetch('http://localhost:5000/sellerproduct', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(sellerInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if(data.acknowledged){
                                navigate('/dashbord/myaddedproducts')
                                toast('Product Add  SuccessFull')
                            }
                        })
                }    
            }) 

    }

    const { data: allCategories = [], } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    })



    return (
        <div>
            <h2 className="text-3xl my-2">Add My product</h2>
            <div>
                <form onSubmit={handleSubmit(handleAddaProduct)}>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <input
                            {...register('image', { required: true })}
                            type="file" className="file-input w-full max-w-xs  " />
                        {errors.image && <span className='mx-2'>This field is required</span>}
                        <p className='text-sm my-1'>Please Upload 1:1 aspect Ratio Image</p>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Seller Name</span>
                        </label>
                        <input type='text'
                            {...register('sellername', { required: true })}
                            className='input input-bordered w-full max-w-xs my-2'  defaultValue={user?.displayName} readOnly/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type='email'
                            {...register('email', { required: true })}
                            className='input input-bordered w-full max-w-xs my-2' defaultValue={user?.email} readOnly />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Categorie</span>
                        </label>
                        <select {...register('categorie', { required: true })} className="select select-bordered w-full max-w-xs ">
                            
                            {
                                allCategories.map((allCategorie, i) =>  <option
                                key={i}
                                value={allCategorie.categoryId}
                                required
                            >
                                {allCategorie.product_name}
                            </option>)
                            }
                        </select>
                        {errors.categorie && <span className='mx-2'>This field is required</span>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Product Name</span>
                        </label>
                        <input type='text'
                            {...register('productname', { required: true })}
                            className='input input-bordered w-full max-w-xs my-2' placeholder="productname" required/>
                        {errors.totalDriven && <span className='mx-2'>This field is required</span>}

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Condition</span>
                        </label>
                        <input type='text'
                            {...register('condition', { required: true })}
                            className='input input-bordered w-full max-w-xs my-2' placeholder="new/used" />
                        {errors.condition && <span className='mx-2'>This field is required</span>}

                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Used Time</span>
                        </label>
                        <input type='text'
                            {...register('usedtime', { required: true })}
                            className='input input-bordered w-full max-w-xs my-2' placeholder="how many dayes use" />
                        {errors.usedtime && <span className='mx-2'>This field is required</span>}

                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Orginal Price</span>
                        </label>
                        <input type='text'
                            {...register('marketprice', { required: true })}
                            className='input input-bordered  w-full max-w-xs my-2' placeholder="Orginal Price" />
                        {errors.orginalPrice && <span className='mx-2'>This field is required</span>}

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Resale Price</span>
                        </label>
                        <input type='text'
                            {...register('sellingprice', { required: true })}
                            className='input input-bordered w-full max-w-xs my-2' placeholder="Resale Price" />

                        {errors.sellingprice && <span className='mx-2'>This field is required</span>}

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Phone Number</span>
                        </label>
                        <input type='text'
                            {...register('sellernumber', { required: true })}
                            className='input input-bordered w-full max-w-xs my-2' placeholder="Number" />

                        {errors.sellernumber && <span className='mx-2'>This field is required</span>}

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Location</span>
                        </label>
                        <input type='text'
                            {...register('sellerlocation', { required: true })}
                            className='input input-bordered w-full max-w-xs my-2' placeholder="location" />

                        {errors.sellerlocation && <span className='mx-2'>This field is required</span>}

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Details</span>
                        </label>
                        <textarea type='text'
                            {...register('information', { required: true })}
                            className='input input-bordered h-32 w-full max-w-xs my-2' placeholder="information" />
                        {errors.information && <span className='mx-2'>This field is required</span>}

                    </div>

                    <input value='Post' className='btn btn-primary w-full max-w-xs my-2' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddMyProducts;