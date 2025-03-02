import React, { useRef } from "react";

const UncontrolledForm = () => {
    const nameRef = useRef(null); // Direct reference to input field

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted Name: ${nameRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={nameRef} /> {/* Uncontrolled */}
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UncontrolledForm;
