import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi, how are you?", likesCount: 15 },
                { id: 2, message: "It's my first post", likesCount: 10 },
            ],
            nextPostText: "blablabla",
        },
        dialogsPage: {
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
        },
    },
    _callSubscruber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscruber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );

        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        );

        this._callSubscruber(this._state);
    },
};

export default store;
