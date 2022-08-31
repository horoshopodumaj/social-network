import s from "./Post.module.css";

const Post = ({ message, likesCount }) => {
    return (
        <div className={s.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511862_19.jpg" />
            {message}
            <div>
                <span>{likesCount} Like</span>
            </div>
        </div>
    );
};

export default Post;
