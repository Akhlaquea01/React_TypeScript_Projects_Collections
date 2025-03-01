import React from "react";

const LazyComponent = () => {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold">This is a Lazy Loaded Component</h2>
            <p className="text-gray-600">It was loaded dynamically using React.lazy and Suspense.</p>
        </div>
    );
};

export default LazyComponent;
