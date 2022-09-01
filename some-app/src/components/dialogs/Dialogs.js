import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({ state }) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let newMessage = newMessageElement.current.value;
        console.log(newMessage);
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
                        ref={newMessageElement}
                        className={s.send_text}
                    ></textarea>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
