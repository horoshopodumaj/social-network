import { rerenderEntireTree } from "../render";

let state = {
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
};

export let addPost = () => {
    let nextPost = {
        id: 3,
        message: state.profilePage.nextPostText,
        likesCount: 0,
    };
    state.profilePage.postsData.push(nextPost);
    rerenderEntireTree(
        state,
        addPost,
        updateNewPostText,
        addMessage,
        updateNewMessage
    );
    updateNewPostText("");
};

export let updateNewPostText = (newText) => {
    state.profilePage.nextPostText = newText;
    rerenderEntireTree(
        state,
        addPost,
        updateNewPostText,
        addMessage,
        updateNewMessage
    );
};

export let addMessage = () => {
    let nextMessage = {
        message: state.dialogsPage.nextMessageText,
        id: 4,
    };
    state.dialogsPage.messagesData.push(nextMessage);
    rerenderEntireTree(
        state,
        addPost,
        updateNewPostText,
        addMessage,
        updateNewMessage
    );
    updateNewMessage("");
};

export let updateNewMessage = (newMessage) => {
    state.dialogsPage.nextMessageText = newMessage;
    rerenderEntireTree(
        state,
        addPost,
        updateNewPostText,
        addMessage,
        updateNewMessage
    );
};

export default state;
