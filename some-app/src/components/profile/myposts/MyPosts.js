import Post from "./post/Post";
import React from "react";
import s from "./MyPosts.module.css";

const MyPosts = ({ state, dispatch }) => {
    let newPostElement = React.createRef();

    let addPostPage = () => {
        dispatch({ type: "ADD-POST" });
    };

    let onChangePost = () => {
        let text = newPostElement.current.value;
        let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
        dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onChangePost}
                        ref={newPostElement}
                        value={state.nextPostText}
                    />
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
