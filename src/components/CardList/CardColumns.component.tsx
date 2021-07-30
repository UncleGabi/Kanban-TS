import React, { useContext, FC } from "react";
import { useParams } from "react-router";
import { BoardContext } from "../../contexts/BoardDataContextProvider";

import Column from "../Column/Column.component";
import Button from "../common/Button/Button.component";

import "./CardColumns.styles.scss";

export interface ParamType {
    boardID: string;
}

const CardList: FC = () => {
    const { boardID } = useParams<ParamType>();
    const { getBoard, addColumn } = useContext(BoardContext);
    const currentBoard = getBoard(boardID);
    const columns = currentBoard?.columns;

    const renderCards = () => {
        return columns?.map((column) => <Column key={column.title} />);
    };

    return (
        <div>
            <h1 className="board-name">{currentBoard?.name}</h1>
            <div className="column-container">
                {renderCards()}

                <Button
                    handleClick={() => addColumn(boardID, "Project X")}
                    text="Add Column"
                    classes="add-column-btn"
                />
            </div>
        </div>
    );
};

export default CardList;
