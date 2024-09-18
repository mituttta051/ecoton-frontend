'use client';

import React, {useState} from 'react';
import {EventEntity} from "@/utils/event-entity";
import EventCard from "@/components/event-card";

enum PageState {
    LOADING,
    SUCCESS,
    ERROR,
}

interface EventGalleryProps {
    events: EventEntity[];
}


export default function EventGallery(props: EventGalleryProps) {
    const [pageState, setPageState] = useState<PageState>(PageState.SUCCESS);
    const [error, setError] = useState<number>(0);

    return (
        <div className={'min-h-[1000px] w-full px-[100px] my-5'}>
            {(pageState === PageState.LOADING && (
                    <div
                        className="grid gap-[100px] grid-cols-2 mx-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mx-[100px] mb-12">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index: number) => (
                            <div
                                key={index}
                                role="status"
                                className="max-w-sm p-4 border border-gray-200 shadow animate-pulse md:p-6 bg-white rounded-lg flex flex-col content-between min-w-[180px]"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        ))}
                    </div>
                )) ||
                (pageState === PageState.SUCCESS && (
                    <>
                        {props.events.length > 0 ? (
                            <div
                                className="grid gap-[100px] grid-cols-3 justify-items-stretch">
                                {props.events.map(
                                    (item: EventEntity, index: number) => (
                                        <EventCard key={index}
                                            date={item.date}
                                            description={item.description}
                                            imageUrl={item.imageUrl} location={item.location}
                                            organizer={item.organizers}
                                            title={item.name}/>
                                    ),
                                )}
                            </div>
                        ) : (
                            <div className="text-center text-gray-700 mt-8 text-xl md:text-3xl font-bold">
                                Событий пока нет :)
                            </div>
                        )}
                    </>
                )) || (pageState === PageState.ERROR && <div>Ошибка: {error}</div>)}
        </div>
    );
}
