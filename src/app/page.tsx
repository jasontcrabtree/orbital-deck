import { ElementGrid } from "@/ui/components/element-grid";

const ElementOne = () => {
  return (
    <div className='bg-white text-black p-2'>
      Element one
    </div>
  )
}
const ElementTwo = () => {
  return (
    <div className='bg-white text-black p-2'>
      Drag me
      Element Two
    </div>
  )
}
const ElementThree = () => {
  return (
    <div className='bg-white text-black p-2'>
      Drag me
      Element Three
    </div>
  )
}

const ElementFour = () => {
  return (
    <div className='bg-white text-black p-2'>
      Drag me
      Element Four
    </div>
  )
}

export const elementArray = [
  {
    id: '1',
    label: 'Element One',
    component: <ElementOne />
  },
  {
    id: '2',
    label: 'Element Two',
    component: <ElementTwo />
  },
  {
    id: '3',
    label: 'Element Three',
    component: <ElementThree />
  },
  {
    id: '4',
    label: 'Element Four',
    component: <ElementFour />
  },
];

const Page = () => {
  return (
    <main className="p-2 px-8 flex flex-col gap-4">
      <h1 className="font-semibold text-xl">Orbital Deck</h1>
      <ElementGrid />
    </main>
  )
}

export default Page;