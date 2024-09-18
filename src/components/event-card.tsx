import Link from "next/link";

interface EventCardProps {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    location: string;
    organizer: string;
}

export default function EventCard(props: EventCardProps) {
    return (
        <div className="flex justify-center min-w-[330px] font-sans w-full h-full">
            <div
                className="bg-white border border-gray-200 rounded-[8px] flex flex-col content-between max-w-[335px] p-[22px] min-h-[490px] shadow-custom">
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
                <Link href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-default-900 rounded-lg hover:bg-default-950 w-52 transition duration-300 ease-in-out group">
                    <span>Страница мероприятия</span>
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 group-hover:translate-x-1 transition duration-300 ease-in-out" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}