import React, { useRef } from "react";

const UseRefPage = () => {
    const inputRef = useRef(null); // Create a ref for the input field

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Focus the input field
        }
    };

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">useRef Example</h2>
            <input
                ref={inputRef}
                type="text"
                placeholder="Type something..."
                className="border border-gray-300 px-3 py-2 rounded-md"
            />
            <button
                className="ml-3 px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={focusInput}
            >
                Focus Input
            </button>
        </div>
    );
};

export default UseRefPage;
