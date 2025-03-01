import { useState, useEffect } from "react";

const UseEffectPage = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    // useEffect runs when 'count' changes
    useEffect(() => {
        setMessage(`Count updated: ${count}`);
    }, [count]); // Dependency array: runs when 'count' changes

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">useEffect Hook Example</h1>
            <p className="text-lg text-gray-700 mb-4">{message}</p>
            <p className="text-lg font-semibold mb-4">Current Count: {count}</p>

            <div className="space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    onClick={() => setCount(count - 1)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default UseEffectPage;
