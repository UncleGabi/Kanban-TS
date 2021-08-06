import React from "react";

import "./Button.styles.scss";

export interface ButtonProps {
    classes?: string;
    text: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit";
    keyUpHandler?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    handleClick,
    classes,
    text,
    type,
}) => {
    return (
        <div>
            <button
                onClick={handleClick}
                className={`${classes} button`}
                type={type}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
