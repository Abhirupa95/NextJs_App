import React from "react";

export default function ProductDetailsLayout({
    children
}: {
    children: React.ReactNode
}){
    return(
        <>
        <h6 className="bg-aliceblue border-2 border-black font-fantasy font-extrabold">Product Banner</h6>
        {children}</>
    )
}