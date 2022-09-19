import { addPost, updatenewPostText } from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.profilePage,
    };
};

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updatenewPostText,
})(MyPosts);

export default MyPostsContainer;
