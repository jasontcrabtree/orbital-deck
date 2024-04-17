import { DragZone } from "@/ui/components/drag-zone";

const Page = () => {
  return (
    <main className="p-2 px-8">
      <h1 className="font-semibold text-xl">Orbital Deck</h1>
      <DragZone />
    </main>
  )
}

export default Page;