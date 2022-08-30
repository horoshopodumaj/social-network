import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>Jonh</div>
                <div className={s.dialog}>Max</div>
                <div className={s.dialog}>Valery</div>
                <div className={s.dialog}>Diana</div>
                <div className={s.dialog}>Maria</div>
                <div className={s.dialog}>Ivan</div>
                <div className={s.dialog}>Mark</div>
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
