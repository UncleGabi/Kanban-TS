import React, { FC } from "react";
import { Cards } from "../../assets/boards";
import { useParams } from "react-router";
import { ParamType } from "../CardColumns/CardColumns.component";
import Card from "../Card/Card.component";
import Button from "../common/Button/Button.component";

import "./Column.styles.scss";
import { Link } from "react-router-dom";
import { Droppable } from "react-beautiful-dnd";

interface IPropsType {
    id: string;
    name: string;
    cards: Cards[] | [];
}

const Column: FC<IPropsType> = ({ id, name, cards }) => {
    const { boardID } = useParams<ParamType>();

    return (
        <div className="column">
            <h3 className="column-title">{name}</h3>
            <Droppable key={id} droppableId={id} type="COLUMN">
                {(droppableProvided) => (
                    <div
                        ref={droppableProvided.innerRef}
                        className="cardlist"
                        {...droppableProvided.droppableProps}
                    >
                        {cards.map((card, index) => (
                            <Card
                                key={card.id}
                                id={card.id}
                                index={index}
                                label={card.label}
                                title={card.title}
                                status={card.status}
                                dueDate={card.dueDate}
                                assignedTo={card.assignedTo}
                            />
                        ))}
                        {droppableProvided.placeholder}
                        <Link to={`/boards/${boardID}/${id}/create-card`}>
                            <Button
                                classes="button-style add-card-btn"
                                text="Add New Card"
                            />
                        </Link>
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
