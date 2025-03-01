import React, { lazy, Suspense } from "react";

// Lazy load the component
const LazyComponent = lazy(() => import("./LazyComponent"));

const LazyLoadingPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Lazy Loading & Suspense</h1>
            <p className="text-gray-600 mb-4">
                Below is a component that is loaded dynamically only when needed.
            </p>

            {/* Suspense with fallback UI */}
            <Suspense fallback={<div className="text-center text-gray-500">Loading component...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
};

export default LazyLoadingPage;
