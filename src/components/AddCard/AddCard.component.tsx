import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { ParamType } from "../CardColumns/CardColumns.component";
import { BoardContext } from "../../contexts/BoardDataContextProvider";
import Button from "../common/Button/Button.component";
import InputField from "../common/InputField/InputField.component";

import "./AddCard.styles.scss";
import { FormControl, MenuItem, Select } from "@material-ui/core";

interface IProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    columnID: string;
}

const AddCard: FC<IProps> = ({ open, setOpen, columnID }): JSX.Element => {
    const { boardID } = useParams<ParamType>();
    const { addCard } = useContext(BoardContext);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [label, setLabel] = useState<string>("");
    const [dueDate, setDueDate] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [assignedTo, setAssignedTo] = useState<string>("");

    const currentRef = useRef<HTMLInputElement>(null);
    const dueDateRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        dueDateRef.current?.focus();
    }, [label]);

    useEffect(() => {
        currentRef.current?.focus();
    }, []);

    const fieldValues = [
        title,
        description,
        label,
        dueDate,
        status,
        assignedTo,
    ];

    const allFilled = fieldValues.filter((value) => value !== "").length === 6;

    const newCardData = {
        id: uuidv4(),
        title: title,
        description: description,
        created: new Date().toLocaleDateString(),
        dueDate: new Date(dueDate).toLocaleDateString(),
        label: label,
        status: status,
        assignedTo: assignedTo,
    };

    return (
        <div className="modal">
            <form className="form-container">
                <h1>New Card</h1>
                <div className="input-container">
                    <InputField
                        currentRef={currentRef}
                        id="title-input"
                        classes="input-field"
                        type="text"
                        handleChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        placeholder="Title"
                    />
                    <InputField
                        classes="input-field"
                        type="text"
                        handleChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        placeholder="Description"
                    />
                    <FormControl>
                        <Select
                            disableUnderline={true}
                            className="menu-item"
                            displayEmpty
                            defaultValue=""
                            onChange={(e) => {
                                setLabel(e.target.value as string);
                            }}
                        >
                            <MenuItem value="" disabled>
                                Select Label
                            </MenuItem>
                            <MenuItem value="Frontend">Frontend</MenuItem>
                            <MenuItem value="Backend">Backend</MenuItem>
                            <MenuItem value="QA">Quality Assurance</MenuItem>
                            <MenuItem value="Design">Design</MenuItem>
                        </Select>
                    </FormControl>
                    <InputField
                        currentRef={dueDateRef}
                        classes="input-field"
                        type="date"
                        handleChange={(e) => setDueDate(e.target.value)}
                        value={dueDate}
                        name="dueDate"
                        placeholder="Due Date"
                    />
                    <InputField
                        classes="input-field"
                        type="text"
                        handleChange={(e) => setStatus(e.target.value)}
                        value={status}
                        name="status"
                        placeholder="Status"
                    />
                    <InputField
                        classes="input-field"
                        type="text"
                        handleChange={(e) => setAssignedTo(e.target.value)}
                        value={assignedTo}
                        name="assignedTo"
                        placeholder="Assigned To"
                    />
                </div>
                <div className="btn-container">
                    <Button
                        handleClick={() => {
                            if (allFilled) {
                                addCard(boardID, columnID, newCardData);
                            } else {
                                alert("All fields are required");
                            }
                        }}
                        text="Add Card"
                        classes="add-card-btn"
                        type="submit"
                    />
                    <Button
                        handleClick={() => setOpen(!open)}
                        text="Back"
                        classes="cancel-btn"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddCard;
