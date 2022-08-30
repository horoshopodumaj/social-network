import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to="/dialogs/1">Jonh</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Max</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Valery</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Diana</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Maria</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/7">Mark</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you doing?</div>
                <div className={s.message}>I am ok</div>
            </div>
        </div>
    );
};

export default Dialogs;
