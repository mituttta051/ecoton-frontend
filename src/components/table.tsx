import {EventEntity} from "@/utils/event-entity";
import {OrganizerEntity} from "@/utils/organizer-entity";
import {ParticipantEntity} from "@/utils/participant-entity";

interface TableProps {
    columns: string[];
    data: EventEntity[] | OrganizerEntity[] | ParticipantEntity[];
}

type CombinedEntity = EventEntity | OrganizerEntity | ParticipantEntity;

const columnEventMapping: { [key: string]: keyof EventEntity } = {
    "id": "id",
    "название": "name",
    "организатор": "organizers",
    "дата": "date",
    "описание": "description",
    "количество участников": "participantsAmount",
    "организаторы": "organizers"
};

const columnParticipantMapping: { [key: string]: keyof ParticipantEntity } = {
    "id": "id",
    "имя": "name",
    "электронная почта": "email",
    "пол": "gender",
    "возраст": "age"
};

const columnOrganizerMapping: { [key: string]: keyof OrganizerEntity } = {
    "id": "id",
    "имя": "name",
    "тип": "type"
};

// Helper function to determine the correct column mapping
const getColumnMapping = (data: CombinedEntity[]): { [key: string]: string } => {
    if (data.length > 0) {
        const firstItem = data[0];
        if ("dateTime" in firstItem) {
            return columnEventMapping;
        } else if ("email" in firstItem) {
            return columnParticipantMapping;
        } else if ("type" in firstItem) {
            return columnOrganizerMapping;
        }
    }
    return {};
};

export default function Table(props: TableProps) {
    const columnMapping = getColumnMapping(props.data as CombinedEntity[]);

    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {props.columns.map((column, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {column}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {props.columns.map((column, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {(() => {
                                        const value = row[columnMapping[column] as keyof CombinedEntity];

                                        if (Array.isArray(value)) {
                                            return value.join(", ");
                                        } else if (typeof value === "string" || typeof value === "number") {
                                            return value;
                                        } else {
                                            return "";
                                        }
                                    })()}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}