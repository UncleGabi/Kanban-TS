import React, { useContext, FC } from "react";
import { useParams } from "react-router";
import { ParamType } from "../CardList/CardColumns.component";
import { BoardContext } from "../../contexts/BoardDataContextProvider";
import Card from "../Card/Card.component";

import "./Column.styles.scss";

const Column: FC = () => {
    const { boardID } = useParams<ParamType>();
    const { getBoard } = useContext(BoardContext);
    const currentBoard = getBoard(boardID);
    console.log(currentBoard);

    return (
        <div className="column">
            <h3 className="column-title">Column name</h3>
            <div className="cardlist">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Column;
