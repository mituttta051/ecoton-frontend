// private Integer id;
// private String name;
// private String description;
// private Long mapsId;
// private LocalDateTime dateTime;
// private List<name of organizers> organizers;
// private Integer participantsAmount;


export interface EventEntity {
    id: number;
    name: string;
    description: string;
    mapsId: number;
    dateTime: string;
    organizers: string;
    participantsAmount: number;
}