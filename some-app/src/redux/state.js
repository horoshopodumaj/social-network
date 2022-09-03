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
    getState() {
        return this._state;
    },
    addPost() {
        let nextPost = {
            id: 3,
            message: this._state.profilePage.nextPostText,
            likesCount: 0,
        };
        this._state.profilePage.postsData.push(nextPost);
        this._callSubscruber(this._state);
        this.updateNewPostText("");
    },
    updateNewPostText(newText) {
        this._state.profilePage.nextPostText = newText;
        this._callSubscruber(this._state);
    },
    addMessage() {
        let nextMessage = {
            message: this._state.dialogsPage.nextMessageText,
            id: 4,
        };
        this._state.dialogsPage.messagesData.push(nextMessage);
        this._callSubscruber(this._state);
        this.updateNewMessage("");
    },
    updateNewMessage(newMessage) {
        this._state.dialogsPage.nextMessageText = newMessage;
        this._callSubscruber(this._state);
    },
    subscribe(observer) {
        this._callSubscruber = observer;
    },
    _callSubscruber() {
        console.log("State changed");
    },
};

export default store;
