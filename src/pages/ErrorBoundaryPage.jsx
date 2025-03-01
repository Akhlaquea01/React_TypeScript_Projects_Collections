import { useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const BuggyComponent = () => {
    const [throwError, setThrowError] = useState(false);

    if (throwError) {
        throw new Error("Oops! This is a test error.");
    }

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Click the button to trigger an error</h2>
            <button
                onClick={() => setThrowError(true)}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
                Trigger Error
            </button>
        </div>
    );
};

const ErrorBoundaryPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Error Boundaries in React</h1>
            <ErrorBoundary>
                <BuggyComponent />
            </ErrorBoundary>
        </div>
    );
};

export default ErrorBoundaryPage;
