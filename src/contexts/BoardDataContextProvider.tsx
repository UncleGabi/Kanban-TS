import React, { createContext, useState, FC } from "react";
import { boardData, BoardData } from "../assets/boards";

type BoardContextType = {
    boards: BoardData[];
    addBoard: (board: BoardData) => void;
    getBoard: (id: string) => BoardData | null;
    addColumn: (boardId: string, title: string) => void;
};

const defaultContextData = {
    boards: boardData,
    addBoard: () => null,
    getBoard: () => null,
    addColumn: () => [],
};

export const BoardContext = createContext<BoardContextType>(defaultContextData);

const BoardListProvider: FC = ({ children }): JSX.Element => {
    const [boards, setBoards] = useState<BoardData[]>(
        defaultContextData.boards
    );

    const getBoard = (id: string) => {
        return boards.filter((board) => id === board.id)[0];
    };

    const addBoard = (board: BoardData) => {
        setBoards([...boards, board]);
    };

    const addColumn = (boardId: string, title: string) => {
        const currentBoard = getBoard(boardId);
        currentBoard.columns = [
            ...currentBoard.columns,
            {
                title,
                WIP: 3,
                cards: [],
            },
        ];
        console.log(currentBoard.columns);
    };

    return (
        <BoardContext.Provider
            value={{ boards, getBoard, addBoard, addColumn }}
        >
            {children}
        </BoardContext.Provider>
    );
};

export default BoardListProvider;
