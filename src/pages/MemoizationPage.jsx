import React, { useState, useMemo, useCallback } from "react";

// A slow function to simulate heavy computation
const slowFunction = (num) => {
    console.log("Running slow function...");
    for (let i = 10000000; i > 0; i--) { } // Reduce iterations
    return num * 2;
};



const MemoizationPage = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    // 🟢 useMemo: Caches the result of slowFunction
    const computedValue = useMemo(() => slowFunction(count), [count]);

    // 🟢 useCallback: Caches function reference
    const toggleOtherState = useCallback(() => {
        setOtherState((prev) => !prev);
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">React Memoization</h1>

            <p className="mb-2">Count: <span className="font-bold">{count}</span></p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                onClick={() => setCount(count + 1)}
            >
                Increment Count
            </button>

            <p className="mt-4">Computed Value (using useMemo): <span className="font-bold">{computedValue}</span></p>

            <div className="mt-4">
                <p>Other State: <span className="font-bold">{otherState.toString()}</span></p>
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={toggleOtherState}
                >
                    Toggle Other State
                </button>
            </div>
        </div>
    );
};

export default MemoizationPage;
