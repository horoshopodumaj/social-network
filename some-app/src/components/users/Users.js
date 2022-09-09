import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/img/user.png";

let Users = (props) => {
    if (props.users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                props.setUsers(response.data.items);
            });
    }
    return (
        <div>
            {props.users.map((user) => (
                <div key={user.id}>
                    <span>
                        <div>
                            <img
                                className={s.usersPhoto}
                                src={
                                    user.photos.small != null
                                        ? user.photos.small
                                        : userPhoto
                                }
                            />
                        </div>
                        <div>
                            {user.followed ? (
                                <button
                                    onClick={() => {
                                        props.unfollow(user.id);
                                    }}
                                >
                                    Follow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        props.follow(user.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
