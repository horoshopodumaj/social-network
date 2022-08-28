import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New post</div>
            <Post />
            <Post />
        </div>
    );
};

export default MyPosts;
