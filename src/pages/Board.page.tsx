import React from "react";
import { DragDropContext, DragUpdate } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import { BoardContext } from "../contexts/BoardDataContextProvider";
import { useContext } from "react";

import CardColumns, {
    ParamType,
} from "../components/CardColumns/CardColumns.component";
import { BoardData, Sections } from "../assets/boards";

interface IProps {
    currentBoard: BoardData;
    currentColumn: Sections;
    fromIndex: number;
    toIndex: number;
}

const Boards: React.FC<IProps> = () => {
    const { handleDrop } = useContext(BoardContext);
    const { boardID } = useParams<ParamType>();

    const handleDragEnd = (data: DragUpdate) => {
        const { destination, source } = data;

        if (!destination) return;
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return;

        handleDrop(
            boardID,
            source.droppableId,
            source.index,
            destination.droppableId,
            destination.index
        );
    };

    return (
        <div className="boards-page">
            <DragDropContext onDragEnd={handleDragEnd}>
                <CardColumns />
            </DragDropContext>
        </div>
    );
};

export default Boards;
