import {
    addPostActionCreator,
    updatenewPostTextActionCreator,
} from "../../../redux/profile_reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPostPage = () => {
                    store.dispatch(addPostActionCreator());
                };

                let addChangePost = (text) => {
                    store.dispatch(updatenewPostTextActionCreator(text));
                };
                return (
                    <MyPosts
                        state={state.profilePage}
                        addPostPage={addPostPage}
                        addChangePost={addChangePost}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
