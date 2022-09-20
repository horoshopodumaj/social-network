import { Navigate } from "react-router-dom";
import MyPostsContainer from "./myposts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";

const Profile = (props) => {
    if (!props.isAuth) {
        return <Navigate to={"/login"} />;
    }
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
