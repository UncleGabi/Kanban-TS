import React, { FC } from "react";

import "./Card.styles.scss";

interface IPropsType {
    label: string;
    title: string;
    status: string;
    dueDate: string;
    assignedTo: string;
}

const Card: FC<IPropsType> = ({
    label,
    title,
    status,
    dueDate,
    assignedTo,
}) => {
    return (
        <div className="card-content">
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
    );
};

export default Card;
