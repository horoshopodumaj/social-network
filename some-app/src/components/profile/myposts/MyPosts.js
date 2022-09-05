import Post from "./post/Post";
import React from "react";
import s from "./MyPosts.module.css";
import {
    addPostActionCreator,
    updatenewPostTextActionCreator,
} from "../../../redux/state";

const MyPosts = ({ state, dispatch }) => {
    let addPostPage = () => {
        dispatch(addPostActionCreator());
    };

    let onChangePost = (event) => {
        let text = event.target.value;
        dispatch(updatenewPostTextActionCreator(text));
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onChangePost}
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
