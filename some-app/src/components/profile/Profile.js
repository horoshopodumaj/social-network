import MyPosts from "./myposts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";

const Profile = ({ state }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts state={state} />
        </div>
    );
};

export default Profile;
