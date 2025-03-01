import { useState, useEffect } from "react";

// Higher-Order Component that adds a loading state
const withLoading = (WrappedComponent, fetchData) => {
    return (props) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const getData = async () => {
                try {
                    const response = await fetchData();
                    setData(response);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
                setLoading(false);
            };
            getData();
        }, []);

        if (loading) {
            return <p className="text-center text-gray-500">Loading...</p>;
        }

        return <WrappedComponent data={data} {...props} />;
    };
};

export default withLoading;
