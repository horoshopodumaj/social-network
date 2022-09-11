import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/img/user.png";

class Users extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.pageSize
        );

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map((page) => {
                        return (
                            <button
                                className={
                                    this.props.currentPage === page
                                        ? s.selectedPage
                                        : ""
                                }
                                onClick={() => {
                                    this.props.setCurrentPage(page);
                                    console.log(page);
                                }}
                            >
                                {page}
                            </button>
                        );
                    })}
                </div>
                {this.props.users.map((user) => (
                    <div key={user.id} className={s.user__card}>
                        <div className={s.user__avatar}>
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
                                            this.props.unfollow(user.id);
                                        }}
                                    >
                                        Follow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            this.props.follow(user.id);
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                )}
                            </div>
                        </div>
                        <div>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;
