'use client';
import { useState } from 'react';
import { closestCenter, DndContext, DragEndEvent, DragOverlay, UniqueIdentifier } from '@dnd-kit/core';
import { arrayMove, rectSwappingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DotsSix, PushPin, PushPinSlash } from '@phosphor-icons/react';
import { elementArray } from '@/app/page';

function SortableElement({ id, label, item, isOverlay = false }: {
    id: string,
    label?: string,
    item: {
        component: React.ReactNode
    },
    isOverlay?: boolean
}) {
    const [isPinned, setIsPinned] = useState(false);

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        backdropFilter: isDragging ? 'blur(4px)' : "",
        backgroundColor: isDragging ? "rgba(23, 9, 9, 0.2)" : "rgba(23, 9, 9, 0.9)",
    };

    const labelStyle = {
        color: (isDragging || isOverlay) ? '#0284c7' : '#475569',
        fill: (isPinned || isOverlay) ? '#0284c7' : '#475569',
    };

    const pinStyles = {
        fill: (isPinned || isOverlay) ? '#0284c7' : '#475569',
    };

    const dragHandleStyles = {
        fill: (!isPinned) ? '#0284c7' : '#475569',
    };

    return (
        <div style={style} className='w-full min-w-[calc(90vw-32px)] md:min-w-[calc(50vw-48px)] rounded'>
            <div className='flex flex-row gap-2 flex-start w-full py-1'>
                <div style={labelStyle} className='flex flex-row gap-2'>

                    <button className='' ref={!isPinned ? setNodeRef : null} {...(!isPinned ? { ...listeners, ...attributes } : {})}>
                        <DotsSix size={20} weight="bold" style={dragHandleStyles} />
                    </button>

                    <button className='' onClick={(() => setIsPinned(!isPinned))}>
                        {isPinned ? (
                            <PushPinSlash size={20} style={pinStyles} weight="bold" />
                        ) : (
                            <PushPin size={20} style={pinStyles} weight="bold" />
                        )}
                    </button>
                </div>
                {label && (<p style={labelStyle} className="text-inherit font-semibold text-sm">{label}</p>)}
            </div>
            {item?.component}
        </div>
    );
}

export const ElementGrid = () => {
    const [items, setItems] = useState(elementArray);
    const [activeId, setActiveId] = useState<null | UniqueIdentifier>(null);

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over?.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    function handleDragOverlay(event: DragEndEvent) {
        setActiveId(event.active.id);
    }

    const getActiveItem = () => items.find(item => item.id === activeId);

    return (
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragOverlay} collisionDetection={closestCenter}>
            <SortableContext items={items.map(item => item.id)} strategy={rectSwappingStrategy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {items.map((item) => (
                        <SortableElement key={item.id} id={item.id} item={item} label={item.label} />
                    ))}
                </div>

                <DragOverlay>
                    {activeId ? (
                        <SortableElement id="drag-overlay"
                            item={{ component: getActiveItem()?.component }} label={getActiveItem()?.label}
                            isOverlay={true}
                        />
                    ) : null}
                </DragOverlay>
            </SortableContext>
        </DndContext>
    );
}