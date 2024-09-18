import EventCard from "@/components/event-card";
import EventGallery from "@/components/event-gallery";
import { EventEntity } from "@/utils/event-entity";
import Header from "@/components/Header";

export default function Home() {
    const eventEntities: EventEntity[] = [
        {
            id: 1,
            name: "Sample Event 1",
            description: "This is a sample event description 1.",
            mapsId: 123456,
            location: "Москва, Россия",
            date: "2023-10-01T10:00:00Z",
            organizer: "Organizer 2",
            participantsAmount: 100,
            imageUrl: "ecology.jpg",
            isEditable: false,
        },
        {
            id: 2,
            name: "Sample Event 2",
            description: "This is a sample event description 2.",
            mapsId: 654321,
            location: "Москва, Россия",
            date: "2023-11-01T10:00:00Z",
            organizer: "Organizer 4",
            participantsAmount: 150,
            imageUrl: "ecology.jpg",
            isEditable: false,
        },
        {
            id: 3,
            name: "Sample Event 3",
            description: "This is a sample event description 3.",
            mapsId: 789012,
            location: "Москва, Россия",
            date: "2023-12-01T10:00:00Z",
            organizer: "Organizer 5",
            participantsAmount: 200,
            imageUrl: "ecology.jpg",
            isEditable: false,
        },
        {
            id: 3,
            name: "Sample Event 3",
            description: "This is a sample event description 3.",
            mapsId: 789012,
            location: "Москва, Россия",
            date: "2023-12-01T10:00:00Z",
            organizer: "Organizer 5",
            participantsAmount: 200,
            imageUrl: "ecology.jpg",
            isEditable: false,
        },
        {
            id: 3,
            name: "Sample Event 3",
            description: "This is a sample event description 3.",
            mapsId: 789012,
            location: "Москва, Россия",
            date: "2023-12-01T10:00:00Z",
            organizer: "Organizer 5",
            participantsAmount: 200,
            imageUrl: "ecology.jpg",
            isEditable: false,
        },
        {
            id: 3,
            name: "Sample Event 3",
            description: "This is a sample event description 3.",
            mapsId: 789012,
            location: "Москва, Россия",
            date: "2023-12-01T10:00:00Z",
            organizer: "Organizer 5",
            participantsAmount: 200,
            imageUrl: "ecology.jpg",
            isEditable: false,
        },
    ];

    return (
        <div className={"h-full"}>
            <img src="leaves/leaf1.svg" alt="leave" className="absolute top-0 left-72"/>
            <div className={"px-[100px] my-5"}>
                <Header/>
                <EventGallery events={eventEntities}/>
            </div>
        </div>
    );
}
