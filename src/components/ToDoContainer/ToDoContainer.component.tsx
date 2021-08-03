import React, { useContext, FC } from "react";
// import { useParams } from "react-router";
// import { BoardContext } from "../../contexts/BoardDataContextProvider";

// import "./ToDoContainer.styles.scss";

// interface ParamType {
//     boardID: string;
// }

// const ToDoContainer: FC = () => {
//     const { boardID } = useParams<ParamType>();
//     const { getBoard } = useContext(BoardContext);
//     const sections = getBoard(boardID)?.columns;

//     return (
//         <div className="card-container">
//             {sections?.map((section) => {
//                 const header = section.title;
//                 const content = section.cards[0];
//                 return (
//                     <div key={section.title} className="card-section">
//                         <h3 className="section-header">{header}</h3>
//                         <div key={content.id} className="card-content">
//                             <div className="content-header">
//                                 <small className="label-style">
//                                     {content.label}
//                                 </small>
//                                 <h3 className="card-header">{content.title}</h3>
//                             </div>
//                             <div className="content-footer">
//                                 <small>{content.status}</small>
//                                 <small>Due: {content.dueDate}</small>
//                                 <small>{content.assignedTo}</small>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default ToDoContainer;
