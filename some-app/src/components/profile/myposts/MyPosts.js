import Post from "./post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" count="10" />
                <Post message="It's my first post" count="15" />
            </div>
        </div>
    );
};

export default MyPosts;
