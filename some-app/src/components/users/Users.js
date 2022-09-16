import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = curP - 5 < 0 ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
        <div>
            <div>
                {slicedPages.map((page) => {
                    return (
                        <button
                            className={
                                props.currentPage === page ? s.selectedPage : ""
                            }
                            onClick={() => {
                                props.onPageChanged(page);
                            }}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>
            {props.users.map((user) => (
                <div key={user.id} className={s.user__card}>
                    <div className={s.user__avatar}>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img
                                    className={s.usersPhoto}
                                    src={
                                        user.photos.small != null
                                            ? user.photos.small
                                            : userPhoto
                                    }
                                />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ? (
                                <button
                                    onClick={() => {
                                        axios
                                            .delete(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY":
                                                            "b30385df-cbab-4ee6-b2bb-6a3acf152e39",
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.unfollow(user.id);
                                                }
                                                console.log(response);
                                            });
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        axios
                                            .post(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY":
                                                            "b30385df-cbab-4ee6-b2bb-6a3acf152e39",
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.follow(user.id);
                                                }
                                                console.log(response);
                                            });
                                    }}
                                >
                                    Follow
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
};

export default Users;
