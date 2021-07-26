import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/common/Header/Header.component";
import Boards from "./pages/Boards.page";
import DidNotFound from "./pages/DidNotFound.page";
import Home from "./pages/Home.page";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/boards/:boardName" component={Boards} />
                <Route exact path="*" component={DidNotFound} />
            </Switch>
        </div>
    );
};

export default App;
