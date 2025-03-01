import { useState, useEffect } from "react";
import axios from "axios";

const ApiPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data using Fetch API
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
            if (!response.ok) throw new Error("Failed to fetch data");
            const result = await response.json();
            setData(result);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData([]);
        }
        setLoading(false);
    };

    // Fetch data using Axios
    const fetchWithAxios = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
            setData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData(); // Default fetch on page load
    }, []);

    return (
        <div className="flex flex-col items-center p-6">
            <h2 className="text-2xl font-bold mb-4">API Data Fetching</h2>

            <div className="flex gap-4 mb-4">
                <button
                    onClick={fetchData}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Fetch with Fetch API
                </button>
                <button
                    onClick={fetchWithAxios}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                    Fetch with Axios
                </button>
            </div>

            {loading && <p className="text-gray-700">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <ul className="w-full max-w-lg">
                {data.map((post) => (
                    <li key={post.id} className="p-4 border rounded-lg mb-2 bg-white shadow">
                        <h3 className="font-semibold">{post.title}</h3>
                        <p className="text-gray-700">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApiPage;
