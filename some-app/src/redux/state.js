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
        if (action.type === "ADD-POST") {
            let nextPost = {
                id: 3,
                message: this._state.profilePage.nextPostText,
                likesCount: 0,
            };
            this._state.profilePage.postsData.push(nextPost);
            this._callSubscruber(this._state);
            this.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: "" });
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.nextPostText = action.newText;
            this._callSubscruber(this._state);
        } else if (action.type === "ADD-MESSAGE") {
            let nextMessage = {
                message: this._state.dialogsPage.nextMessageText,
                id: 4,
            };
            this._state.dialogsPage.messagesData.push(nextMessage);
            this._callSubscruber(this._state);
            this.dispatch({ type: "UPDATE-NEW-MESSAGE", newMessage: "" });
        } else if (action.type === "UPDATE-NEW-MESSAGE") {
            this._state.dialogsPage.nextMessageText = action.newMessage;
            this._callSubscruber(this._state);
        }
    },
};

export let addPostActionCreator = () => {
    return {
        type: "ADD-POST",
    };
};

export let updatenewPostTextActionCreator = (text) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text,
    };
};

export default store;
