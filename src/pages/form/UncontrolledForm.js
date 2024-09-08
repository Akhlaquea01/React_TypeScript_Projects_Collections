import React, { useRef } from 'react';

function UncontrolledForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded-lg">
            <div>
                <label className="block font-bold mb-2">Name</label>
                <input
                    type="text"
                    ref={nameRef}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label className="block font-bold mb-2">Email</label>
                <input
                    type="email"
                    ref={emailRef}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your email"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Submit
            </button>
        </form>
    );
}

export default UncontrolledForm;
