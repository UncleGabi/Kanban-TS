import React from "react";

import "./Button.styles.scss";

export interface ButtonProps {
    classes?: string;
    text: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ handleClick, classes, text }) => {
    return (
        <div>
            <button onClick={handleClick} className={`${classes} button`}>
                {text}
            </button>
        </div>
    );
};

export default Button;
