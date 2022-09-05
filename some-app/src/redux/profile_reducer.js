const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let nextPost = {
                id: 3,
                message: state.nextPostText,
                likesCount: 0,
            };
            state.postsData.push(nextPost);
            state.nextPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.nextPostText = action.newText;
            return state;
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
