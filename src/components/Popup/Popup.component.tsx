import React, { FC } from "react";

import "./Popup.styles.scss";

interface IProps {
    children: JSX.Element;
}

const Popup: FC<IProps> = ({ children }) => {
    return (
        <div className="popup-box">
            <div className="box">{children}</div>
        </div>
    );
};

export default Popup;
