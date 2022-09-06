import MyPostsContainer from "./myposts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;
