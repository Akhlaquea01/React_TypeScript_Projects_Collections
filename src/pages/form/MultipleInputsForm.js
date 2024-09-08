import React, { useState } from 'react';

function MultipleInputsForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded-lg">
            <div>
                <label className="block font-bold mb-2">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your first name"
                />
            </div>
            <div>
                <label className="block font-bold mb-2">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your last name"
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
            <div>
                <label className="block font-bold mb-2">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your password"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
                Submit
            </button>
        </form>
    );
}

export default MultipleInputsForm;
