import {
    addMessageActionCreator,
    updateNewMessageActionCreator,
} from "../../redux/dialogs_reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addMessageText = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let addChangeMessage = (newMessage) => {
                    store.dispatch(updateNewMessageActionCreator(newMessage));
                };
                return (
                    <Dialogs
                        addChangeMessage={addChangeMessage}
                        addMessageText={addMessageText}
                        dialogsPage={state.dialogsPage}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
