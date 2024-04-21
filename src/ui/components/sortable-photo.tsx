'use client';
import { forwardRef, SetStateAction, useState } from 'react';
import {
    DndContext,
    DragOverlay,
} from '@dnd-kit/core';

import {
    useSortable,
    arrayMove,
    SortableContext,
    rectSortingStrategy,
} from '@dnd-kit/sortable';
import { elementArray } from './drag-zone';

const Content = forwardRef(({ url, index, faded, style, ...props }, ref) => {
    // console.log('photo component', props);
    const inlineStyles = {
        opacity: faded ? '0.2' : '1',
        transformOrigin: '0 0',
        height: index === 0 ? 410 : 200,
        gridRowStart: index === 0 ? 'span 2' : null,
        gridColumnStart: index === 0 ? 'span 2' : null,
        backgroundColor: 'grey',
        ...style,
    };

    return (
        <div ref={ref} style={inlineStyles} {...props}>
            {props?.item?.component}
        </div>
    );
});

export const SortableItem = (props) => {
    console.log(props)
    const sortable = useSortable({ id: props.url });
    const {
        attributes,
        listeners,
        setNodeRef,
    } = sortable;

    return (
        <Content
            id={props.id}
            ref={setNodeRef}
            {...props}
            {...attributes}
            {...listeners}
        />
    );
};

const UploadGallery = () => {
    const [items, setItems] = useState(elementArray);
    const [activeId, setActiveId] = useState(null);

    return (
        <DndContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={items} strategy={rectSortingStrategy}>
                <div className='grid grid-cols-4 gap-2'>
                    {items.map((url, index) => (
                        <SortableItem key={url} id={url.id} url={url} index={index} item={url} />
                    ))}
                </div>
            </SortableContext>

            <DragOverlay adjustScale={true}>
                {activeId ? (
                    // <Photo url={activeId} index={items.indexOf(activeId)} />
                    <SortableItem key={activeId} index={items.indexOf(activeId)} item={items.indexOf(activeId)} />
                ) : null}
            </DragOverlay>
        </DndContext>
    );

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }

        setActiveId(null);
    }
};

export default UploadGallery;
