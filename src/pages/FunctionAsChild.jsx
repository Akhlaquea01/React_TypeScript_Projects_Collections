import React from "react";

// Child component takes a function as children
const DataFetcher = ({ children }) => {
    const data = ["Apple", "Banana", "Orange"];
    return <div>{children(data)}</div>
};

const FunctionAsChild = () => {
    return (
        <DataFetcher>
            {(items) => (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </DataFetcher>
    );
};

export default FunctionAsChild;
