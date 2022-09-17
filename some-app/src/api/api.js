import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b30385df-cbab-4ee6-b2bb-6a3acf152e39",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const getUsers = (currentPage, pageSize) => {
    return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) => response.data);
};

export const followUser = (userId) => {
    return instance.post(`follow/${userId}`).then((response) => response.data);
};

export const unFollowUser = (userId) => {
    return instance
        .delete(`follow/${userId}`)
        .then((response) => response.data);
};

export const setUser = (userId) => {
    return instance.get(`profile/${userId}`).then((response) => response.data);
};
