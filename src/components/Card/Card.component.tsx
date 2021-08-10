import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";

import "./Card.styles.scss";

interface IPropsType {
    id: string;
    index: number;
    label: string;
    title: string;
    status: string;
    dueDate: string;
    assignedTo: string;
}

const Card: FC<IPropsType> = ({
    id,
    index,
    label,
    title,
    status,
    dueDate,
    assignedTo,
}) => {
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(draggableProvider) => (
                <div
                    ref={draggableProvider.innerRef}
                    className="card-content"
                    {...draggableProvider.draggableProps}
                    {...draggableProvider.dragHandleProps}
                >
                    <div className="content-header">
                        <small className="label-style">{label}</small>
                        <h3 className="card-header">{title}</h3>
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
