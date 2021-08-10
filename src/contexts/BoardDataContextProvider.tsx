import React, { createContext, useState, FC } from "react";

import {
    boardData,
    BoardData,
    Cards,
    getBoardStorage,
    Sections,
    setBoardStorage,
} from "../assets/boards";

type BoardContextType = {
    boards: BoardData[];
    addBoard: (newBoard: BoardData) => void;
    getBoard: (id: string) => { board: BoardData; columns: Sections[] } | null;
    addColumn: (boardId: string, newColumn: Sections) => void;
    addCard: (
        boardId: string,
        colName: string,
        newCard: Cards,
        index?: number
    ) => void;
    handleDrop: (
        boardID: string,
        fromColID: string,
        cardIndex: number,
        toColID: string,
        toIndex: number
    ) => void;
    reset: () => void;
};

const defaultContextData = {
    boards: getBoardStorage(),
    addBoard: () => null,
    getBoard: () => null,
    addColumn: () => [],
    addCard: () => [],
    handleDrop: () => null,
    reset: () => null,
};

export const BoardContext = createContext<BoardContextType>(defaultContextData);

const BoardListProvider: FC = ({ children }) => {
    const [boards, setBoards] = useState<BoardData[]>(
        defaultContextData.boards
    );

    const getBoard = (id: string) => {
        const boardList = getBoardStorage();
        const board = boardList.filter((board) => id === board.id)[0];
        const columns = board["columns"];
        return {
            board,
            columns,
        };
    };

    const addBoard = (newBoard: BoardData) => {
        setBoards([...boards, newBoard]);
        setBoardStorage([...boards, newBoard]);
    };

    const addColumn = (boardId: string, newColumn: Sections) => {
        const updatedBoard = boards.map((board) => {
            return board.id === boardId
                ? { ...board, columns: [...board.columns, newColumn] }
                : board;
        });

        setBoards(updatedBoard);
        setBoardStorage(updatedBoard);
    };

    const addCard = (boardId: string, colID: string, newCard: Cards) => {
        const currentBoard = boards.filter((board) => board.id === boardId)[0];
        const updatedColumns = currentBoard.columns.map((column) => {
            return column.id === colID
                ? { ...column, cards: [...column.cards, newCard] }
                : column;
        });
        const updatedBoard = { ...currentBoard, columns: updatedColumns };
        const updatedBoardList = boards.map((board) => {
            return board.id === boardId ? updatedBoard : board;
        });

        setBoards(updatedBoardList);
        setBoardStorage(updatedBoardList);
    };

    const handleDrop = (
        boardID: string,
        fromColID: string,
        fromCardIndex: number,
        toColumnID: string,
        toCardIndex: number
    ) => {
        const currentBoard = boards.filter((board) => board.id === boardID)[0];
        const fromColumn = currentBoard.columns.filter(
            (column) => column.id === fromColID
        )[0];
        const cardCopy = fromColumn.cards.filter(
            (card, index) => index === fromCardIndex
        )[0];
        const toColumn = currentBoard.columns.filter(
            (column) => column.id === toColumnID
        );

        fromColumn.cards.splice(fromCardIndex, 1);
        toColumn[0].cards.splice(toCardIndex, 0, cardCopy);

        const updatedBoardList = boards.map((board) => {
            return board.id === boardID ? currentBoard : board;
        });
        setBoards(updatedBoardList);
        setBoardStorage(updatedBoardList);
    };

    const reset = () => {
        setBoards(boardData);
        setBoardStorage(boardData);
    };

    return (
        <BoardContext.Provider
            value={{
                boards,
                getBoard,
                addBoard,
                addColumn,
                addCard,
                handleDrop,
                reset,
            }}
        >
            {children}
        </BoardContext.Provider>
    );
};

export default BoardListProvider;
