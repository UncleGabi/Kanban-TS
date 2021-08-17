import React, { FC } from "react";

interface IProps {
    trigger: boolean;
    children?: React.ReactNode;
}

const Popup: FC<IProps> = (trigger, children): any => {
    return trigger ? (
        <div>
            <h1>Popup</h1>
            {children}
        </div>
    ) : (
        ""
    );
};

export default Popup;
