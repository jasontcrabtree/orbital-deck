import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const GlobalNav = (): JSX.Element => {
    return (
        <nav className="w-full flex">
            <ul className="w-full mx-auto p-2 px-8 flex flex-row gap-2 items-center justify-between">
                <li>
                    <Link href="/">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <UserButton afterSignOutUrl="/" />
                </li>
            </ul>
        </nav>
    )
}

export default GlobalNav;