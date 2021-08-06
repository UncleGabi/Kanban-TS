import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BoardData } from "../../assets/boards";
import { BoardContext } from "../../contexts/BoardDataContextProvider";
import BoardCard from "../BoardCard/BoardCard.component";
import CreateBoardInput from "../CreateBoardInput/CreateBoardInput.component";

import "./BoardList.styles.scss";

const BoardList: React.FC = () => {
    const { boards, reset } = useContext(BoardContext);

    const renderBoards = (): JSX.Element[] => {
        return boards.map((board: BoardData) => {
            const { id, name, date } = board;

            return (
                <Link key={id} to={`/boards/${id}`} className="title-section">
                    <BoardCard key={id} name={name} date={date} />
                </Link>
            );
        });
    };

    return (
        <div className="board-page">
            <div className="title-section">
                <h1>My Boards</h1>
                <button onClick={reset}>Reset</button>

                <CreateBoardInput />
            </div>

            <div className="board-list">{renderBoards()}</div>
        </div>
    );
};

export default BoardList;
