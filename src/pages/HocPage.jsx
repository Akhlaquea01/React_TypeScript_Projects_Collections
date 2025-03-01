import withLoading from "../hoc/withLoading";

const PostList = ({ data }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">HOC: Fetch Data with Loading</h2>
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

// Fetch function to get posts
const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    return response.json();
};

// Wrap PostList with HOC
const HocPage = withLoading(PostList, fetchPosts);

export default HocPage;
