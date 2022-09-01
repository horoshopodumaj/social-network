import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = ({ name, id }) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img
                className={s.img_message}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgm_ydBb1m56SGa1vwNK4dZshNKWpPSlbCA8GB9QhBxBV3z9213UpzzjHsI25EL1a0r4w&usqp=CAU"
            />
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};

export default DialogItem;
