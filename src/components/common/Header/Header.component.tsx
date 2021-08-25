import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./Header.styles.scss";

const Header: React.FC = () => {
    const location = useLocation();
    const path = location.pathname;
    const homePage = path === "/";

    return (
        <div className="header">
            {!homePage && (
                <Link to="/">
                    <ArrowBackIcon fontSize="large" className="arrow" />
                </Link>
            )}
            <h1 className="link">Kanban Board</h1>
        </div>
    );
};

export default Header;
