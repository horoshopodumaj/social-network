import {
    addPostActionCreator,
    updatenewPostTextActionCreator,
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    // debugger;
    // let state = props.store.getState();
    let addPostPage = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let addChangePost = (text) => {
        props.store.dispatch(updatenewPostTextActionCreator(text));
    };

    return (
        <MyPosts
            state={props.store.profilePage}
            addPostPage={addPostPage}
            addChangePost={addChangePost}
        />
    );
};

export default MyPostsContainer;
