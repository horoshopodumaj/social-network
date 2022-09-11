import { connect } from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountAC,
    setUsersActionCreator,
    unfollowActionCreator,
} from "../../redux/users_reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page));
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
