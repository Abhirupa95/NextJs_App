import { Metadata } from "next"
import { notFound } from "next/navigation"
import { resolve } from "path"

interface ProductType {
    params: {
        productsId : string
    }
}
//setting dynamic meta data
export const generateMetadata =async({params}: ProductType): Promise<Metadata>=>{
    const title = await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`This is ${params.productsId} page`)
        }, 100)
    })
    
    return {
        title : `Product - ${title}`
    }
}
export default function DynamicProducts({params}: ProductType){
    if(parseInt(params.productsId) > 1000){
        notFound()
    }
    return <h1 className="text-4xl font-bold text-black-500">This is dynamic products- {params.productsId} </h1>
}