import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import BoardDataContextProvider from "./contexts/BoardDataContextProvider";

import Header from "./components/common/Header/Header.component";

import Boards from "./pages/Board.page";
import DidNotFound from "./pages/DidNotFound.page";
import Home from "./pages/Home.page";
import AddCard from "./components/AddCard/AddCard.component";

const App: React.FC = () => {
    return (
        <div className="App">
            <BoardDataContextProvider>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/boards/:boardID" component={Boards} />
                    <Route
                        exact
                        path="/boards/:boardID/:columnID/create-card"
                        component={AddCard}
                    />
                    <Route exact path="*" component={DidNotFound} />
                </Switch>
            </BoardDataContextProvider>
        </div>
    );
};

export default App;
