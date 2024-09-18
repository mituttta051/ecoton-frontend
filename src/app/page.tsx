import EventCard from "@/components/event-card";
import EventGallery from "@/components/event-gallery";
import { EventEntity } from "@/utils/event-entity";

export default function Home() {
    const eventEntities: EventEntity[] = [
        {
            id: 1,
            name: "Sample Event 1",
            description: "This is a sample event description 1.",
            mapsId: 123456,
            location: "Москва, Россия",
            date: "2023-10-01T10:00:00Z",
            organizers: "Organizer 2",
            participantsAmount: 100,
            imageUrl: "ecology.jpg",
        },
        {
            id: 2,
            name: "Sample Event 2",
            description: "This is a sample event description 2.",
            mapsId: 654321,
            location: "Москва, Россия",
            date: "2023-11-01T10:00:00Z",
            organizers: "Organizer 4",
            participantsAmount: 150,
            imageUrl: "ecology.jpg",
        },
        {
            id: 3,
            name: "Sample Event 3",
            description: "This is a sample event description 3.",
            mapsId: 789012,
            location: "Москва, Россия",
            date: "2023-12-01T10:00:00Z",
            organizers: "Organizer 5",
            participantsAmount: 200,
            imageUrl: "ecology.jpg",
        },
        {
            id: 3,
            name: "Sample Event 3",
            description: "This is a sample event description 3.",
            mapsId: 789012,
            location: "Москва, Россия",
            date: "2023-12-01T10:00:00Z",
            organizers: "Organizer 5",
            participantsAmount: 200,
            imageUrl: "ecology.jpg",
        },
        {
            id: 3,
            name: "Sample Event 3",
            description: "This is a sample event description 3.",
            mapsId: 789012,
            location: "Москва, Россия",
            date: "2023-12-01T10:00:00Z",
            organizers: "Organizer 5",
            participantsAmount: 200,
            imageUrl: "ecology.jpg",
        },
        {
            id: 3,
            name: "Sample Event 3",
            description: "This is a sample event description 3.",
            mapsId: 789012,
            location: "Москва, Россия",
            date: "2023-12-01T10:00:00Z",
            organizers: "Organizer 5",
            participantsAmount: 200,
            imageUrl: "ecology.jpg",
        },
    ];

    return (
        <>
            <EventGallery events={eventEntities} />
        </>
    );
}
