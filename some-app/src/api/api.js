import * as axios from "axios";

export const getUsers = (currentPage, pageSize) => {
    return axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            { withCredentials: true }
        )
        .then((response) => response.data);
};

export const followUser = (userId) => {
    return axios
        .post(
            `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {},
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "b30385df-cbab-4ee6-b2bb-6a3acf152e39",
                },
            }
        )
        .then((response) => response.data);
};

export const unFollowUser = (userId) => {
    return axios
        .delete(
            `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "b30385df-cbab-4ee6-b2bb-6a3acf152e39",
                },
            }
        )
        .then((response) => response.data);
};

export const setUser = (userId) => {
    return axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response) => response.data);
};
