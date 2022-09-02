import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (
    state,
    addPost,
    updateNewPostText,
    addMessage,
    updateNewMessage
) => {
    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessage={updateNewMessage}
            />
        </React.StrictMode>
    );
};
