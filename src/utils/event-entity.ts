export interface EventEntity {
    id: number;
    name: string;
    description: string;
    mapsId: number;
    location: string;
    date: string;
    organizer: string;
    participantsAmount: number;
    imageUrl: string;
    isEditable: boolean;
}
