import React, { FC, useContext, useState } from "react";
import { useParams } from "react-router";
import { ParamType } from "../CardColumns/CardColumns.component";
import { v4 as uuidv4 } from "uuid";
import { Sections } from "../../assets/boards";
import { BoardContext } from "../../contexts/BoardDataContextProvider";
import Button from "../common/Button/Button.component";
import InputField from "../common/InputField/InputField.component";

import "./CreateColumnInput.styles.scss";

const CreateColumnInput: FC = () => {
    const { boardID } = useParams<ParamType>();
    const [created, setCreated] = useState<boolean>(false);
    const [columnName, setColumnName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const { addColumn } = useContext(BoardContext);

    const handleCreate = (): void => {
        setCreated(!created);
        setColumnName("");
        setError("");
    };

    const setFocus = (): void => {
        const name_input: HTMLElement | null =
            document.querySelector("#column-name-input");
        name_input?.focus();
    };

    const updateColumnName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;

        setColumnName(value);
    };

    const saveColumn = () => {
        const newColumn: Sections = {
            id: uuidv4(),
            title: columnName,
            WIP: 3,
            cards: [],
        };

        if (!columnName) {
            setError("Column name is required");
            setFocus();
        } else {
            addColumn(boardID, newColumn);
            handleCreate();
        }
    };

    const cancelCreation = () => {
        handleCreate();
    };

    return (
        <div>
            {created ? (
                <div className="container">
                    <div className="form">
                        <InputField
                            handleChange={updateColumnName}
                            keyUpHandler={saveColumn}
                            keyDownHandler={cancelCreation}
                            type="text"
                            placeholder="Column name..."
                            id="column-name-input"
                        />

                        <Button
                            handleClick={saveColumn}
                            classes="button-style"
                            text="Save column"
                        />
                        <Button
                            handleClick={cancelCreation}
                            classes="button-style cancel-btn"
                            text="Cancel"
                        />
                    </div>
                    <small className="error">{error}</small>
                </div>
            ) : (
                <div className="container">
                    <Button
                        handleClick={handleCreate}
                        classes="button-style"
                        text="Add New Column"
                    />
                </div>
            )}
        </div>
    );
};

export default CreateColumnInput;
