import { Metadata } from "next"

export const metadata : Metadata ={
    title: 'Profile'
}

export default function Profile(){
    return <h1 className="text-4xl font-bold text-black-500">Profile</h1>
}