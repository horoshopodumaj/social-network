import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let onMessageText = () => {
        props.addMessageText();
    };

    let onChangeMessage = (event) => {
        let newMessage = event.target.value;
        props.addChangeMessage(newMessage);
    };

    if (!props.isAuth) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogsData.map((item) => (
                    <DialogItem name={item.name} id={item.id} key={item.id} />
                ))}
            </div>
            <div className={s.messages}>
                {state.messagesData.map((item) => (
                    <Message message={item.message} key={item.id} />
                ))}
                <div className={s.send_message}>
                    <textarea
                        onChange={onChangeMessage}
                        className={s.send_text}
                        value={state.nextMessageText}
                    ></textarea>
                    <button onClick={onMessageText}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
