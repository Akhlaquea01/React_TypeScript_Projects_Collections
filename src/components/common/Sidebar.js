import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white p-4">
            <nav>
                <ul>
                    <li className="mb-4">
                        <Link to="/" className="hover:text-gray-300">Introduction</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/class-components" className="hover:text-gray-300">Class Components</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/functional-components" className="hover:text-gray-300">Functional Components</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/event" className="hover:text-gray-300">Event</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/forms" className="hover:text-gray-300">Forms</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/hooks/usestate" className="hover:text-gray-300">useState Hook</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/hooks/useeffect" className="hover:text-gray-300">useEffect Hook</Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
