import state, {
    addPost,
    updateNewPostText,
    addMessage,
    updateNewMessage,
} from "./redux/state";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(
    state,
    addPost,
    updateNewPostText,
    addMessage,
    updateNewMessage
);
