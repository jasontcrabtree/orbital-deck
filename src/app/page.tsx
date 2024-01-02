import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <main className="">
      <h1>Orbital Deck</h1>
      <Button>Click me</Button>
      <UserButton afterSignOutUrl="/" />
    </main>
  )
}

