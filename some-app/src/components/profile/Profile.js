import MyPosts from "./myposts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";

const Profile = ({ state, addPost }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts state={state} addPost={addPost} />
        </div>
    );
};

export default Profile;
