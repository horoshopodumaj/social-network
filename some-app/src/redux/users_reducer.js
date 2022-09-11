const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
                users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
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

export const setCurrentPageActionCreator = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page,
    };
};

export const setTotalUsersCountAC = (count) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsersCount: count,
    };
};

export default usersReducer;
