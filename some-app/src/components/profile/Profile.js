import MyPosts from "./myposts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";

const Profile = ({ state, addPost, updateNewPostText }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                state={state}
                addPost={addPost}
                nextPostText={state.nextPostText}
                updateNewPostText={updateNewPostText}
            />
        </div>
    );
};

export default Profile;
