'use client'

import { error } from "console"

export default function ErrorBoundary({error}:{
    error: Error
}){
    return <div>{error.message}</div>
}