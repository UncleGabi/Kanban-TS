import React, { FC, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Cards } from "../../assets/boards";
import { useParams } from "react-router";
import { ParamType } from "../CardList/CardColumns.component";
import { BoardContext } from "../../contexts/BoardDataContextProvider";
import Card from "../Card/Card.component";
import Button from "../common/Button/Button.component";

import "./Column.styles.scss";

interface IPropsType {
    name: string;
    cards: Cards[] | [];
}

const Column: FC<IPropsType> = ({ name, cards }) => {
    const { boardID } = useParams<ParamType>();
    const { addCard } = useContext(BoardContext);

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

                <Button
                    handleClick={() =>
                        addCard(boardID, {
                            id: uuidv4(),
                            assignedTo: "Gábor",
                            created: new Date().toLocaleDateString(),
                            description: "Trying to add a new card",
                            dueDate: new Date(
                                "2021.12.31"
                            ).toLocaleDateString(),
                            label: "Try",
                            status: "We'll see",
                            title: "Adding a new card",
                        })
                    }
                    classes="button-style"
                    text="Add New Card"
                />
            </div>
        </div>
    );
};

export default Column;
