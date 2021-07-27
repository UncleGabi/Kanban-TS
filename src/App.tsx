import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import { boardData, BoardData } from "./assets/boards";

import Header from "./components/common/Header/Header.component";
import { BoardContext } from "./contexts/BoardData.context";
import Boards from "./pages/Boards.page";
import DidNotFound from "./pages/DidNotFound.page";
import Home from "./pages/Home.page";

const App: React.FC = () => {
    const [boards, setBoards] = useState<BoardData[]>(boardData);

    return (
        <div className="App">
            <BoardContext.Provider value={{ boards, setBoards }}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/boards/:boardName" component={Boards} />
                    <Route exact path="*" component={DidNotFound} />
                </Switch>
            </BoardContext.Provider>
        </div>
    );
};

export default App;
