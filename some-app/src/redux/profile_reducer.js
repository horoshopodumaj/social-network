const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 10 },
    ],
    nextPostText: "blablabla",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let nextPost = {
                id: 3,
                message: state.nextPostText,
                likesCount: 0,
            };
            let stateCopy = { ...state };
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(nextPost);
            stateCopy.nextPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.nextPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export let addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export let updatenewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};

export default profileReducer;
