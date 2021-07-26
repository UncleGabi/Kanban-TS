import React from "react";
import { useSnapshot } from "valtio";
import store from "../../assets/boards";
import BoardCard from "../BoardCard/BoardCard.component";
import CreateBoardInput from "../CreateBoardInput/CreateBoardInput.component";

import "./BoardList.styles.scss";

const BoardList: React.FC = () => {
    const { boards } = useSnapshot(store);

    const renderBoards = (): JSX.Element[] => {
        return boards.map((board) => {
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
