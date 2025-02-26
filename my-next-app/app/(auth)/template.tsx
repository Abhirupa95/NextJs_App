'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: 'Register', href: "/register" },
    { name: 'Login', href: "/login" },
    { name: 'Forgot Password', href: "/forgot-password" }
];

export default function AuthTemplate({
    children,
}: {
    children: React.ReactNode
}) {
    const pathName = usePathname();
    const [value, setValue] = useState<string>('');

    return (
        <div>
            <div>
                <label>From Template - </label>
                <input 
                className="border-2 border-cadetblue" 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
            </div>
         
            {navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href);

                return (
                    <Link 
                        href={link.href} 
                        key={link.name}
                        className={isActive ? "font-bold" : "text-blue-500"}
                    >
                        {link.name}
                    </Link>
                );
            })}
            {children}
        </div>
    );
}
