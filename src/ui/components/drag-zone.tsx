'use client';

import { useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { DotsSix, Lock, LockOpen, PushPin, PushPinSlash } from '@phosphor-icons/react';

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

const Draggable = ({ children, id }: { children: React.ReactNode, id: string }) => {
    // const {
    //     setNodeRef,
    //     attributes,
    //     listeners,
    //     transform } = useDraggable({ id });
    const res = useDraggable({ id });
    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
    } = res;

    // console.log('useDraggable returns', res)

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef} className='bg-white text-slate-800 p-2 border-2 rounded border-indigo-400'>
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
        <div>
            <Draggable id="one">Drag me</Draggable>
            Element one
        </div>
    )
}
const ElementTwo = () => {
    return (
        <div>
            <Draggable id="two">Drag me</Draggable>
            Element Two
        </div>
    )
}
const ElementThree = () => {
    return (
        <div>
            <Draggable id="three">Drag me</Draggable>
            Element Three
        </div>
    )
}
const ElementFour = () => {
    return (
        <div>
            <Draggable id="four">Drag me</Draggable>
            Element Four
        </div>
    )
}

export const DragZone = () => {
    const [items] = useState(
        [
            {
                id: 'one',
                component: <ElementOne />
            },
            {
                id: 'two',
                component: <ElementTwo />
            },
            {
                id: 'three',
                component: <ElementThree />
            },
            {
                id: 'four',
                component: <ElementFour />
            },
        ]);

    const [parent, setParent] = useState(null);
    const [activeId, setActiveId] = useState(null);

    console.log('STATE', parent, activeId)

    const handleDragEnd = (event) => {
        console.log('event', event)
        const { over } = event;
        setParent(over ? over.id : null);
    }

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }

    // function handleDragEnd() {
    //     setActiveId(null);
    // }

    /* onDragEnd argument takes a custom function which passes in a custom dndkit event type, which can be ?split? to over, which can include an id */

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
            {/* If parent starts as null render drag element outside of the drop grid */}
            {/* {parent === null ? (
                <Draggable id="draggable">Drag me</Draggable>
            ) : null} */}

            <div className="grid grid-cols-2 gap-2">
                {items.map((item, index) => {
                    return (
                        <Droppable key={index} id={item.id}>
                            {/* {parent === item ?
                                // <Draggable id={id}>
                                //     Drag me
                                // </Draggable>
                            : 'Drop here'} */}
                            {item.component}
                        </Droppable>
                    )
                })}
            </div>

            <DragOverlay>
                {activeId ? (
                    <Draggable id={activeId}>
                        Drag me [{activeId}]
                    </Draggable>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}