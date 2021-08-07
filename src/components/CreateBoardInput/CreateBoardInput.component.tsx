import React, { useState, useContext, useRef, useEffect } from "react";
import { v4 as uuid4 } from "uuid";

import "./CreateBoardInput.styles.scss";

import Button from "../common/Button/Button.component";
import { BoardContext } from "../../contexts/BoardDataContextProvider";
import { BoardData } from "../../assets/boards";
import InputField from "../common/InputField/InputField.component";

const CreateBoardInput: React.FC = () => {
    const [created, setCreated] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>("");
    const [boardName, setBoardName] = useState<string>("");
    const [error, setError] = useState<string>("");
    const addBoardInputRef = useRef<HTMLInputElement>(null);

    const { addBoard } = useContext(BoardContext);

    useEffect(() => {
        addBoardInputRef.current?.focus();
    }, [created]);

    const handleCreate = (): void => {
        setCreated(!created);
    };

    const setFocus = (): void => {
        addBoardInputRef.current?.focus();
    };

    const updateBoardName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setBoardName(value);

        value.length > 30
            ? setError("Only 30 characters allowed")
            : setError("");
    };

    const saveBoard = (): void => {
        const newBoard: BoardData = {
            id: uuid4(),
            name: boardName,
            date: new Date().toLocaleDateString(),
            columns: [],
        };

        if (!boardName) {
            setError("Board name is required");
            addBoardInputRef.current?.focus();
            setFocus();
        } else if (boardName.length > 30) {
            setError("Only 30 characters allowed");
            setFocus();
        } else {
            setSuccess("Board saved");
            setTimeout(() => {
                addBoard(newBoard);
                setCreated(!created);
                setSuccess("");
                setError("");
            }, 850);
        }
    };

    const cancelCreation = (): void => {
        setCreated(!created);
        setError("");
    };

    return (
        <div>
            {created ? (
                <div className="container">
                    <div className="form">
                        <InputField
                            currentRef={addBoardInputRef}
                            handleChange={updateBoardName}
                            keyUpHandler={saveBoard}
                            keyDownHandler={cancelCreation}
                            type="text"
                            placeholder="Board name..."
                            id="board-name-input"
                        />

                        <Button
                            handleClick={saveBoard}
                            classes="button-style"
                            text="Save board"
                        />
                        <Button
                            handleClick={cancelCreation}
                            classes="button-style cancel-btn"
                            text="Cancel"
                        />
                    </div>
                    <small className="error">{error}</small>
                    <small className="success">{success}</small>
                </div>
            ) : (
                <div>
                    <Button
                        handleClick={handleCreate}
                        classes="button-style"
                        text="Add New Board"
                    />
                </div>
            )}
        </div>
    );
};

export default CreateBoardInput;
