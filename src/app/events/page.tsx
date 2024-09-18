import Container from "@/components/Container";
import EventGallery from "@/components/event-gallery";
import Header from "@/components/Header";
import { EventEntity } from "@/utils/event-entity";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Events = () => {
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
            isEditable: true,
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
            isEditable: true,
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
            isEditable: true,
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
            isEditable: true,
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
            isEditable: true,
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
            isEditable: true,
        },
    ];
    return (
        <Container>
            <Header />
            <Button className="default-300 mb-5" size="md">
                <Link href="/add-event">Добавить мероприятие</Link>
            </Button>
            <h1 className="font-bold text-3xl mb-10">Ваши мероприятия</h1>
            <EventGallery events={eventEntities} />
        </Container>
    );
};

export default Events;
