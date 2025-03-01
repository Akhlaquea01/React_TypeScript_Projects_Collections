import { Link } from "react-router-dom";

const features = [
    { name: "useState", path: "/use-state" },
    { name: "useEffect", path: "/use-effect" },
    { name: "Context API", path: "/context-api" },
    { name: "Forms", path: "/forms" },
    { name: "API Integration", path: "/api" },
    { name: "HOC (Higher-Order Components)", path: "/hoc" },
    { name: "Render Props", path: "/render-props" },
    { name: "Error Boundaries", path: "/error-boundary" },
    { name: "Lazy Loading", path: "/lazy-loading" },
    { name: "Memoization", path: "/memoization" },
    { name: "Portals", path: "/portals" },
    { name: "forward-ref", path: "/forward-ref" },
    { name: "use-ref", path: "/use-ref" },
    { name: "Use Reducer", path: "/use-reducer" },
    { name: "Use Imperative", path: "/use-imperative" },
    { name: "Custom Hook", path: "/custom-hook" },
];

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-900 text-white p-6">
                <h1 className="text-2xl font-bold mb-4">React Features</h1>
                <ul className="space-y-2">
                    {features.map((feature) => (
                        <li key={feature.path}>
                            <Link
                                to={feature.path}
                                className="block px-4 py-2 rounded hover:bg-gray-700 transition"
                            >
                                {feature.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <h2 className="text-3xl font-bold mb-4">Welcome to React Learning</h2>
                <p className="text-gray-700">
                    Select a feature from the sidebar to explore React concepts.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
