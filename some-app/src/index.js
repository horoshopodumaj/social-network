import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let dialogsData = [
    { name: "Jonh", id: "1" },
    { name: "Max", id: "2" },
    { name: "Valery", id: "3" },
    { name: "Diana", id: "4" },
    { name: "Maria", id: "5" },
    { name: "Ivan", id: "6" },
    { name: "Mark", id: "7" },
];

let messagesData = [
    { message: "Hi", id: "1" },
    { message: "How are you doing?", id: "2" },
    { message: "I am ok", id: "3" },
];

let postsData = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 10 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App
            dialogsData={dialogsData}
            messagesData={messagesData}
            postsData={postsData}
        />
    </React.StrictMode>
);
