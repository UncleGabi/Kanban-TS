import React from "react";
import { useHistory } from "react-router";

const DidNotFound: React.FC = () => {
    const history = useHistory();
    const handleClick = (): void => {
        history.goBack();
    };

    const pageStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "black",
        height: "calc(100vh - 60px)",
    };

    return (
        <div style={pageStyle}>
            <img
                style={{ height: "300px" }}
                src="https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                alt="404 HTTP status"
            />
            <button
                onClick={handleClick}
                style={{
                    margin: "10px 70px",
                    padding: "5px 10px",
                    backgroundColor: "#BB1919",
                    color: "white",
                }}
            >
                Back
            </button>
        </div>
    );
};

export default DidNotFound;
