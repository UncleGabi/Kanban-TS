import React from "react";

import "./BoardCard.styles.scss";

interface BoardData {
    name: string;
    date: string;
}

const BoardCard: React.FC<BoardData> = ({ name, date }) => {
    return (
        <div className="board-card">
            <h3>{name}</h3>
            <p>
                <span>created on </span> {date}
            </p>
        </div>
    );
};

export default BoardCard;
