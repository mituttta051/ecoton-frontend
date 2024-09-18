import { EventEntity } from "@/utils/event-entity";

export default function Page(params: { params: { identifier: number } }) {


    const event: EventEntity = {
        id: params.params.identifier,
        name: "Московское мероприятие",
        description: "Сегодня утром я увидел в окно дикого пингвина. Он стоял на улице и смотрел на меня большими круглыми глазами. Я был очень удивлен и даже испугался немного. Но потом я вспомнил, что у нас в городе есть зоопарк, и решил, что, наверное, этот пингвин сбежал оттуда. Я подумал, что нужно позвонить в зоопарк и рассказать им о найденном пингвине.",
        mapsId: 1,
        location: "Москва, Россия",
        date: "2023-10-01T10:00:00Z",
        organizer: "Московский организатор",
        participantsAmount: 0,
        imageUrl: "ecology.jpg",
        isEditable: false,
    };

    return (
        <div className="h-screen flex flex-col md:flex-row items-center text-black px-40 py-20 justify-between">
            <div className="md:w-1/2 flex flex-col justify-center">
                <h1 className="text-5xl font-montserrat font-medium mb-10 text-gray-800">
                    {event.name}
                </h1>
                <div className="text-gray-900 mb-2 leading-loose">{event.description}</div>
                <div className="text-gray-900 mb-2 leading-loose">{event.location}</div>
                <div className="text-gray-900 mb-2 leading-loose">{event.date}</div>
                <div className="text-gray-900 mb-10 leading-loose">{event.organizer}</div>
                <button
                    type="button"
                    className="text-white bg-default-800 hover:bg-default-900 font-sans rounded-lg text-sm px-5 py-2.5 mb-2 w-52"
                >
                    Принять участие
                </button>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
                <img
                    src="/ecology.jpg"
                    alt={event.name}
                    className="object-cover max-h-96 rounded-lg"
                />
            </div>
        </div>
    );
}