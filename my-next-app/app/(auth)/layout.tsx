'use client'

import { useState } from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [input, setInput] = useState<string>('')
    return <>
    <div>
    <label>From layout - </label>

    <input className="border-2 border-blue" type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
    </div>
    {children}</>;
}
