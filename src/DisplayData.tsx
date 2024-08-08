import React from "react";

interface DisplayDataProps {
    data?: { [key: string]: any };
}

const DisplayData: React.FC<DisplayDataProps> = ({ data }) => {
    if (data) {
        return (
            <div className="data-display">
                <h2>Submitted Data</h2>
                <ul className="data-list">
                    {Object.keys(data).map((key) => (
                        <li key={key} className="data-item">
                            <strong>{key}:</strong> {data[key]}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    return null;
};

export default DisplayData;
