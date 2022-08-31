import DialogItem from "./dialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        { name: "Jonh", id: "1" },
        { name: "Max", id: "2" },
        { name: "Valery", id: "3" },
        { name: "Diana", id: "4" },
        { name: "Maria", id: "5" },
        { name: "Ivan", id: "6" },
        { name: "Mark", id: "7" },
    ];
    let postsData = [
        { message: "Hi", id: "1" },
        { message: "How are you doing?", id: "2" },
        { message: "I am ok", id: "3" },
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((item) => (
                    <DialogItem name={item.name} id={item.id} />
                ))}
            </div>
            <div className={s.messages}>
                {postsData.map((item) => (
                    <Message message={item.message} />
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
