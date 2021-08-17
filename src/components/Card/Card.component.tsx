import React, { FC, useContext } from "react";
import { BoardContext } from "../../contexts/BoardDataContextProvider";
import { Draggable } from "react-beautiful-dnd";

import DeleteIcon from "@material-ui/icons/Delete";

import "./Card.styles.scss";
import { useParams } from "react-router-dom";
import { ParamType } from "../CardColumns/CardColumns.component";

interface IPropsType {
    id: string;
    index: number;
    label: string;
    title: string;
    status: string;
    dueDate: string;
    assignedTo: string;
    columnID: string;
}

const Card: FC<IPropsType> = ({
    id,
    index,
    label,
    title,
    status,
    dueDate,
    assignedTo,
    columnID,
}) => {
    const { boardID } = useParams<ParamType>();
    const { removeCard } = useContext(BoardContext);

    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    className={`${
                        snapshot.draggingOver ? "dragged" : ""
                    } card-content`}
                    {...provided.draggableProps}
                >
                    <div className="content-header">
                        <div className="card-header">
                            <small className="label-style">{label}</small>
                            <DeleteIcon
                                onClick={() =>
                                    removeCard(boardID, columnID, id)
                                }
                                className="delete-icon"
                            />
                        </div>
                        <h3
                            className="card-header"
                            {...provided.dragHandleProps}
                        >
                            {title}
                        </h3>
                    </div>
                    <div className="content-footer">
                        <small>{status}</small>
                        <small>Due: {dueDate}</small>
                        <small>{assignedTo}</small>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Card;
