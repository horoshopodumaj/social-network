import {
    addMessageActionCreator,
    updateNewMessageActionCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let addMessageText = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let addChangeMessage = (newMessage) => {
        props.store.dispatch(updateNewMessageActionCreator(newMessage));
    };

    return (
        <Dialogs
            addChangeMessage={addChangeMessage}
            addMessageText={addMessageText}
            dialogsPage={state}
        />
    );
};

export default DialogsContainer;
