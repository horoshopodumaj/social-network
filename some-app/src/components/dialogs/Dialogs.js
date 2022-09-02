import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({ state, addMessage, updateNewMessage }) => {
    let newMessageElement = React.createRef();

    let addMessageText = () => {
        addMessage();
    };

    let onChangeMessage = () => {
        let newMessage = newMessageElement.current.value;
        updateNewMessage(newMessage);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogsData.map((item) => (
                    <DialogItem name={item.name} id={item.id} />
                ))}
            </div>
            <div className={s.messages}>
                {state.messagesData.map((item) => (
                    <Message message={item.message} />
                ))}
                <div className={s.send_message}>
                    <textarea
                        onChange={onChangeMessage}
                        ref={newMessageElement}
                        className={s.send_text}
                        value={state.nextMessageText}
                    ></textarea>
                    <button onClick={addMessageText}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
