import React, { FC } from "react";
import { Cards } from "../../assets/boards";
import { useParams } from "react-router";
import { ParamType } from "../CardColumns/CardColumns.component";
import Card from "../Card/Card.component";
import Button from "../common/Button/Button.component";

import "./Column.styles.scss";
import { Link } from "react-router-dom";

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
            <div className="cardlist">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        label={card.label}
                        title={card.title}
                        status={card.status}
                        dueDate={card.dueDate}
                        assignedTo={card.assignedTo}
                    />
                ))}

                <Link to={`/boards/${boardID}/${id}/create-card`}>
                    <Button classes="button-style" text="Add New Card" />
                </Link>
            </div>
        </div>
    );
};

export default Column;
