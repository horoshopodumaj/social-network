import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.setAuthUser().then((data) => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(
                    data.data.id,
                    data.data.email,
                    data.data.login
                );
            }
        });
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
