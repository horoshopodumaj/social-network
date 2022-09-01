import Post from "./post/Post";
import React from "react";
import s from "./MyPosts.module.css";

const MyPosts = ({ state, addPost }) => {
    let newPostElement = React.createRef();

    let addPostPage = () => {
        let text = newPostElement.current.value;
        addPost(text);
        newPostElement.current.value = "";
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostPage}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {state.postsData.map((item) => (
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
