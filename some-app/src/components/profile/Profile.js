import MyPosts from "./myposts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";

const Profile = ({ state, dispatch }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts state={state} dispatch={dispatch} />
        </div>
    );
};

export default Profile;
