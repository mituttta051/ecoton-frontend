import { Button } from "flowbite-react";
import Link from "next/link";

interface EventCardProps {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    location: string;
    organizer: string;
    isEditable: boolean;
}

export default function EventCard(props: EventCardProps) {
    return (
        <div className="flex justify-center min-w-[330px] font-sans w-full h-full relative">
            <div className="bg-white border border-gray-200 rounded-[8px] flex flex-col content-between max-w-[335px] p-[22px] min-h-[490px] shadow-custom">
                <img
                    className="rounded-[5px]"
                    src={props.imageUrl}
                    alt={props.title}
                />

                <div className="p-5 flex flex-col justify-between h-full gap-4">
                    <div>
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                            {props.title}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg">
                            Дата: {props.date}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg">
                            {props.description}
                        </p>

                        <p className="mb-3 font-normal text-gray-700 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg">
                            Адрес: {props.location}
                        </p>

                        <p className="mb-3 font-normal text-gray-700 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg">
                            Организаторы: {props.organizer}
                        </p>
                    </div>
                </div>
                {props.isEditable ? (
                    <div className="flex gap-4">
                        <Button color="warning">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                            </svg>
                        </Button>
                        <Button color="failure">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </Button>
                    </div>
                ) : (
                    <Link
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-default-900 rounded-lg hover:bg-default-950 w-52 transition duration-300 ease-in-out group"
                    >
                        <span>Страница мероприятия</span>
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2 group-hover:translate-x-1 transition duration-300 ease-in-out"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                )}
            </div>
        </div>
    );
}
