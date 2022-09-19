import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b30385df-cbab-4ee6-b2bb-6a3acf152e39",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
    followUser(userId) {
        return instance
            .post(`follow/${userId}`)
            .then((response) => response.data);
    },
    unFollowUser(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then((response) => response.data);
    },
    setUser(userId) {
        return instance
            .get(`profile/${userId}`)
            .then((response) => response.data);
    },

    setAuthUser() {
        return instance.get("auth/me").then((response) => response.data);
    },
};
