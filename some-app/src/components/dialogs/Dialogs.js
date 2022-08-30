import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = ({ name, id }) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};

const Message = ({ message }) => {
    return <div className={s.message}>{message}</div>;
};
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Jonh" id="1" />
                <DialogItem name="Max" id="2" />
                <DialogItem name="Valery" id="3" />
                <DialogItem name="Diana" id="4" />
                <DialogItem name="Maria" id="5" />
                <DialogItem name="Ivan" id="6" />
                <DialogItem name="Mark" id="7" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How are you doing?" />
                <Message message="I am ok" />
            </div>
        </div>
    );
};

export default Dialogs;
