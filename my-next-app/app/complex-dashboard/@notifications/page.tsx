import Card from "@/app/components/card";
import Link from "next/link";

export default function Notifications() {
    return (
    <Card>
        <div>It is notification Page </div>
        <Link href="/complex-dashboard/archived" >Archieved</Link>
    </Card>)
}