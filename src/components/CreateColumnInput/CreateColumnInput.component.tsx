import React, { FC, useContext, useEffect, useRef, useState } from "react";
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
    const addColumnInputRef = useRef<HTMLInputElement>(null);

    const { addColumn } = useContext(BoardContext);

    useEffect(() => {
        addColumnInputRef.current?.focus();
    }, [created]);

    const handleCreate = (): void => {
        setCreated(!created);
        setColumnName("");
        setError("");
    };

    const setFocus = (): void => {
        addColumnInputRef.current?.focus();
    };

    const updateColumnName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;

        if (value) setError("");

        setColumnName(value);
    };

    const saveColumn = () => {
        let numberOfWIPs = prompt("No. of WIPs: ", "0") || "";

        while (!parseInt(numberOfWIPs)) {
            numberOfWIPs = prompt("Please, enter a number like: ", "3") || "";
        }

        const newColumn: Sections = {
            id: uuidv4(),
            title: columnName,
            WIP: parseInt(numberOfWIPs) || 3,
            cards: [],
        };

        if (!columnName) {
            setError("Column name is required");
            setFocus();
        } else {
            addColumn(boardID, newColumn);
            handleCreate();
        }

        console.log(newColumn);
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
                            currentRef={addColumnInputRef}
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
