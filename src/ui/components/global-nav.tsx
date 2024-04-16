import 'server-only'

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const GlobalNav = (): JSX.Element => {
    return (
        <nav className="w-full flex z-10" style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(23, 9, 9, 0.01' }}>
            <ul className="w-full mx-auto p-4 px-8 flex flex-row gap-2 items-center justify-between">
                <li>
                    <Link href="/">
                        Dashboard
                    </Link>
                </li>
                <li className="min-h-8">
                    <UserButton afterSignOutUrl="/" />
                </li>
            </ul>
        </nav>
    )
}

export default GlobalNav;