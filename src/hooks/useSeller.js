import { useState } from "react"
import { useEffect } from "react"


const useSeller = email =>{
  const [isSeller,setIsSeller] = useState(false)
  const [isSellerLoading,setIsSellerLoading] = useState(true)

    useEffect(()=>{
        if(email){
            fetch(`https://reused-product-server.vercel.app/user/seller/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setIsSeller(data.isSellerer)
            setIsSellerLoading(false)
        })
        }
    },[email])
    return [isSeller,isSellerLoading];
}

export default useSeller;