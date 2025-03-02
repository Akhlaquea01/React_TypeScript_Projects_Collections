import React, { useState } from "react";

const ControlledForm = () => {
    const [name, setName] = useState(""); // State stores input value

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted Name: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name} // Controlled by React
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;
