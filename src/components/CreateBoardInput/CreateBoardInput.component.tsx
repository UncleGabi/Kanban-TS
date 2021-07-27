import React, { useState } from "react";

import { useSnapshot } from "valtio";

import "./CreateBoardInput.styles.scss";

import store from "../../assets/boards";
import { Store } from "../../assets/boards";
import Button from "../common/Button/Button.component";

const CreateBoardInput: React.FC = () => {
    const [created, setCreated] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>("");
    const [error, setError] = useState<string>("");

    let state = useSnapshot<Store>(store);

    const handleCreate = (): void => {
        setCreated(!created);
    };

    const autoFocus = (): void => {
        const name_input: HTMLElement | null =
            document.querySelector("#board-name-input");
        name_input?.focus();
    };

    const updateBoardName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        let { newBoard } = state;
        newBoard = value;
        state = {
            ...state,
            newBoard,
        };

        value.length > 30
            ? setError("Only 30 characters allowed")
            : setError("");
    };

    const saveBoard = (): void => {
        const { newBoard } = state;

        if (!newBoard) {
            setError("Board name is required");
            autoFocus();
        } else if (newBoard.length > 30) {
            setError("Only 30 characters allowed");
            autoFocus();
        } else {
            setSuccess("Board saved");
            setTimeout(() => {
                state.addBoard(newBoard);
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
                        <input
                            id="board-name-input"
                            className="input-form"
                            onChange={updateBoardName}
                            onKeyUp={(e) => {
                                if (e.key === "Enter") saveBoard();
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Escape") cancelCreation();
                            }}
                            type="text"
                            placeholder="Board name.."
                            autoFocus
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
