const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 10 },
    ],
    nextPostText: "blablabla",
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                nextPostText: "",
                postsData: [
                    ...state.postsData,
                    {
                        id: 3,
                        message: state.nextPostText,
                        likesCount: 0,
                    },
                ],
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                nextPostText: action.newText,
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        default:
            return state;
    }
};

export let addPost = () => {
    return {
        type: ADD_POST,
    };
};

export let updatenewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};

export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    };
};

export default profileReducer;
