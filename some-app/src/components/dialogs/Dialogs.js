import DialogItem from "./dialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({ state }) => {
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
            </div>
        </div>
    );
};

export default Dialogs;
