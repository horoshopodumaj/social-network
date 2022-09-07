import {
    addPostActionCreator,
    updatenewPostTextActionCreator,
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.profilePage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPostPage: () => {
            dispatch(addPostActionCreator());
        },
        addChangePost: (text) => {
            dispatch(updatenewPostTextActionCreator(text));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
