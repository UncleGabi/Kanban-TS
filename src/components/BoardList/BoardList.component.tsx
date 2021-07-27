import React, { useContext } from "react";
import { BoardData } from "../../assets/boards";
import { BoardContext } from "../../contexts/BoardData.context";
import BoardCard from "../BoardCard/BoardCard.component";
import CreateBoardInput from "../CreateBoardInput/CreateBoardInput.component";

import "./BoardList.styles.scss";

const BoardList: React.FC = () => {
    const { boards } = useContext(BoardContext);

    const renderBoards = (): JSX.Element[] => {
        return boards.map((board: BoardData) => {
            const { id, name, date } = board;
            return <BoardCard key={id} name={name} date={date} />;
        });
    };

    return (
        <div className="board-page">
            <div className="title-section">
                <h1>My Boards</h1>

                <CreateBoardInput />
            </div>

            <div className="board-list">{renderBoards()}</div>
        </div>
    );
};

export default BoardList;
