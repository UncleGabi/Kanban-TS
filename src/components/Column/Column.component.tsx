import React, { FC, useContext, useRef } from "react";
import { BoardContext } from "../../contexts/BoardDataContextProvider";
import { Cards } from "../../assets/boards";
import { useParams } from "react-router";
import { ParamType } from "../CardColumns/CardColumns.component";
import Card from "../Card/Card.component";
import Button from "../common/Button/Button.component";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

import "./Column.styles.scss";
import { Link } from "react-router-dom";
import { Droppable } from "react-beautiful-dnd";
import { useState } from "react";

interface IPropsType {
    id: string;
    name: string;
    wip: number;
    cards: Cards[] | [];
}

const Column: FC<IPropsType> = ({ id, name, cards }) => {
    const { boardID } = useParams<ParamType>();
    const { modifyWIP } = useContext(BoardContext);
    const [edit, setEdit] = useState<boolean>(false);
    const [WIP, setWIP] = useState<number>(0);
    const wipRef = useRef<HTMLInputElement>(null);

    const handleEdit = () => {
        setWIP(0);
        setEdit(!edit);
        wipRef.current?.focus();
    };

    const handleWIPModification = () => {
        if (!WIP) return;

        modifyWIP(boardID, id, WIP);
        setEdit(!edit);
        wipRef.current?.blur();
    };

    return (
        <div className="column">
            <div className="column-header">
                <h3 className="column-title">{name}</h3>
                <div className="edit">
                    <input
                        ref={wipRef}
                        onChange={(e) => setWIP(parseInt(e.target.value))}
                        value={WIP}
                        type="number"
                        className={`${edit ? "edit" : ""}`}
                        placeholder="WIP"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleWIPModification();
                        }}
                        onKeyUp={(e) => {
                            if (e.key === "Escape") {
                                wipRef.current?.blur();
                                setEdit(!edit);
                            }
                        }}
                    />
                    {!edit ? (
                        <EditIcon className="edit-icon" onClick={handleEdit} />
                    ) : (
                        <DoneIcon
                            className="edit-icon"
                            onClick={handleWIPModification}
                        />
                    )}
                </div>
            </div>
            <Droppable key={id} droppableId={id} type="COLUMN">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        className="cardlist"
                        {...provided.droppableProps}
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
                                columnID={id}
                            />
                        ))}
                        {provided.placeholder}
                        <Link to={`/boards/${boardID}/${id}/create-card`}>
                            <Button
                                classes="button-style add-card-btn"
                                text="Add New Card"
                            />
                        </Link>
                    </div>
                )}
            </Droppable>
            {/* {modal && <AddCard modal={modal} setModal={setModal} />} */}
        </div>
    );
};

export default Column;
