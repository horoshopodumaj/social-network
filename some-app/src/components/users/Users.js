import s from "./Users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                photoUrl:
                    "https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg",
                fullName: "Maria",
                status: "I am a boss",
                location: { city: "Moscow", country: "Russia" },
            },
            {
                id: 2,
                followed: true,
                photoUrl:
                    "https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg",
                fullName: "Diana",
                status: "I am fine",
                location: { city: "London", country: "Great Britain" },
            },
            {
                id: 3,
                followed: false,
                photoUrl:
                    "https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg",
                fullName: "Anna",
                status: "I like football",
                location: { city: "Oslo", country: "Norway" },
            },
        ]);
    }
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
