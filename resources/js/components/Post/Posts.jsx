import Post from "./Post";

const Posts = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 ">
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    );
};

export default Posts;
