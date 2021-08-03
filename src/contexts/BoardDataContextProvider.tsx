import React, { createContext, useState, FC } from "react";
import { boardData, BoardData, Cards, Sections } from "../assets/boards";

type BoardContextType = {
    boards: BoardData[];
    addBoard: (board: BoardData) => void;
    getBoard: (id: string) => { board: BoardData; columns: Sections[] } | null;
    addColumn: (boardId: string, newColumn: Sections) => void;
    addCard: (boardId: string, newCard: Cards) => void;
};

const defaultContextData = {
    boards: boardData,
    addBoard: () => null,
    getBoard: () => null,
    addColumn: () => [],
    addCard: () => [],
};

export const BoardContext = createContext<BoardContextType>(defaultContextData);

const BoardListProvider: FC = ({ children }) => {
    const [boards, setBoards] = useState<BoardData[]>(
        defaultContextData.boards
    );

    const getBoard = (id: string) => {
        const board = boards.filter((board) => id === board.id)[0];
        const columns = board["columns"];

        return {
            board,
            columns,
        };
    };

    const addBoard = (board: BoardData) => {
        setBoards([...boards, board]);
    };

    const addColumn = (boardId: string, newColumn: Sections) => {
        const updatedBoard = boards.map((board) => {
            return board.id === boardId
                ? { ...board, columns: [...board.columns, newColumn] }
                : board;
        });

        setBoards(updatedBoard);
    };

    const addCard = (boardId: string, newCard: Cards) => {
        // ki szell szedni az oszlop nevét (title) és oda belerakni az új kártyát
        boards.map((board) => {
            if (board.id === boardId) {
                const columns = board.columns;
                columns.map((board) => {
                    board.cards = [...board.cards, newCard];
                });
            }
        });
    };

    return (
        <BoardContext.Provider
            value={{ boards, getBoard, addBoard, addColumn, addCard }}
        >
            {children}
        </BoardContext.Provider>
    );
};

export default BoardListProvider;
