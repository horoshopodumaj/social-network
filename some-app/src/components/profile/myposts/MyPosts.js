import Post from "./post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
    let onPostPage = () => {
        props.addPost();
    };

    let onChangePost = (event) => {
        let text = event.target.value;
        props.updatenewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onChangePost}
                        value={props.state.nextPostText}
                    />
                </div>
                <div>
                    <button onClick={onPostPage}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.state.postsData.map((item) => (
                    <Post
                        message={item.message}
                        likesCount={item.likesCount}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyPosts;
