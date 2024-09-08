import React, { useState } from 'react';

function ControlledForm() {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded-lg">
            <div>
                <label className="block font-bold mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label className="block font-bold mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your email"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
}

export default ControlledForm;
