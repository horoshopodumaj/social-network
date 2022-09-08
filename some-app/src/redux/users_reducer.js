const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
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
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        default:
            return state;
    }
};

export let followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId,
    };
};

export let unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    };
};

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users,
    };
};

export default usersReducer;
