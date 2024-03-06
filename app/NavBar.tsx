import React, {ReactNode} from 'react';
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="flex bg-slate-700 p-5">
            <Link href="/" className={"mr-5"}>Next.js</Link>
            <Link href="/users/" className={"mr-5"}>Users</Link>
            <Link href="/admin/" className={"mr-5"}>Amin</Link>
        </div>
    );
};

export default NavBar;