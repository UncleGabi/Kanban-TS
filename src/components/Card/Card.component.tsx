import React, { FC } from "react";

import "./Card.styles.scss";

const Card: FC = () => {
    return (
        <div className="card-content">
            <div className="content-header">
                <small className="label-style">label</small>
                <h3 className="card-header">title</h3>
            </div>
            <div className="content-footer">
                <small>status</small>
                <small>Due: Date</small>
                <small>Assigned to</small>
            </div>
        </div>
    );
};

export default Card;
