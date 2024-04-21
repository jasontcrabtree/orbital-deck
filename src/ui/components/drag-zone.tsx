'use client';

import { useState } from 'react';
import { closestCenter, DndContext, DragOverlay } from '@dnd-kit/core';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { DotsSix, Lock, LockOpen, PushPin, PushPinSlash } from '@phosphor-icons/react';
import { arrayMove, rectSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Droppable = ({ children, id }: { children: React.ReactNode, id: string }) => {
    // const { isOver, setNodeRef } = useDroppable({ id });
    const res = useDroppable({ id });
    // console.log('res', res);

    const style = {
        color: res.isOver ? 'green' : undefined,
    };

    return (
        <div className='bg-slate-200 text-slate-700 p-2 rounded'
            ref={res.setNodeRef} style={style}>
            {children}
        </div>
    );
}

const SortableElement = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: props.item.id
    })
    console.log('props', props);

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
            Element {props?.item?.id}
        </div>
    )
}

const Draggable = ({ children, id, ...props }: { children: React.ReactNode, id: string }) => {
    const sortable = useSortable({ id });
    const {
        attributes,
        listeners,
        isDragging,
        setNodeRef,
        transform,
        // transition,
    } = sortable;

    // console.log('useDraggable returns', res)

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div
            id={id}
            ref={setNodeRef}
            style={style}
            {...props}
            {...attributes}
            {...listeners}
            className='bg-white text-slate-800 p-2 border-2 rounded border-indigo-400'>
            <div className='flex flex-row gap-3 justify-end w-full'>
                <button style={style} {...listeners} {...attributes}>
                    <DotsSix size={24} color="" weight="bold" />
                </button>
                {/* <button className="w-6">
                    <LockOpen size={24} color="" weight="bold" />
                </button> */}
                <button>
                    <Lock size={24} color="" weight="bold" />
                </button>
                <button>
                    <PushPin size={24} color="" weight="bold" />
                </button>
                {/* <button>
                    <PushPinSlash size={24} color="" weight="bold" />
                </button> */}
            </div>
            <h2 className='font-bold'>
                {children}
            </h2>
        </div>
    );
}

const ElementOne = () => {
    return (
        <Draggable id="one">
            <div>
                Element one
            </div>
        </Draggable>
    )
}
const ElementTwo = () => {
    return (
        <Draggable id="two">
            <div>
                Drag me
                Element Two
            </div>
        </Draggable>
    )
}
const ElementThree = () => {
    return (
        <Draggable id="three">
            <div>
                Drag me
                Element Three
            </div>
        </Draggable>
    )
}
const ElementFour = () => {
    return (
        <Draggable id="four">
            <div>
                Drag me
                Element Four
            </div>
        </Draggable>
    )
}

export const elementArray = [
    {
        id: '1',
        component: <ElementOne />
    },
    {
        id: '2',
        component: <ElementTwo />
    },
    {
        id: '3',
        component: <ElementThree />
    },
    {
        id: '4',
        component: <ElementFour />
    },
];

export const DragZone = () => {
    const [items, setItems] = useState(elementArray);
    const [activeId, setActiveId] = useState(null);

    function handleDragEnd(event) {
        // console.log('items', items);
        // const { active, over } = event;
        // console.log("ACTIVE, OVER", active, '|', over)

        // if (active.id !== over.id) {
        //     setItems((items) => {
        //         const oldIndex = items.indexOf(active.id);
        //         const newIndex = items.indexOf(over.id);

        //         return arrayMove(items, oldIndex, newIndex);
        //     });
        //     console.log('items', items)
        // }

        // setActiveId(null);
        const { active, over } = event;
        if (active.id === over.id) {
            return
        }

        setItems((items) => {
            const oldIndex = items.findIndex(item => item.id === active.id);
            const newIndex = items.findIndex(item => item.id === over.id);

            return arrayMove(items, oldIndex, newIndex)
        })
    }

    function handleDragOverlay(event) {
        setActiveId(event.active.id);
    }

    return (
        <div className='flex flex-col gap-8'>
            <DndContext onDragStart={handleDragOverlay} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]} collisionDetection={closestCenter}>
                <SortableContext items={items} strategy={rectSortingStrategy}>
                    <div className="grid grid-cols-2 gap-2">
                        {items.map((item, index) => (
                            <SortableElement key={index} item={item} />
                        ))}
                        {/* // return item.component
                    // <Droppable key={index} id={item.id}>
                    //     {item.component}
                    // </Droppable> */}
                    </div>

                    {/* <DragOverlay>
                        {activeId ? (
                            <Draggable id={activeId}>
                                Drag me [{activeId}]
                            </Draggable>
                        ) : null}
                    </DragOverlay> */}
                </SortableContext>
            </DndContext>
        </div>
    );
}