'use client'
import { useRouter } from "next/navigation"

export default function OrderProduct(){
    const router = useRouter()
    const handleClick =()=>{
        console.log("Placing your code")
        router.push("/")
    }
    return (
    <>
    <h1>Order Product</h1>
    <button className="bg-cadetblue p-2 rounded-md"
 onClick={handleClick}>Place Order</button>
    </>)
}