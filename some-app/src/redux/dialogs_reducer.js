const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
    messagesData: [
        { message: "Hi", id: 1 },
        { message: "How are you doing?", id: 2 },
        { message: "I am ok", id: 3 },
    ],
    nextMessageText: "hihihi",

    dialogsData: [
        { name: "Jonh", id: 1 },
        { name: "Max", id: 2 },
        { name: "Valery", id: 3 },
        { name: "Diana", id: 4 },
        { name: "Maria", id: 5 },
        { name: "Ivan", id: 6 },
        { name: "Mark", id: 7 },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                nextMessageText: "",
                messagesData: [
                    ...state.messagesData,
                    {
                        message: state.nextMessageText,
                        id: 4,
                    },
                ],
            };
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                nextMessageText: action.newMessage,
            };
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
