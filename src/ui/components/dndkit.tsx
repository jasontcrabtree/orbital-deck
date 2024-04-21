'use client';
import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { arrayMove, rectSwappingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { elementArray } from './drag-zone';

function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
            draggable? {props.id}
            {props.item.component}
        </li>
    );
}

export const DndKit = () => {
    const [items, setItems] = useState(elementArray);
    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={items.map(item => item.id)} strategy={rectSwappingStrategy}>
                {items.map((item) => (
                    <SortableItem key={item.id} id={item.id} item={item} />
                ))}
            </SortableContext>
        </DndContext>
    );
}