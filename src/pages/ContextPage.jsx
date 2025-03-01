import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContextPage = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            className={`flex flex-col items-center justify-center h-screen ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
                }`}
        >
            <h1 className="text-3xl font-bold mb-4">Context API Example</h1>
            <p className="text-lg mb-4">Current Theme: {theme}</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </div>
    );
};

export default ContextPage;
