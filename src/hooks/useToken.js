import React, { useEffect, useState } from 'react';

const useToken = (email) => {
    const[token, setToken] = useState('')
    useEffect(() => {
     if(email){
            fetch(`https://reused-product-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('resaleUserToken', data.accessToken)
                    setToken(data.accessToken)
                    
                }
            })
        }
    }, [email])
    return[email,token]

}

export default useToken;