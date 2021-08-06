import React, { useContext, FC } from "react";
import { useParams } from "react-router";
import { BoardContext } from "../../contexts/BoardDataContextProvider";

import Column from "../Column/Column.component";
import CreateColumnInput from "../CreateColumnInput/CreateColumnInput.component";

import "./CardColumns.styles.scss";

export interface ParamType {
    boardID: string;
    columnID: string;
}

const CardColumns: FC = () => {
    const { boardID } = useParams<ParamType>();
    const { getBoard } = useContext(BoardContext);

    const currentBoard = getBoard(boardID)?.board;
    const columnList = getBoard(boardID)?.columns;

    const renderColumns = () => {
        return columnList?.map((column) => (
            <Column
                key={column.id}
                id={column.id}
                name={column.title}
                cards={column.cards}
            />
        ));
    };

    return (
        <div>
            <h1 className="board-name">{currentBoard?.name}</h1>
            <div className="column-container">
                {renderColumns()}

                <CreateColumnInput />
            </div>
        </div>
    );
};

export default CardColumns;
