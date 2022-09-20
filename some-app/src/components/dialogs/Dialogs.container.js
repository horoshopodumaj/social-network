import {
    addMessageActionCreator,
    updateNewMessageActionCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addChangeMessage: (newMessage) => {
            dispatch(updateNewMessageActionCreator(newMessage));
        },
        addMessageText: () => {
            dispatch(addMessageActionCreator());
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
