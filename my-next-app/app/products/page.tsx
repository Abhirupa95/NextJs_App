import Link from "next/link"

export default function Products(){
    const productId = 100;
    return (
        <>
    <h1 className="text-4xl font-bold text-black-500">Products File</h1>
    <ul>
        <li><Link href="products/1">Products 1</Link></li>
        <li><Link href="products/2">Products 2</Link></li>
        <li><Link href="products/3" replace>Products 3</Link></li>
        <li><Link href="products/4">Products 4</Link></li>
        <li><Link href={`products/${productId}`}>Products {productId}</Link></li>



    </ul>
    </>
)
}