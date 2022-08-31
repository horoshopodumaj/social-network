import MyPosts from "./myposts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";

const Profile = ({ postsData }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={postsData} />
        </div>
    );
};

export default Profile;
