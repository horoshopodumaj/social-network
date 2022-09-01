let state = {
    profilePage: {
        postsData: [
            { id: 1, message: "Hi, how are you?", likesCount: 15 },
            { id: 2, message: "It's my first post", likesCount: 10 },
        ],
    },
    dialogsPage: {
        messagesData: [
            { message: "Hi", id: 1 },
            { message: "How are you doing?", id: 2 },
            { message: "I am ok", id: 3 },
        ],

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

export let addPost = (postMessage) => {
    let nextPost = {
        id: 3,
        message: postMessage,
        likesCount: 0,
    };

    state.profilePage.postsData.push(nextPost);
};

export default state;
