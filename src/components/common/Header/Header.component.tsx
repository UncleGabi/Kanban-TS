import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./Header.styles.scss";

const Header: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const path = location.pathname;
    const homePage = path === "/";

    return (
        <div className="header">
            {!homePage && (
                <div onClick={() => history.goBack()}>
                    <ArrowBackIcon fontSize="large" className="arrow" />
                </div>
            )}
            <Link to="/" className="link">
                <h1 className="link">Kanban Board</h1>
            </Link>
        </div>
    );
};

export default Header;
