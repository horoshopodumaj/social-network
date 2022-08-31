import DialogItem from "./dialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({ dialogsData, messagesData }) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((item) => (
                    <DialogItem name={item.name} id={item.id} />
                ))}
            </div>
            <div className={s.messages}>
                {messagesData.map((item) => (
                    <Message message={item.message} />
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
