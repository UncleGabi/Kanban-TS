import React, { FC } from "react";

import "./InputField.styles.scss";

interface IPropsType {
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
    keyUpHandler: () => void;
    keyDownHandler: () => void;
    type: string;
    placeholder: string;
    id?: string;
}

const InputField: FC<IPropsType> = ({
    handleChange,
    keyUpHandler,
    keyDownHandler,
    type,
    placeholder,
}) => {
    return (
        <div className="form">
            <input
                id="board-name-input"
                className="input-form"
                onChange={handleChange}
                onKeyUp={(e) => {
                    if (e.key === "Enter") keyUpHandler();
                }}
                onKeyDown={(e) => {
                    if (e.key === "Escape") keyDownHandler();
                }}
                type={type}
                placeholder={placeholder}
                autoFocus
            />
        </div>
    );
};

export default InputField;
