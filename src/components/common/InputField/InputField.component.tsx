import React, { FC } from "react";

import "./InputField.styles.scss";

interface IPropsType {
    classes?: string;
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string | number;
    keyUpHandler?: () => void;
    keyDownHandler?: () => void;
    type: string;
    name?: string;
    placeholder: string;
    id?: string;
    currentRef?: React.RefObject<HTMLInputElement>;
}

const InputField: FC<IPropsType> = ({
    classes,
    handleChange,
    value,
    keyUpHandler,
    keyDownHandler,
    type,
    name,
    placeholder,
    currentRef,
}) => {
    const handleOnKeyUp = () => {
        if (keyUpHandler) keyUpHandler();
    };

    const handleOnKeyDown = () => {
        if (keyDownHandler) keyDownHandler();
    };

    return (
        <div className="form">
            <input
                ref={currentRef}
                id="board-name-input"
                className={`input-form ${classes}`}
                onChange={handleChange}
                value={value}
                onKeyUp={(e) => {
                    if (e.key === "Enter") handleOnKeyUp();
                }}
                onKeyDown={(e) => {
                    if (e.key === "Escape") handleOnKeyDown();
                }}
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputField;
