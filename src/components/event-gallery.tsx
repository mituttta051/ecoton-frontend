'use client';

import React, {useState} from 'react';
import {EventEntity} from "@/utils/event-entity";
import EventCard from "@/components/event-card";
import Title from "@/components/title";

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
    const [searchQuery, setSearchQuery] = useState<string>(''); // Search query state

    // Filtered events based on the search query
    const filteredEvents = props.events.filter(event =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={'min-h-[1000px] w-full py-10'}>
            {/* Search Input */}
            <div className="flex justify-between items-center content-center my-20">
                <Title text={'Мероприятия'} className={'font-montserrat'}/>
                <div className="relative w-full max-w-lg">
                    {/* SVG Icon */}
                    <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-6 top-1/2 transform -translate-y-1/2"
                    >
                        <path
                            d="M27.5859 28.548L16.8883 17.8505C16.0341 18.5782 15.0518 19.1414 13.9414 19.54C12.831 19.9386 11.7149 20.1379 10.5931 20.1379C7.85746 20.1379 5.5421 19.1909 3.64699 17.297C1.75188 15.403 0.804321 13.0882 0.804321 10.3526C0.804321 7.61698 1.75074 5.30104 3.64357 3.40479C5.5364 1.50854 7.85063 0.559281 10.5862 0.557003C13.3218 0.554726 15.6383 1.50228 17.5357 3.39967C19.4331 5.29706 20.3818 7.61299 20.3818 10.3475C20.3818 11.5342 20.1717 12.6828 19.7514 13.7932C19.3312 14.9036 18.7788 15.8534 18.0944 16.6427L28.7919 27.3385L27.5859 28.548ZM10.5948 18.4279C12.8612 18.4279 14.7745 17.6477 16.3348 16.0875C17.8951 14.5272 18.6752 12.6133 18.6752 10.3458C18.6752 8.07823 17.8951 6.16489 16.3348 4.60575C14.7745 3.04661 12.8612 2.26648 10.5948 2.26534C8.32839 2.2642 6.41449 3.04434 4.85307 4.60575C3.29165 6.16717 2.51152 8.0805 2.51265 10.3458C2.51379 12.611 3.29393 14.5243 4.85307 16.0858C6.41221 17.6472 8.32554 18.4273 10.5931 18.4262"
                            fill="#4C4016"
                            fillOpacity="0.75"
                        />
                    </svg>

                    {/* Search Input */}
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                        placeholder="поиск мероприятий..."
                        className="w-full border border-gray-300 rounded-[80px] shadow-lg focus:border-gray-500 focus:ring-0 focus:outline-none outline-0 p-[20px] italic pl-[70px]" // Added padding-left for the icon
                    />
                </div>
            </div>

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
                        {/* Filtered Events */}
                        {filteredEvents.length > 0 ? (
                            <div className="grid gap-[50px] grid-cols-3 justify-items-stretch">
                                {filteredEvents.map((item: EventEntity, index: number) => (
                                    <EventCard
                                        key={index}
                                        date={item.date}
                                        description={item.description}
                                        imageUrl={item.imageUrl}
                                        location={item.location}
                                        organizer={item.organizer}
                                        title={item.name}
                                        isEditable={item.isEditable}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-700 mt-8 text-xl md:text-3xl font-bold">
                                События не найдены ;(
                            </div>
                        )}
                    </>
                )) || (pageState === PageState.ERROR && <div>Ошибка: {error}</div>)}
        </div>
    );
}
