import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';
import useToken from '../../hooks/useToken';

const Regiestration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate('');
    const { createUser, updateUser } = useContext(AuthContext)
    const [singupError, setSingUpError] = useState('')

    const [createEmail, setCreateEmail] = useState('')
    //from hook useToken 
    const [token] = useToken(createEmail)

    if(token){
        navigate('/')
    }


    const handdleSingIn = data => {
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserInfoInDataBase(data.name, data.role, data.email.toLowerCase())
                    })
                    .catch(err => console.Log(err))

            })
            .then(err => {
                // console.log(err)
                setSingUpError(err)
            })
    }


    //save users account info in my database
    const saveUserInfoInDataBase = (name, role, email) => {
        const user = { name, role, email }
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    setCreateEmail(email)
                }
            })
    }

    //token set in localstroage
    // const getUserToken = (email) => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('resaleUserToken', data.accessToken)
    //                 navigate('/')
    //             }
    //         })
    // }

    return (
        <div className='h-[600px] w-full flex justify-center items-center'>
            <div>
                <h2 className="text-center text-3xl font-bold my-2">SingUp Now</h2>
                <form onSubmit={handleSubmit(handdleSingIn)}>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="name">Name</label>
                        <input id="name" {...register('name', { required: true, maxLength: 30 })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && errors.name.type === "required" && <span className='text-red-600'>This is required</span>}
                        {errors.name && errors.name.type === "maxLength" && <span className='text-red-600'>Max length exceeded</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="role">Select your option :</label>
                        <select {...register("role")} className="input input-bordered w-full max-w-xs">
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" ></input>
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password required",
                                minLength: {
                                    value: 6,
                                    message: "password must be minmum length is 6"
                                },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters'
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" ></input>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div>
                        {
                            singupError && <p className='text-red-600'>{singupError}</p>
                        }
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Singup" type="submit" />
                </form>

                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>


    );
};

export default Regiestration;