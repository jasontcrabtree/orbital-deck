import { Button } from "@/app/ui/components/button"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link";

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