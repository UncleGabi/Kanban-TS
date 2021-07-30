import { v4 as uuidv4 } from "uuid";

export interface BoardData {
    id: string;
    name: string;
    date: string;
    columns: Sections[] | [];
}

export interface Sections {
    title: string;
    WIP: number;
    cards: Cards[];
}

export interface Cards {
    id: string;
    title: string;
    description: string;
    label: string;
    created: string;
    dueDate: string;
    status: string;
    assignedTo: string;
}

// Valahogy kiszedni az adott board oszlopait, és arra is csinálni egy state-et!!

export const boardData: BoardData[] = [
    {
        id: uuidv4(),
        name: "Project1",
        date: new Date("2021.07.23").toLocaleDateString(),
        columns: [
            {
                title: "Todo",
                WIP: 3,
                cards: [
                    {
                        id: uuidv4(),
                        title: "Design",
                        description: "Create board page design",
                        label: "TODO",
                        created: new Date().toLocaleDateString(),
                        dueDate: new Date("2021.11.11").toLocaleDateString(),
                        status: "TODO",
                        assignedTo: "Gábor",
                    },
                ],
            },
            {
                title: "In Progress",
                WIP: 3,
                cards: [
                    {
                        id: uuidv4(),
                        title: "Display boards from localstorage",
                        description: "Remove the mock data from the board list",
                        label: "Needs Review",
                        created: new Date().toLocaleDateString(),
                        dueDate: new Date("2021.11.11").toLocaleDateString(),
                        status: "In progress",
                        assignedTo: "Gábor",
                    },
                ],
            },
            {
                title: "Review",
                WIP: 3,
                cards: [
                    {
                        id: uuidv4(),
                        title: "Create Board List",
                        description:
                            "Display the list of boards on the dashboard page",
                        label: "Urgent",
                        created: new Date().toLocaleDateString(),
                        dueDate: new Date("2021.11.11").toLocaleDateString(),
                        status: "Paused",
                        assignedTo: "Gábor",
                    },
                ],
            },
            {
                title: "Done",
                WIP: 3,
                cards: [
                    {
                        id: uuidv4(),
                        title: "Home Page",
                        description:
                            "Working on the Home page of our Kanban App",
                        label: "Approved",
                        created: new Date().toLocaleDateString(),
                        dueDate: new Date("2021.11.11").toLocaleDateString(),
                        status: "Completed",
                        assignedTo: "Matyi",
                    },
                ],
            },
        ],
    },
];
