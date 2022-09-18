const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress,
            };
        default:
            return state;
    }
};

export let follow = (userId) => {
    return {
        type: FOLLOW,
        userId,
    };
};

export let unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    };
};

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page,
    };
};

export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsersCount: count,
    };
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    };
};

export const toggleIsFollowingInProgress = (followingInProgress) => {
    return {
        type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
        followingInProgress,
    };
};

export default usersReducer;
