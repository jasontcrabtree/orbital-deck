import { DndKit } from "@/ui/components/dndkit";
import { DragZone } from "@/ui/components/drag-zone";
import { SortableDemo } from "@/ui/components/sortable";
import UploadGallery from "@/ui/components/sortable-photo";

const Page = () => {
  return (
    <main className="p-2 px-8 flex flex-col gap-4">
      <h1 className="font-semibold text-xl">Orbital Deck</h1>
      {/* <DragZone /> */}
      {/* <UploadGallery /> */}
      {/* <SortableDemo /> */}
      <DndKit />
    </main>
  )
}

export default Page;