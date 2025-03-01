import DataFetcher from "../components/DataFetcher";

const RenderPropsPage = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Render Props: Fetch Data Dynamically</h2>

            <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5"
                render={({ data, loading }) => (
                    loading ? (
                        <p className="text-center text-gray-500">Loading...</p>
                    ) : (
                        <ul className="w-full max-w-lg">
                            {data.map((user) => (
                                <li key={user.id} className="p-4 border rounded-lg mb-2 bg-white shadow">
                                    <h3 className="font-semibold">{user.name}</h3>
                                    <p className="text-gray-700">{user.email}</p>
                                </li>
                            ))}
                        </ul>
                    )
                )}
            />
        </div>
    );
};

export default RenderPropsPage;
