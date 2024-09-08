import React, { useState } from 'react';

function AllEventsComponent() {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [keyPressed, setKeyPressed] = useState('');
    const [clipboardData, setClipboardData] = useState('');

    // Handle button click
    const handleClick = () => {
        alert('Button clicked!');
    };

    // Handle input change
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // Handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted with input: ${inputValue}`);
    };

    // Handle input focus
    const handleFocus = () => {
        setIsFocused(true);
    };

    // Handle input blur
    const handleBlur = () => {
        setIsFocused(false);
    };

    // Handle key press
    const handleKeyPress = (event) => {
        setKeyPressed(event.key);
        console.log(`Key pressed: ${event.key}`);
    };

    // Handle key down
    const handleKeyDown = (event) => {
        console.log(`Key down: ${event.key}`);
    };

    // Handle key up
    const handleKeyUp = (event) => {
        console.log(`Key up: ${event.key}`);
    };

    // Handle paste event
    const handlePaste = (event) => {
        setClipboardData(event.clipboardData.getData('Text'));
        console.log('Pasted content:', event.clipboardData.getData('Text'));
    };

    // Handle copy event
    const handleCopy = () => {
        alert('Content copied!');
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">React Event Handling</h2>

            {/* Click Event */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Click Event</h3>
                <button
                    onClick={handleClick}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Click Me
                </button>
            </div>

            {/* Change Event */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Change Event</h3>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded focus:outline-none"
                    placeholder="Type something..."
                />
                <p>Current input value: {inputValue}</p>
            </div>

            {/* Focus & Blur Events */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Focus & Blur Events</h3>
                <input
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded ${isFocused ? 'border-green-500' : 'border-gray-300'
                        }`}
                    placeholder="Focus and blur me"
                />
                <p>Input is {isFocused ? 'focused' : 'not focused'}</p>
            </div>

            {/* Form Submit Event */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Form Submit Event</h3>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none"
                        placeholder="Enter text to submit"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* MouseOver Event */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">MouseOver Event</h3>
                <div
                    onMouseOver={() => alert('Mouse is over!')}
                    className="p-4 bg-yellow-300 rounded text-center cursor-pointer hover:bg-yellow-400"
                >
                    Hover over me!
                </div>
            </div>

            {/* Double Click Event */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Double Click Event</h3>
                <button
                    onDoubleClick={() => alert('Button double-clicked!')}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Double-Click Me
                </button>
            </div>

            {/* Clipboard Events */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Clipboard Events</h3>
                <input
                    type="text"
                    onPaste={handlePaste}
                    onCopy={handleCopy}
                    className="w-full px-4 py-2 border rounded focus:outline-none"
                    placeholder="Paste or copy something"
                />
                <p>Pasted content: {clipboardData}</p>
            </div>

            {/* Key Events */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Key Events</h3>
                <input
                    type="text"
                    onKeyPress={handleKeyPress}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    className="w-full px-4 py-2 border rounded focus:outline-none"
                    placeholder="Press any key"
                />
                <p>Last key pressed: {keyPressed}</p>
            </div>
        </div>
    );
}

export default AllEventsComponent;
