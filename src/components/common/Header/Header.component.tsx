import React from "react";
import { Link } from "react-router-dom";

import "./Header.styles.scss";

const Header: React.FC = () => {
    return (
        <div>
            <Link to="/" className="header">
                <h1>Kanban Board</h1>
            </Link>
        </div>
    );
};

export default Header;
