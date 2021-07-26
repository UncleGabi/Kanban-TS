import { proxy } from "valtio";
import { v4 as uuidv4 } from "uuid";

export interface BoardData {
    id: string;
    name: string;
    date: string;
}

export const boardData: BoardData[] = [
    {
        id: uuidv4(),
        name: "Project1",
        date: new Date("2021.07.23").toLocaleDateString(),
    },
    {
        id: uuidv4(),
        name: "Project2",
        date: new Date("2021.07.19").toLocaleDateString(),
    },
    {
        id: uuidv4(),
        name: "Project3",
        date: new Date("2021.07.15").toLocaleDateString(),
    },
    {
        id: uuidv4(),
        name: "Project4",
        date: new Date("2021.07.15").toLocaleDateString(),
    },
];

export interface Store {
    boards: BoardData[];
    newBoard: string;
    addBoard: (boardName: string) => void;
}

const store = proxy<Store>({
    boards: boardData,
    newBoard: "",
    addBoard: (boardName: string) => {
        store.boards = [
            ...store.boards,
            {
                id: uuidv4(),
                name: boardName,
                date: new Date().toLocaleDateString(),
            },
        ];
    },
});

export default store;
