import s from "./Users.module.css";

let Users = (props) => {
    return (
        <div>
            {props.users.map((user) => (
                <div key={user.id}>
                    <span>
                        <div>
                            <img className={s.usersPhoto} src={user.photoUrl} />
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
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
