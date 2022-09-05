const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let nextMessage = {
                message: state.nextMessageText,
                id: 4,
            };
            state.messagesData.push(nextMessage);
            state.nextMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE:
            state.nextMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
};

export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    };
};

export let updateNewMessageActionCreator = (newMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: newMessage,
    };
};
export default dialogsReducer;
