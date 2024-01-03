import { UserButton } from "@clerk/nextjs"
import Link from "next/link";
import { Button } from "./ui/components/button";

const Page = () => {
  return (
    <main className="">
      <h1>Orbital Deck</h1>
      <Link href="/about">About</Link>
      <Button>Click me</Button>
      <UserButton afterSignOutUrl="/" />
    </main>
  )
}

export default Page;